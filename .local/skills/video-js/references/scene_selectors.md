---
name: video-scene-controls
description: Add interactive scene controls (jump, lock-loop, progress bar) to video-js artifacts. Use when building or updating the scene selector overlay for animated videos. Replaces the old scene_selectors.md pattern with a cleaner hook-based architecture.
---

# Video Scene Controls

Interactive control bar for video-js artifacts that lets viewers jump between scenes and lock-loop individual scenes. The bar renders only inside an iframe (the Replit preview pane) so exports stay clean.

## Architecture

Three files, clear separation of concerns:

| File | Role |
| --- | --- |
| `useSceneControls.ts` | Hook that encapsulates all playback workarounds behind a clean index-based API |
| `VideoWithControls.tsx` | Wrapper component: iframe gate, control bar UI, hover/tap reveal |
| `VideoTemplate.tsx` | Scene renderer: accepts optional `durations`, `loop`, `onSceneChange` props |

### Why the workarounds exist

The `useVideoPlayer` hook in `src/lib/video/hooks.ts` is read-only (the recording/export pipeline depends on it). It accepts a static `durations` object and advances linearly. It has no `seekTo`, `loopCurrent`, or `setActiveScene` API. The `useSceneControls` hook works around these limitations:

- **Jumping to a scene**: Rotate the durations object so the target scene is first, then remount `VideoTemplate` via a `mountKey` bump.
- **Scene-lock looping**: Create a 2-entry durations object with the same scene under `_r1` / `_r2` suffixes. A single entry won't loop because `setCurrentScene(0)` is a no-op when already at 0.
- **Tracking the active scene**: `VideoTemplate` calls `onSceneChange(rawKey)` on every scene transition. The hook strips `_r1`/`_r2` suffixes and maps back to the original index.

These workarounds are hidden inside the hook. Consumers just use `jumpTo(index)` and `toggleLock()`.

## When to use

Run this step once, right after the design subagent finishes the initial video build and workflow logs are clean. Skip on iteration prompts. The main agent runs this directly — never delegate to a subagent.

## Files to create/edit

### 1. `useSceneControls.ts`

```tsx
import { useCallback, useMemo, useState } from 'react';

const REPEAT_SUFFIX_RE = /_r[12]$/;

export function stripRepeatSuffix(key: string): string {
  return key.replace(REPEAT_SUFFIX_RE, '');
}

function rotateFromIndex(
  durations: Record<string, number>,
  startIndex: number,
): Record<string, number> {
  const keys = Object.keys(durations);
  if (startIndex <= 0) return durations;
  const result: Record<string, number> = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[(startIndex + i) % keys.length];
    result[key] = durations[key];
  }
  return result;
}

function buildLockedDurations(key: string, duration: number): Record<string, number> {
  return { [`${key}_r1`]: duration, [`${key}_r2`]: duration };
}

export function useSceneControls(baseDurations: Record<string, number>) {
  const sceneKeys = useMemo(() => Object.keys(baseDurations), [baseDurations]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [locked, setLocked] = useState(false);
  const [mountKey, setMountKey] = useState(0);
  const [tick, setTick] = useState(0);

  const durations = useMemo(() => {
    if (locked) {
      const key = sceneKeys[activeIndex];
      return buildLockedDurations(key, baseDurations[key]);
    }
    return rotateFromIndex(baseDurations, activeIndex);
  }, [locked, activeIndex, sceneKeys, baseDurations]);

  const onSceneChange = useCallback(
    (rawKey: string) => {
      const clean = stripRepeatSuffix(rawKey);
      const idx = sceneKeys.indexOf(clean);
      if (idx >= 0) setActiveIndex(idx);
      setTick((t) => t + 1);
    },
    [sceneKeys],
  );

  const jumpTo = useCallback((index: number) => {
    setActiveIndex(index);
    setMountKey((k) => k + 1);
    setTick((t) => t + 1);
  }, []);

  const toggleLock = useCallback(() => {
    setLocked((prev) => !prev);
    setMountKey((k) => k + 1);
    setTick((t) => t + 1);
  }, []);

  return {
    sceneKeys,
    activeIndex,
    locked,
    mountKey,
    tick,
    durations,
    activeDuration: baseDurations[sceneKeys[activeIndex]] ?? 0,
    onSceneChange,
    jumpTo,
    toggleLock,
  };
}
```

**Hook API:**

| Return value | Type | Description |
| --- | --- | --- |
| `sceneKeys` | `string[]` | Original scene keys in order |
| `activeIndex` | `number` | Index of the currently playing scene |
| `locked` | `boolean` | Whether scene-lock is on |
| `mountKey` | `number` | Increments on jump/lock — use as `key` on `VideoTemplate` to force remount |
| `tick` | `number` | Increments on every scene change — drives progress bar reset |
| `durations` | `Record<string, number>` | Computed durations object to pass to `VideoTemplate` |
| `activeDuration` | `number` | Duration of the currently active scene in ms |
| `onSceneChange` | `(rawKey: string) => void` | Pass to `VideoTemplate`'s `onSceneChange` prop |
| `jumpTo` | `(index: number) => void` | Jump to scene by index |
| `toggleLock` | `() => void` | Toggle scene-lock |

### 2. VideoTemplate changes

Export `SCENE_DURATIONS` and accept optional props. Strip `_r[12]` suffixes to resolve scene components:

```tsx
export const SCENE_DURATIONS = { /* design subagent's values */ };
const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  /* map each duration key to its scene component */
};
export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentScene, currentSceneKey } = useVideoPlayer({ durations, loop });
  useEffect(() => { onSceneChange?.(currentSceneKey); }, [currentSceneKey, onSceneChange]);
  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '') as keyof typeof SCENE_DURATIONS;
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ... persistent background/midground layers using sceneIndex for position arrays ... */}
      <AnimatePresence mode="popLayout">
        {SceneComponent && <SceneComponent key={currentSceneKey} />}
      </AnimatePresence>
    </div>
  );
}
```

**IMPORTANT — AnimatePresence key must be `currentSceneKey`, NOT `baseSceneKey`.** When scene-lock is active, the hook creates two durations entries with `_r1` / `_r2` suffixes that both map to the same base scene. If you use `baseSceneKey` as the key, both iterations produce the same key and AnimatePresence won't re-mount/re-animate the scene — causing the loop to appear frozen. Using `currentSceneKey` (which includes the suffix) ensures the key alternates between e.g. `build2_r1` and `build2_r2`, triggering a proper exit/enter cycle on every loop.

For persistent elements that use index-based position arrays (e.g. bottle position, background opacity), use `sceneIndex` (derived from `baseSceneKey`) instead of `currentScene` — this ensures they resolve to the correct position regardless of duration rotation.

Defaults preserve existing behavior so the export path (`<VideoTemplate />` with no props) is identical to pre-controls behavior.

### 3. VideoWithControls wrapper

```tsx
export default function VideoWithControls() {
  const isIframed = typeof window !== 'undefined' && window.self !== window.top;

  const {
    sceneKeys, activeIndex, locked, mountKey, tick,
    durations, activeDuration, onSceneChange, jumpTo, toggleLock,
  } = useSceneControls(SCENE_DURATIONS);

  // ... collapse/hover/tap state ...

  // Export path: no props, preserves recording markers
  if (!isIframed) return <VideoTemplate />;

  return (
    <div className="relative w-full h-screen">
      <VideoTemplate
        key={mountKey}
        durations={durations}
        loop
        onSceneChange={onSceneChange}
      />
      {/* Control bar sensor + ControlBar component */}
    </div>
  );
}
```

Update `App.tsx` to render `VideoWithControls` instead of `VideoTemplate`.

## Control bar UI

Full-width strip at the bottom of the video. Left-to-right inside the bar: **scene-lock button, vertical divider, segmented progress bar, scene counter, collapse chevron**. The bar sits inside a taller invisible hover sensor so it reappears on mouseover after the user has collapsed it.

### Visibility behavior

- Bar shows by default on load.
- Clicking the chevron hides it (slides down via `translate-y-full opacity-0 pointer-events-none`).
- While collapsed, moving the mouse into the bottom `height: 25%` of the video reveals it. Leaving the sensor hides it again.
- Clicking the chevron a second time (it now reads `ChevronUp`) pins the bar visible again even when the mouse leaves.
- On touch, tapping inside the sensor while collapsed pins the bar until the user taps outside the sensor.
- Use `translate-y` + `opacity` for the slide — not `display: none`, which would kill the hover sensor.

### ControlBar

```tsx
const PROGRESS_TICK_MS = 60;

interface ControlBarProps {
  visible: boolean;
  collapsed: boolean;
  locked: boolean;
  sceneKeys: string[];
  activeIndex: number;
  activeDuration: number;
  tick: number;
  onToggleLock: () => void;
  onJumpTo: (index: number) => void;
  onToggleCollapsed: () => void;
}

function ControlBar({
  visible, collapsed, locked, sceneKeys, activeIndex, activeDuration, tick,
  onToggleLock, onJumpTo, onToggleCollapsed,
}: ControlBarProps) {
  return (
    <div
      className={`flex items-center gap-3 bg-black/50 backdrop-blur-sm px-5 py-4 transition-all duration-200 ease-out ${
        visible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <button
        onClick={onToggleLock}
        className={`w-14 h-14 flex items-center justify-center transition-colors rounded-lg shrink-0 ${
          locked
            ? 'text-white bg-white/15 hover:bg-white/25'
            : 'text-white/60 hover:text-white hover:bg-white/10'
        }`}
        title={locked ? 'Loop current scene: on' : 'Loop current scene: off'}
        aria-label={locked ? 'Loop current scene: on' : 'Loop current scene: off'}
        aria-pressed={locked}
      >
        <Repeat className="w-8 h-8" />
      </button>

      <div className="w-px self-stretch bg-white/15" aria-hidden="true" />

      <ProgressSegments
        sceneKeys={sceneKeys}
        activeIndex={activeIndex}
        activeDuration={activeDuration}
        tick={tick}
        onJumpTo={onJumpTo}
      />

      <div className="text-xl text-white/60 font-mono tabular-nums shrink-0">
        {activeIndex + 1}/{sceneKeys.length}
      </div>

      <button
        onClick={onToggleCollapsed}
        className="w-14 h-14 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors rounded-lg shrink-0"
        title={collapsed ? 'Show controls' : 'Hide controls'}
        aria-label={collapsed ? 'Show controls' : 'Hide controls'}
        aria-expanded={!collapsed}
      >
        {collapsed ? <ChevronUp className="w-10 h-10" /> : <ChevronDown className="w-10 h-10" />}
      </button>
    </div>
  );
}
```

### ProgressSegments (isolated timer)

The 60ms interval lives here so its ticks don't re-render `VideoWithControls` or `VideoTemplate`.

```tsx
function ProgressSegments({
  sceneKeys, activeIndex, activeDuration, tick, onJumpTo,
}: {
  sceneKeys: string[];
  activeIndex: number;
  activeDuration: number;
  tick: number;
  onJumpTo: (index: number) => void;
}) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    setElapsed(0);
    const start = performance.now();
    const id = window.setInterval(() => {
      setElapsed(performance.now() - start);
    }, PROGRESS_TICK_MS);
    return () => window.clearInterval(id);
  }, [tick]);

  const progress = activeDuration > 0 ? Math.min(1, elapsed / activeDuration) : 0;

  return (
    <div className="flex-1 flex items-center gap-1.5">
      {sceneKeys.map((key, i) => {
        const isActive = i === activeIndex;
        const fill = isActive ? progress * 100 : 0;
        return (
          <button
            key={key}
            onClick={() => onJumpTo(i)}
            className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden cursor-pointer hover:h-4 hover:bg-white/25 transition-all relative min-h-[12px]"
            aria-label={`Jump to scene ${i + 1}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <div
              className="absolute inset-y-0 left-0 bg-white/90 rounded-full transition-[width] duration-100"
              style={{ width: `${fill}%` }}
            />
          </button>
        );
      })}
    </div>
  );
}
```

### Sizing notes

- Scene-lock and chevron buttons are both `w-14 h-14` (56px). Scene-lock icon is `w-8 h-8`; chevron is `w-10 h-10` because `ChevronDown`/`ChevronUp` read visually lighter than `Repeat` at the same size.
- Progress segments are `h-3` normally, `h-4` on hover (makes them easier to click). `flex-1` keeps them equal width.
- Scene counter is `text-xl` so it reads alongside the 32–40px icons.
- Bar container padding is `px-5 py-4`; gap between elements is `gap-3`.
- No text labels on segments — `aria-label` only. The scene counter gives the "N/total" context.

### Sensor + reveal (inside `VideoWithControls`)

```tsx
const sensorRef = useRef<HTMLDivElement | null>(null);
const [collapsed, setCollapsed] = useState(false);
const [hovering, setHovering] = useState(false);
const [tapPinned, setTapPinned] = useState(false);

const handlePointerEnter = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
  if (e.pointerType === 'mouse') setHovering(true);
}, []);
const handlePointerLeave = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
  if (e.pointerType === 'mouse') setHovering(false);
}, []);
const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
  if (e.pointerType === 'mouse') return;
  if (collapsed) setTapPinned(true);
}, [collapsed]);
const handleToggleCollapsed = useCallback(() => {
  setCollapsed(c => {
    // Clear any stale hover/tap-pin state so the chevron click wins.
    if (!c) { setHovering(false); setTapPinned(false); }
    return !c;
  });
}, []);

// Clear tapPinned when the user taps outside the sensor.
useEffect(() => {
  if (!(collapsed && tapPinned)) return;
  const onDocPointerDown = (e: PointerEvent) => {
    if (e.pointerType === 'mouse') return;
    const sensor = sensorRef.current;
    if (sensor && !sensor.contains(e.target as Node)) setTapPinned(false);
  };
  document.addEventListener('pointerdown', onDocPointerDown);
  return () => document.removeEventListener('pointerdown', onDocPointerDown);
}, [collapsed, tapPinned]);

const barVisible = !collapsed || hovering || tapPinned;

// In the return():
<div
  ref={sensorRef}
  className="absolute bottom-0 left-0 right-0 z-50 flex flex-col justify-end"
  style={{ height: '25%' }}
  onPointerEnter={handlePointerEnter}
  onPointerLeave={handlePointerLeave}
  onPointerDown={handlePointerDown}
>
  <div className="flex-1 w-full" aria-hidden="true" />
  <ControlBar
    visible={barVisible}
    collapsed={collapsed}
    locked={locked}
    sceneKeys={sceneKeys}
    activeIndex={activeIndex}
    activeDuration={activeDuration}
    tick={tick}
    onToggleLock={toggleLock}
    onJumpTo={jumpTo}
    onToggleCollapsed={handleToggleCollapsed}
  />
</div>
```

The invisible `flex-1 w-full` filler above the bar gives the pointer a target area to mouse into while the bar is hidden. The sensor stays mounted at all times so `onPointerEnter` re-fires on every re-entry, not just the first.

## Recording safety

- **Export path** (`!isIframed`): renders `<VideoTemplate />` with no props. `startRecording` fires on mount, `stopRecording` after the last scene. No rotation, no lock, no remounts.
- **Preview path** (iframed): `window.startRecording` / `window.stopRecording` are undefined, so marker calls are no-ops. Mount key bumps are safe.

## Validation

1. Run `bash scripts/validate-recording.sh` — fix any issues.
2. Restart the workflow.
3. Read logs — fix build errors until clean.
4. Call `presentArtifact`.
