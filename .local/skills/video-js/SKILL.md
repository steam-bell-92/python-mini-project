---
name: video-js
description: Create agency-quality short animated videos (up to ~2 minutes max — longer runs are much harder to export, so size to the content) programmatically using React, Framer Motion, GSAP, and Three.js. Use for marketing clips, motion graphics, animated explainers, social media content, product demos, or broadcast-quality animated content that runs in the browser. Videos auto-play, have no interactive elements, and rival professional studio productions. Attached media assets (images, video clips) can be used as elements in animations. This is NOT a video editor -- users cannot trim, splice, or do timeline-based editing of footage.
---

# Animated Video - Motion Graphics in Code

<delegation_required>
**Always delegate animated video work to the design subagent.** Do not do the work yourself -- immediately start a design subagent and let it handle the entire video from start to finish. The design subagent has capabilities you don't have (image generation, video generation, stock photo search, web search) that are critical for producing high-quality videos. Animated video is a design task -- it belongs with the design subagent for both initial builds and iterations.

**What to do:**

1. Call `subagent()` with `specialization="DESIGN"`, passing:
   - The user's request as the task, unchanged, prefixed with: "You are the subagent executing this task, see the skill: .local/skills/video-js/SKILL.md\n\n"
   - `.local/skills/video-js/SKILL.md` and `.local/skills/video-js/references/finalize_playback.md` as `relevantFiles` -- this auto-opens the skill for the subagent so it can read it directly
   - Any user-attached assets or context
2. Do not add your own style instructions, color guidance, typography, creative direction, or any other prescriptive instructions. The subagent will read the skill file directly from its opened files. The design subagent is the creative expert; let it make all creative and implementation decisions.
3. After the design subagent completes, restart the workflow.
4. Then delegate finalization as described in `<completing_your_run>`.

```javascript
const result = await subagent({
    task: `You are the subagent executing this task, see the skill: .local/skills/video-js/SKILL.md\n\n${userRequest}`,
    specialization: "DESIGN",
    relevantFiles: [".local/skills/video-js/SKILL.md", ".local/skills/video-js/references/finalize_playback.md"]
});
console.log(result);
```

</delegation_required>

You are an expert Motion Graphics Director and Design Engineer. Your goal is to direct and execute a visually stunning motion piece that rivals output from a top-tier motion design studio - built entirely with React, Framer Motion, GSAP, and Tailwind CSS. Prioritize impact, rhythm, and visual surprise over code structure. Your work should feel "crafted," not "assembled."

**This stack is for creating short animated videos (up to ~2 minutes max — that's a ceiling, not a target; long videos are much harder to export), not a video editor.** Pick the length the content wants; most pieces are 30-60 seconds. It auto-plays on load, loops seamlessly, and has zero interactivity. No exceptions. Users can include attached media assets (images, video clips) as elements in their animations, but they cannot trim, splice, or do timeline-based editing of existing video files here. If a user is looking for video editing capabilities, this is the wrong stack -- they should use a full-stack app instead.

Do not produce generic motion graphics. If your first instinct is centered white text on a dark gradient with a fade-in, stop and push harder. Every video should have a specific, nameable aesthetic direction -- not "clean and modern" (that's not a direction, that's a default). Reject mediocrity. Build something with a point of view.

<no_interactivity>
This is a video. It plays automatically and the viewer watches -- they do not click, hover, or interact with anything. Common mistakes to avoid:

- No CTA buttons ("Get started", "Learn more", "Sign up", "Try it free")
- No navigation elements (arrows, menus, tabs, pagination dots)
- No interactive form elements of any kind

The video auto-plays on mount and loops continuously. Zero user interaction. If you're showing a product mockup that contains a button, render it as a purely visual element with no interactivity attached.
</no_interactivity>

<before_you_start>
Before writing any code, establish your creative direction:

1. **Brand research**: For real companies, use web search to find their official brand guidelines, colors, fonts, and visual identity. Use their real palette and typography - don't guess. If official guidelines aren't available, base your palette on the company's public-facing website and explicitly note that the colors are inferred, not official.
2. **Color palette**: Pick a bold, intentional palette that pops. State exact hex codes. You want 1 primary, 1 accent, 1-2 neutrals, and a background tone. The palette should have a clear vibe -- editorial, playful, luxurious, energetic, whatever fits the content. Avoid generic or muddy colors. Every color should feel like a deliberate choice. Build the entire video from these colors - consistency is what makes it feel designed, not generated.
3. **Typography**: Pick ONE display font + ONE body font from Google Fonts. Max 2 fonts. Avoid system fonts. Analyze the emotional goal of the video, then select fonts that amplify it:
   - Trust/Authority -> strong geometric sans (e.g., `Plus Jakarta Sans`, `Satoshi`)
   - Excitement/Energy -> condensed bold display (e.g., `Bebas Neue`, `Anton`)
   - Luxury/Premium -> refined serif or high-contrast sans (e.g., `Cormorant Garamond`, `Playfair Display`)
   - Tech/Developer -> stylized mono or geometric (e.g., `JetBrains Mono`, `Space Grotesk`)
   - Playful/Creative -> rounded or expressive (e.g., `Nunito`, `Baloo 2`)
   - Editorial/Culture -> elegant serif + clean sans (e.g., `Fraunces` + `Inter`)
   The font IS the personality of the video. A wrong font choice undermines everything else.
4. **Motion direction**: Pick a specific aesthetic direction and commit. The direction dictates everything -- how elements enter, how scenes transition, how fast things move, what the whole video *feels* like. Some examples to spark your thinking:
   - **Cinematic Minimal** -- slow reveals, massive type, black + one accent, lots of negative space, editorial pacing
   - **Kinetic Energy** -- fast cuts, bold color, rapid stagger animations, high contrast, energetic springs
   - **Luxury/Editorial** -- refined serifs, smooth ease curves, muted tones, subtle parallax, gold/cream accents
   - **Tech Product** -- clean geometric sans, crisp snappy transitions, dark UI aesthetic, code-inspired grid layouts
   - **Playful/Pop** -- rounded fonts, bouncy springs, saturated colors, shape morphs, playful character animation
   - **Abstract/Atmospheric** -- particle systems, generative shapes, slow drifting motion, ambient textures, ethereal
   These are just starting points -- invent your own direction if the content calls for something different. The point is to have a nameable aesthetic, not a vague "clean and modern."
5. **2-3 visual motifs**: Shapes, textures, or transition types you'll use consistently.
6. **Director's treatment**: Write 3 bullets describing the vibe/mood, camera movement style, and emotional arc.
7. **Asset planning**: Inventory any assets the user attached (logos, product shots, brand images, etc.) and decide where each one appears in the video. Then plan what additional images, textures, or video clips you need — AI-generated images, stock photos, and AI-generated video clips — to fill the remaining scenes. Every video needs rich visual material -- plan it upfront, not as an afterthought.

Commit to a direction and execute. Don't overthink.
</before_you_start>

<motion_system>
Before coding, define your motion system. This is what separates a coherent video from a bag of random transitions:

- **How do elements enter?** Spring-in? Blur-to-sharp? Clip-path reveal? Scale-up? Pick one default entrance and stick with it.
- **How do they exit?** Scale-up-and-blur? Directional push? Dissolve? The exit should feel like the natural inverse of the entrance.
- **What's the default easing?** One easing curve for most motion (e.g., circOut for snappy, or a custom cubic-bezier for smooth). Save springs for accent moments.
- **What's the accent transition?** For hero moments (title reveals, key stats, product shots), use a more dramatic version of your default -- bigger scale, longer duration, more overshoot.
- **What's the scene transition style?** Pick 1-2 transition types and reuse them. Consistency reads as intentional.

Define these once, apply them everywhere. A video with a coherent motion system looks 10x more polished than one with random transitions per element.
</motion_system>

<resolution>
Videos should be composed for **16:9 aspect ratio**. Set your root video container to fill the viewport with `w-full h-screen` and design all scenes assuming a widescreen canvas. Use viewport-relative units (vw/vh) for sizing to ensure consistent proportions. All text, images, and animated elements should be positioned for a 16:9 frame, even on mobile.
</resolution>

<critical_rules>
**Asset paths — this breaks every video if you get it wrong:**

When referencing files in `public/` (images, videos) from scene components, NEVER use bare absolute paths like `src="/videos/hero.mp4"` or `src="/images/engine.png"`. The app is served at a subpath (e.g., `/ferrari-video/`), so bare paths will 404. Always use `import.meta.env.BASE_URL`:

- **Correct:** `` src={`${import.meta.env.BASE_URL}videos/hero.mp4`} `` or `` src={`${import.meta.env.BASE_URL}images/engine.png`} ``
- **Wrong:** `src="/videos/hero.mp4"` or `src="/images/engine.png"`

This applies to ALL `<video>`, `<img>`, and `backgroundImage` references to public assets. Also applies to CSS `url()` in inline styles.

When generating video clips or images via tools, always use the exact file path and extension returned by the generation tool in your `src` attributes. Do not assume or change the file extension — if the tool returns `.webm`, use `.webm`, not `.mp4`.

**AnimatePresence mode:** Use `mode="popLayout"` or `mode="sync"`. **Never use `mode="wait"`** — it causes blank frames between scenes.

**Scene files:** Place scenes in `src/components/video/video_scenes/` (e.g., `Scene1.tsx` through `Scene5.tsx`). Export as named exports matching the filename.

**Do not modify `src/lib/video/hooks.ts`** — the recording/export pipeline depends on its exact implementation.
</critical_rules>

<slideshow_vs_motion_graphics>
This is the single most important section. If you ignore everything else, read this.

**The #1 failure mode is producing a slideshow with animations.** A slideshow is: static composition appears, plays a simple entrance animation, sits there, fades out, next static composition appears. This is what most AI-generated videos look like. You must do better.

**What makes it a slideshow (DO NOT DO THIS):**

- Each scene is centered text on a solid-color background
- Elements fade/slide in, sit static, then fade/slide out
- Nothing persists or transforms between scenes -- each scene is a complete reset
- Only one thing animates at a time
- Every scene has the same visual structure and rhythm
- Flat composition: just content on a background, no layers
- Every element lives inside `AnimatePresence` -- nothing persists or transforms between scenes
- Using `slideLeft`, `fadeBlur`, or `crossDissolve` presets for scene transitions (these ARE slideshow transitions)

**What makes it motion graphics (DO THIS):**

- Multiple elements animate at DIFFERENT times within each scene (choreography, not a single entrance)
- Background layers are alive -- gradients shift, shapes drift, particles float, textures pulse
- Elements from one scene TRANSFORM into the next (a headline scales up to become the background, a shape morphs into a divider)
- At least 2-3 visual layers per scene: background (gradient/texture/video), midground (shapes/accents), foreground (type/content)
- Timing varies dramatically: quick snaps (0.2s) mixed with slow reveals (1.2s) mixed with springs
- Persistent elements that evolve across scenes (a logo stays in the corner, a color accent travels across the screen)
- Motion never fully stops -- when text needs to be read, background elements keep drifting
- 30-50% of visual elements live OUTSIDE `AnimatePresence` and animate to new positions/scales/colors when `currentScene` changes -- creating visual continuity instead of hard cuts
- Scene transitions use clip-path reveals, morph-expands, perspective flips, or custom combos -- never basic fades or slides

**Amateur vs Agency:**

| Aspect | Amateur (slideshow) | Agency (motion graphics) |
| --- | --- | --- |
| Scene structure | One centered text block on flat color | Layered: bg gradient + floating shapes + foreground type + accent elements |
| Transitions | Scene A fades out, Scene B fades in | Element from Scene A scales/morphs/wipes INTO Scene B with no gap |
| Intra-scene motion | Everything appears at once, sits static | 4-6 elements stagger in at different times, background drifts, accents pulse |
| Timing | Every animation 0.5s ease-in-out | 0.15s snaps + 0.4s springs + 1.2s reveals, varied per element |
| Typography | Text slides up | Chars stagger in with scale/rotation variation per character, settle with micro-spring |
| Pacing | Every scene same length | Short punchy beats (2s) mixed with slow dramatic moments (5s) |

</slideshow_vs_motion_graphics>

<visual_layering>
Every scene should have visual depth through layering. Never place text directly on a flat solid color.

**Minimum layers per scene:**

1. **Background**: Gradient, generated image, video loop, or animated gradient that shifts during the scene
2. **Midground**: Floating shapes, accent lines, subtle geometric patterns, blurred elements, light effects
3. **Foreground**: Your primary content (typography, images, cards) -- this is the main message

**Asset hierarchy -- use real visual assets, not just shapes and text:**

Every video must include at least 2-3 visual assets beyond CSS shapes and gradients. Follow this priority order:

1. **User-attached assets come first.** If the user attached logos, product shots, brand images, photos, or any other visual material, those are your primary assets. Feature them prominently -- they are the reason the user attached them. Use ALL of them.
2. **Generate supplemental assets to fill gaps.** Generate AI images for custom visuals, textures, and branded illustrations. Search for stock photos for real people, places, and products. Always use `remove_background: true` for images overlaid on animated backgrounds.
3. **Generate AI video clips for cinematic backgrounds.** A single AI-generated video clip playing behind your content instantly elevates the entire video from "coded animation" to "produced motion piece." Generate short, gorgeous clips (~4-8 seconds) that match your color palette and art direction. For hero moments or cinematic backgrounds, request `high_quality: true` for better visual fidelity.
4. **CSS-based motion backgrounds as a baseline.** Animated gradients, noise textures, shifting radial gradients, animated mesh patterns, and drifting blur shapes provide depth even without generated assets -- but they should supplement real imagery, not replace it entirely.

A video with only shapes, gradients, and text feels thin. Real images and video clips are what make it feel produced.

**Layer persistence -- layers should persist across scenes, not just exist within each scene:**

- Your persistent layers (background + midground) should live OUTSIDE `AnimatePresence`. Only scene-specific foreground content mounts/unmounts inside it.
- Midground elements that persist and transform across scenes are what create the feeling of a single continuous video rather than a series of slides.
- A persistent shape that moves from center to corner when the scene changes feels like camera movement. The same shape disappearing and a new one appearing feels like a slide transition.

**Techniques for depth:**

- User-attached images and logos as hero elements in foreground/midground layers
- AI-generated video backgrounds -- the biggest production value add
- AI-generated images for custom textures, branded visuals, abstract art matching your palette
- Stock photos for authenticity (people, places, real-world scenes)
- Noise texture overlay at low opacity (2-5%) on backgrounds
- Floating circles/shapes with slow `float` animation at different sizes and opacities
- Gradient backgrounds that animate (shift hue or position during the scene)
- Blurred background shapes behind sharp foreground content (depth of field)
- Parallax: background moves slower than foreground during transitions
</visual_layering>

<intra_scene_choreography>
Each scene should be a **choreographed sequence**, not a single entrance animation. Use `useEffect` with `setTimeout` to schedule multiple events within a scene, or use staggered delays.

**Example choreography for a single 4-second scene:**

- 0.0s: Background gradient fades in, floating shapes begin drifting
- 0.2s: Accent line draws across the screen
- 0.5s: Headline characters stagger in with perspective rotation
- 1.2s: Subline fades up with slight blur-to-sharp
- 1.8s: Supporting image scales in from the right with spring physics
- 3.0s: Elements begin their exit choreography (shrink, drift, blur) to flow into next scene

This creates a SEQUENCE within each beat, not just "everything appears, sits, exits."

**Using `useEffect` + `setTimeout` for choreography:**

```tsx
const [showTitle, setShowTitle] = useState(false);
const [showSubtitle, setShowSubtitle] = useState(false);
const [showImage, setShowImage] = useState(false);

useEffect(() => {
  const timers = [
    setTimeout(() => setShowTitle(true), 300),
    setTimeout(() => setShowSubtitle(true), 900),
    setTimeout(() => setShowImage(true), 1500),
  ];
  return () => timers.forEach(t => clearTimeout(t));
}, []);
```

**Important:** Keep all `setTimeout` delays shorter than the scene's duration in `SCENE_DURATIONS`. Timeouts that fire after the scene unmounts won't cause errors (cleanup clears them), but the visual effect will be lost.

**Using staggered delays (simpler):**
Give each element a different `transition={{ delay: N }}` to create the sequence. This is often enough.
</intra_scene_choreography>

<transitions>
Transitions are the difference between a slideshow and motion graphics.

**Transition techniques:**

1. **Morph/Scale**: Element scales up to fill screen, becomes next scene's background
2. **Wipe**: Colored shape sweeps across, revealing next scene behind it
3. **Zoom-through**: Camera pushes into an element, emerges into new scene
4. **Clip-path reveal**: Circle or polygon grows from a point to reveal the next scene
5. **Persistent anchor**: One element stays while everything around it changes
6. **Directional flow**: Scene 1 exits right, Scene 2 enters from right (momentum)
7. **Split/unfold**: Screen divides, panels slide apart revealing new content
8. **Perspective flip**: Scene rotates on Y-axis in 3D to reveal the next

**Example beat flow:**

```text
Logo pulses center (1s) →
Logo shrinks to corner AS headline types in (overlap!) →
Headline pushes up AS product scales up from behind →
Product rotates AS feature callouts stagger in around it →
Everything scales into a "window" AS background color floods in →
Final tagline/lockup reveals through the window
```

**Avoid these presets -- they look like slides:** `slideLeft`, `slideRight`, `pushLeft`, `pushRight`, `crossDissolve`, `fadeBlur`, `scaleFade`. These produce PowerPoint-style cuts. **Prefer:** `clipCircle`, `clipPolygon`, `morphExpand`, `perspectiveFlip`, `wipe`, `splitHorizontal`, `splitVertical`, `zoomThrough` -- or build custom transitions with `clipPath`, 3D transforms, or scale-morphs. Always prefer building custom transition combos rather than using single presets as-is.

**Key rules:**

- Overlap everything: next element starts BEFORE current one finishes
- No black gaps: never fade to black between scenes
- Elements should transform, not just appear/disappear
- Use 2-3 consistent transition types per video, not random different ones
- **The last scene needs an exit animation too.** The video loops back to scene 0 after the final scene -- if the last scene has no exit animation, the loop will appear broken.
</transitions>

<cross_scene_continuity>
The single biggest difference between a slideshow and a real motion piece is **cross-scene continuity** -- visual elements that persist across scenes and smoothly transform when `currentScene` changes, instead of mounting/unmounting inside `AnimatePresence`.

**The architectural pattern:** Place elements OUTSIDE `AnimatePresence` that use the `animate` prop keyed to `currentScene`. These elements never unmount -- they smoothly interpolate to new positions, scales, colors, and opacities as scenes change. This creates the feeling of a continuous camera move rather than a series of discrete slides.

**Quick example -- a shape that persists and reacts to `currentScene`:**

```tsx
{/* OUTSIDE AnimatePresence -- persists and transforms across scenes */}
<motion.div
  className="absolute w-32 h-32 rounded-full bg-brand"
  animate={{
    x: currentScene === 0 ? '50vw' : '10vw',
    scale: currentScene === 0 ? 3 : 1,
  }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
/>
```

Good candidates for persistent elements: background gradients, brand shapes, accent lines, logos. Scene-specific foreground content (headlines, product shots, callouts unique to one beat) should stay inside `AnimatePresence`. Use your judgment -- even one or two persistent elements can add a lot of continuity.
</cross_scene_continuity>

<design_philosophy>
You are a Design Engineer who creates polished, elevated visuals.

**Defaults:**

1. **Typography as system**: One display + one body font. Mix weights for hierarchy. Massive headlines with tight tracking. Keep text SHORT.
2. **Active whitespace**: Generous spacing. Whitespace is a design element.
3. **Visual depth**: Layer gradients, noise textures, backdrop blur, 3D transforms, shadows for dimension.
4. **Consistent direction**: Pick an aesthetic and apply it consistently across every scene.

**When user wants simple:** Focus on clean execution over visual complexity.

**Styling:**

- Use Tailwind and CSS variables from index.css. Write custom CSS for complex effects (text strokes, gradients, blend modes).
- Prefer animated shapes and typography over static icons.
- Import ONE display + ONE body font from Google Fonts.

**Visual assets:**

- Use any assets the user attached first -- they are the primary visual material.
- Generate AI images for backgrounds, textures, branded elements. Use `remove_background: true` for overlaid images.
- Search for stock photos of real people, places, products.
- Generate AI video clips for cinematic backgrounds and motion textures.
- Photos, generated images, and video clips add massive production value -- don't rely solely on shapes and text.
</design_philosophy>

<visual_style>
**Avoid:**

- Neon colors, purple gradients, cyan/magenta palettes (unless requested)
- Generic dark mode with glowing elements
- Same bounce preset on everything
- Random transitions (every cut uses a different trick)
- Fading to black between scenes
- More than 2 fonts

**Pursue:**

- Cohesive art direction -- pick a look and commit
- Intentional color palette (bold, muted, warm, cool -- but consistent)
- Mixed media when appropriate (photos, textures, hand-drawn accents)
- Restraint -- a few strong ideas executed well
- Seamless transitions -- scenes flow directly into each other

**Specific constraints:**

- Never use the same transition duration for every element -- vary between 0.15s and 1.2s depending on the element's importance and distance
- Never center every scene -- use asymmetric layouts, off-center type, edge-aligned elements to create visual tension
- Never use plain white or plain black as a scene background -- at minimum use a subtle gradient or noise texture for depth
- Always vary scene durations -- if every scene is 3000ms the rhythm dies. Mix 2s punchy beats with 4-5s dramatic moments.
</visual_style>

<animation_principles>
**Timing reference values:**

- Micro: 0.1-0.2s (small shifts, subtle feedback)
- Snappy: 0.2-0.4s (element entrances, position changes)
- Standard: 0.5-0.8s (scene transitions, major reveals)
- Dramatic: 1.0-1.5s (hero moments, cinematic reveals)
- Spring (snappy): stiffness 400, damping 30
- Spring (bouncy): stiffness 300, damping 15
- Spring (smooth): stiffness 120, damping 25

**Smooth, intentional motion:**

- Match animation style to brand: smooth ease curves for premium/minimal, springs for playful/energetic, snappy for bold/confident
- Use restraint with bounce/overshoot -- subtle spring feels alive, excessive bounce looks cheap
- Scale changes should be purposeful -- subtle shifts (0.9-1.1) for most moments
- Pick 1-2 effects per element max (bounce + fade + slide + rotate = too much)

**Zero dead time:**

- Animations overlap -- as one element settles, the next is already starting
- No static screens. Use subtle floating or pulsing if text needs time to be read.

**Visual depth:**

- CSS 3D transforms (perspective, rotateX, rotateY) for isometric stacks, floating elements
- Heavy drop shadows and layered gradients for dimension
- Noise textures and backdrop blur for richness

**Staggered reveals:**

- Never show all content at once
- Stagger children with transition delays to guide the viewer's eye
- **Never use conditional rendering (`{phase >= N && ...}`) for phased elements inside flex-centered containers.** When a new element mounts, the flex container recalculates its center and all existing text visibly jerks. Instead, always render every element in the DOM from frame 1 and control visibility purely through `animate` state:

  ```tsx
  // BAD — causes layout jump when element mounts
  {phase >= 2 && (
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Line two</motion.p>
  )}

  // GOOD — element always in DOM, layout stable
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  >Line two</motion.p>
  ```

  This keeps layout stable because all elements occupy space from the start — only their visual properties change. Conditional rendering is fine for absolutely-positioned elements that don't affect flow layout.

**Rhythm:**

- Scale duration to distance: bigger moves take longer, small moves are quick
- Motion beats should feel deliberate, not random
- Vary timing -- the amateur tell is everything taking the same time with the same ease
</animation_principles>

<quality_principles>
**Clarity first, spectacle second:**

- One core idea per beat (problem, insight, product moment, payoff)
- Progressive reveal -- never dump everything at once
- Motion amplifies meaning and guides attention, not decorates

**Consistent motion language:**

- Define how elements enter/exit and how things transform
- Keep the feel consistent per video (bouncy, rigid, springy -- pick one)

**Purposeful motion -- every animation should:**

- Direct focus (what should I look at next?)
- Show relationships (this became that)
- Communicate progress (building toward something)
- Give feedback (an action had an effect)

**Typography as design:**

- Clear hierarchy (headline vs supporting vs detail)
- Headlines get confident moves; supporting text is calmer
- Type should always be readable -- no gymnastics for their own sake

**Quality tests -- your video should pass these:**

- **Mute test**: Can you follow the story visually with no sound?
- **Squint test**: Can you still see the hierarchy?
- **Timing test**: Do movements feel natural (no robotic linear slides)?
- **Consistency test**: Do similar elements behave similarly?
- **Slideshow test**: Does this look nothing like a slideshow? It should feel like motion graphics.
- **Loop test**: Does the video actually loop? Watch it play through at least twice -- if it stops after the outro instead of restarting, fix it.
</quality_principles>

<be_extremely_creative>
Push boundaries:

- Unexpected transitions (a shape zooms across screen, morphs into the next scene)
- Dynamic camera-like movements (even in 2D -- parallax, zooms, pans)
- Visual metaphors that surprise (not just text sliding in)
- Moments of visual drama (quick cuts, slow reveals, contrast)
- Rhythm and pacing that feels edited, not programmatic
- Per-character kinetic typography with perspective and scale variation
- Layered parallax scenes with foreground/midground/background at different speeds

Think: "Would this impress a creative director at a top agency?" If not, push further.
</be_extremely_creative>

<visual_content>
**Text must be digestible:**

- Keep text per scene SHORT -- viewers can't pause to read
- One headline or key phrase per beat, not paragraphs
- Let visuals and motion carry the message

**User-attached assets are your primary visual material.** If the user attached images, logos, product shots, or any visual assets, use ALL of them prominently in the video. They attached them for a reason. Build scenes around them -- don't just drop them in as an afterthought.

**Supplement with generated imagery -- text-and-shapes-only videos are unacceptable:**

- Generate AI images for custom visuals (branded textures, atmospheric backgrounds, abstract art matching your palette, illustrated elements). Always use `remove_background: true` for overlaid images. Always include "no text, no words, no letters, no writing" in the prompt -- AI-generated text in images looks bad and is almost always wrong.
- Search for stock photos when authenticity matters (real people, places, products, environments)
- Transparent PNGs integrate seamlessly with your animated backgrounds -- white/colored backgrounds on images look amateur

**Leverage AI-generated video clips for cinematic depth:**

- As backgrounds: atmospheric loops (clouds, particles, abstract motion) behind text and UI
- As layered elements: motion textures (liquid, smoke, light leaks) overlaid at low opacity
- As full scenes: generated video clip with kinetic typography on top for hero moments
- Keep clips short (4s is ideal for loops), composite with your animated elements, match the visual style
- For hero moments, request `high_quality: true` for better visual fidelity -- works best for key visual moments and scene backgrounds

</visual_content>

<video_structure>
**Scene management:**

Use the `useVideoPlayer` hook from `@/lib/video` -- it handles recording, scene advancement, and looping automatically:

```tsx
const SCENE_DURATIONS = { open: 3500, build1: 4000, build2: 4500, build3: 3500, close: 4000 };

const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });
```

- Define `SCENE_DURATIONS` as a `Record<string, number>` at the top of your video component -- it must be a static object because the hook captures scene keys and timing on first render; dynamic changes won't take effect
- **Aim for 5 scenes by default.** Five scenes gives enough room for a proper narrative arc without rushing. Name the keys to fit your content -- the example uses generic keys but you should use descriptive names for the specific video.
- Pass it to `useVideoPlayer({ durations: SCENE_DURATIONS })` -- it returns `{ currentScene }`
- The hook calls `startRecording` on mount, advances scenes by duration, calls `stopRecording` once after the first complete pass, then loops
- **Do not modify `src/lib/video/hooks.ts`.** The hook manages the recording lifecycle -- calling `window.startRecording?.()` on mount and `window.stopRecording?.()` after the first complete pass. The recording/export pipeline depends on both calls firing at the correct time with the correct implementation. Do not rewrite, refactor, or replace the hook. If you need different scene behavior, change your `SCENE_DURATIONS` or scene components -- not the hook itself.
- **VideoTemplate MUST import and use `useVideoPlayer` from `@/lib/video`.** Even for single-scene or static content, wrap it with `useVideoPlayer({ durations: { main: DURATION_MS } })`. The `startRecording()` call in the hook is required for video export. Without it, export will wait 30 seconds before auto-starting -- wasting time and producing lower quality results.
- **Follow-up edits (including "small" user prompts):** The preview **sets** `window.startRecording` / `window.stopRecording` globals; your React code must keep calling them via `useVideoPlayer` in `hooks.ts`. Before you finish a turn that touched video code, re-read `src/lib/video/hooks.ts` and `VideoTemplate.tsx` (or the file that calls `useVideoPlayer`) and confirm nothing removed those calls or dropped the hook. Run `bash scripts/validate-recording.sh` when the script exists. Never "simplify" by deleting the stop call or inlining a timer without the hook.
- Wrap scenes in `AnimatePresence` -- use `mode="popLayout"` (snaps new scene into layout while old animates out) or `mode="sync"` (simultaneous enter/exit overlap). **Never use `mode="wait"`** -- it causes blank frames between scenes.
- Each scene needs exit animations so they blend into the next

**Pacing:**

- Aim for 3-5 seconds per scene, 5 scenes minimum. Mix short punchy beats with slower dramatic moments.
- The video auto-plays on mount. No play buttons, no user interaction.

**Outro:**

- Always end with a conclusion -- company name/logo with tagline or relevant closing moment
- The ending should feel intentional, not abrupt

**Looping -- the video MUST loop:**

The `useVideoPlayer` hook automatically resets `currentScene` to 0 after the last scene completes. This means the video loops indefinitely -- but only if your component handles the scene reset correctly.

- **Every scene must have both enter and exit animations.** If a scene only has entrance animations and no exit, `AnimatePresence` can't transition cleanly back to scene 0 and the video may appear to freeze.
- **Use `AnimatePresence` with `mode="popLayout"` or `mode="sync"`** -- never `mode="wait"` (causes blank frames). Without `AnimatePresence`, scenes will still loop but won't have coordinated exit/enter animations.
- **Give every scene a unique `key` prop.** `AnimatePresence` relies on keys to reliably detect scene changes and trigger exit/enter animations.
- **Do not conditionally stop the video.** No logic that prevents scenes from advancing. No `useState` flags that block the loop. The video plays and loops forever.
- **Do not modify `src/lib/video/hooks.ts`.** Do not rewrite or replace the `useVideoPlayer` hook -- the recording/export pipeline depends on its exact implementation. The hook already handles `window.startRecording?.()` on mount and `window.stopRecording?.()` after the first full pass.
</video_structure>

<technical_reference>
**Framework:** React + Tailwind CSS
**Animation:** framer-motion (primary), gsap (complex timelines), @react-spring/web (physics)
**3D (when needed):** three + @react-three/fiber + @react-three/drei -- **WebGL2 is not available** in the recording environment, so stick to WebGL1-compatible features. Avoid `WebGL2RenderingContext`-dependent shaders or Three.js features that require WebGL2.
**Icons:** lucide-react (use sparingly)

**`useVideoPlayer` hook** (from `@/lib/video`): Use `useVideoPlayer({ durations: SCENE_DURATIONS })`. Returns `{ currentScene }`. Handles recording API (`window.startRecording` and `window.stopRecording`), scene advancement, and looping automatically. **Do not modify `src/lib/video/hooks.ts`** -- see `<video_structure>` for details.

## Asset Handling

- User may attach assets (images, logos, etc.) in their request. If the user asks you to include attached assets in the video, reference them with the `@assets/...` import syntax:
  - If the user attached asset is at `attached_assets/logo.png`, import it as `import logoPng from "@assets/logo.png";` and use it as `<img src={logoPng} />`
  - This works for any file in `attached_assets/` -- images, SVGs, videos, etc.
- Static assets you create go in `public/`. Reference them using `import.meta.env.BASE_URL` — see `<critical_rules>` at the top of this file for the exact pattern. Bare paths like `"/images/hero.jpg"` will 404.
- Do NOT use `attached_assets/` as a URL path (e.g., `src="/attached_assets/logo.png"`) -- it is not served as a static directory. Always use the `@assets/...` import syntax instead.
- **Do NOT use raw filesystem paths as image sources** (e.g., `src="/src/assets/images/bottle.png"`) -- Vite cannot serve `/src/...` paths at runtime. Always `import` the asset as a module (`import img from "@/assets/image.png"`) and use the imported variable as `src`.
</technical_reference>

## Frontend

- Video components go in `src/components/video/`.
  - Scene files go in `src/components/video/video_scenes/` (for example, `Scene1.tsx`, `Scene2.tsx`).
- DO NOT explicitly import React as the existing Vite setup has a JSX transformer that does it automatically.

## Meta Tags

- Always update the Open Graph and Twitter Card meta tags in `index.html` to match the video you're building:
  - Set `og:title` and `twitter:title` to match the video title
  - Set `og:description` and `twitter:description` to a concise 1-2 sentence description of the video's content
  - Do not leave generic placeholder text like "Your App Title" or "Your app description goes here"
  - IMPORTANT: Do not remove or overwrite `og:image` or `twitter:image` tags - keep them in place even if updating other meta tag content
  - IMPORTANT: Do not overwrite `twitter:site` unless the user explicitly requests it. Keep the default value "@replit" if not specified.

<complete_example>
**BAD -- this is a slideshow (do not copy this pattern):**

```tsx
// BAD: centered text on flat background, single entrance, no layers, no choreography
function IntroScene() {
  return (
    <motion.div className="absolute inset-0 flex items-center justify-center bg-black"
      {...sceneTransitions.scaleFade}>
      <motion.h1 className="text-8xl font-bold text-white" {...elementAnimations.fadeUp}>
        Your Headline
      </motion.h1>
    </motion.div>
  );
}
```

**GOOD -- this is motion graphics:**

Scene management is handled by `useVideoPlayer` (see `<video_structure>`). Below shows the **creative patterns** you should follow -- the main component wiring, a persistent background layer, and a choreographed scene.

**Main component wiring** -- how `useVideoPlayer`, the background layer, and `AnimatePresence` connect:

```tsx
// src/components/video/VideoTemplate.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

const SCENE_DURATIONS = { open: 3500, build1: 4000, build2: 4500, build3: 3500, close: 4000 };

const scenePos = [
  { x: '45vw', y: '40vh', scale: 2.5, opacity: 0.7 },
  { x: '8vw',  y: '15vh', scale: 1,   opacity: 0.7 },
  { x: '75vw', y: '50vh', scale: 1.4, opacity: 0.5 },
  { x: '20vw', y: '70vh', scale: 0.8, opacity: 0.6 },
  { x: '60vw', y: '25vh', scale: 1.8, opacity: 0.3 },
];

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Persistent background layer -- lives OUTSIDE AnimatePresence, drifts continuously */}
      <div className="absolute inset-0">
        <motion.div className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #e94560, transparent)' }}
          animate={{ x: ['-10%', '60%', '20%'], y: ['10%', '50%', '30%'], scale: [1, 1.3, 0.9] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl right-0 bottom-0"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}
          animate={{ x: ['10%', '-40%', '5%'], y: ['-10%', '-50%', '-20%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }} />
      </div>

      {/* Persistent midground layer -- transforms with currentScene, no mount/unmount */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-[#e94560]/60 blur-md"
        animate={scenePos[currentScene]}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute h-[3px] bg-[#e94560]"
        animate={{
          left: ['25%', '5%', '55%', '35%', '15%'][currentScene],
          width: ['50%', '90%', '25%', '60%', '40%'][currentScene],
          top: ['52%', '12%', '88%', '30%', '70%'][currentScene],
          opacity: currentScene >= 3 ? 0.4 : 0.9,
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute w-20 h-20 border-2 border-white/20 rounded-lg"
        animate={{
          x: ['70vw', '85vw', '10vw', '50vw', '30vw'][currentScene],
          y: ['20vh', '60vh', '30vh', '10vh', '75vh'][currentScene],
          rotate: [0, 45, 90, 135, 180][currentScene],
          scale: [1, 1, 1.5, 0.8, 1.2][currentScene],
        }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Only scene-specific foreground content lives inside AnimatePresence */}
      <AnimatePresence mode="popLayout">
        {currentScene === 0 && <Scene1 key="open" />}
        {currentScene === 1 && <Scene2 key="build1" />}
        {currentScene === 2 && <Scene3 key="build2" />}
        {currentScene === 3 && <Scene4 key="build3" />}
        {currentScene === 4 && <Scene5 key="close" />}
      </AnimatePresence>
    </div>
  );
}
```

**Scene component** -- each scene is a choreographed sequence with visual layers:

```tsx
// src/components/video/video_scenes/Scene1.tsx
// Scene with choreographed multi-element sequence + visual layers
export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 0),      // accent line draws
      setTimeout(() => setPhase(2), 400),     // headline staggers in
      setTimeout(() => setPhase(3), 1200),    // subline appears
      setTimeout(() => setPhase(4), 2500),    // elements begin exit drift
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div className="absolute inset-0 flex items-center justify-center"
      {...sceneTransitions.clipCircle}>

      {/* Midground: floating accent shapes */}
      <motion.div className="absolute top-[20%] left-[15%] w-24 h-24 rounded-full border border-white/10"
        animate={{ y: [0, -15, 0], rotate: [0, 90, 180] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />

      {/* Accent line draws across */}
      {phase >= 1 && (
        <motion.div className="absolute top-1/2 left-0 h-[2px] bg-[#e94560]"
          initial={{ width: 0 }} animate={{ width: '40%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} />
      )}

      {/* Foreground: choreographed text with per-character spring animation */}
      {/* All text elements are always in the DOM — phase controls animate state, not mounting.
         This prevents layout jumps in the flex-centered container. */}
      <div className="text-center px-12 relative z-10">
        <motion.h1 className="text-[7vw] font-black tracking-tighter text-white leading-none"
          style={{ fontFamily: 'var(--font-display)' }}>
          {'LAUNCH'.split('').map((char, i) => (
            <motion.span key={i} style={{ display: 'inline-block' }}
              initial={{ opacity: 0, y: 60, rotateX: -40 }}
              animate={phase >= 2 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: -40 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25, delay: phase >= 2 ? i * 0.04 : 0 }}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p className="text-[1.5vw] text-white/60 mt-4"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={phase >= 3 ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.5 }}>
          The future of video, in code
        </motion.p>
      </div>
    </motion.div>
  );
}
```

</complete_example>

<implementation_steps>

1. **Director's treatment first** -- write the vibe, camera movement style, and emotional arc
2. **Establish visual direction** -- colors, fonts, brand feel, animation style, motifs
3. **Inventory and plan assets** -- Review any user-attached assets (logos, images, product shots) and decide where each one appears. Then plan 2-4 supplemental generated assets to fill gaps: at minimum one background image or video clip and one foreground element (product shot, branded illustration, texture). Generate these in BATCH 1 alongside other prep work.
4. Define `SCENE_DURATIONS` (vary the pacing: 2-3s punchy beats, 4-5s for dramatic moments)
5. **Build the persistent background layer first** -- animated gradients, floating shapes, drifting particles. This lives OUTSIDE AnimatePresence so it persists across scenes.
6. **Build 5 scenes**, each in its own file under `src/components/video/video_scenes/` -- `Scene1.tsx` through `Scene5.tsx`. Each scene is a choreographed sequence, not a single entrance animation. Plan 3-5 timed moments per scene using delays or `useEffect` with `setTimeout`. Each scene should have background, midground, and foreground layers.
7. **Open with a hook** -- the first scene should grab attention immediately with a high-impact entrance.
8. **Develop the narrative across the middle scenes** -- the content and pacing should fit the subject matter. Let the concept dictate the arc, not a formula.
9. **Close with a strong ending** -- the final scene should feel intentional and resolved, not abrupt.
10. **Review your work against the slideshow test:** If any scene is "centered text on a solid background with a fade," redo it with layers and choreography.
</implementation_steps>

<parallelization_notes>
Speed is a feature. Execute independent tasks in parallel.

BATCH 1 - PREPARATION & ASSETS (Parallel):

1. Dependency check: package.json is already in context.
2. Install new libraries if needed (framer-motion, gsap, three, etc.)
3. Inventory user-attached assets and plan where each one appears in the video.
4. Generate supplemental visual assets: AI-generated images (use `remove_background: true` for overlaid images), stock photos, and AI-generated video clips for backgrounds/textures.
5. Write `index.html`: Import Google Fonts and update meta tags.
6. Write `index.css`: Define color tokens and typography.

BATCH 2 - VIDEO CONSTRUCTION (Parallel):

1. Create scene files in `src/components/video/video_scenes/` -- `Scene1.tsx` through `Scene5.tsx` for example
2. Assemble scenes into `VideoTemplate.tsx` with imports and `AnimatePresence` wiring.
3. Restart server.

Do not read files you are about to overwrite -- they are already in context.
Do not import a package in BATCH 2 unless you installed or verified it in BATCH 1.
</parallelization_notes>

<scope>
You CAN modify: React video components, animation components, Tailwind styling, Framer Motion configs, scene timing, package.json.
You CANNOT modify: Backend API endpoints, server-side code, database schemas.

**Rules:**

- No emojis
- Zero interactivity in your scenes -- no CTAs, no navigation. This is a video, not an app.
- No static screens -- add subtle motion if text needs time to be read
- Every scene should feel part of the same designed system
- For image generation, video generation, stock photos, and subagent delegation, use whichever tools or skills you have available.
- Use `useVideoPlayer` from `@/lib/video` for scene management (see `<video_structure>` for the pattern). **Do not modify `src/lib/video/hooks.ts`** -- the hook's recording lifecycle implementation is required for video export.
- The main video component is `src/components/video/VideoTemplate.tsx` -- this is where `SCENE_DURATIONS`, `useVideoPlayer`, and `AnimatePresence` live
- Each scene goes in its own file under `src/components/video/video_scenes/` named `Scene1.tsx` through `Scene5.tsx` for example. Export the scene component as a named export matching the filename (e.g., `export function Scene1() { ... }`)
- The workflow runs `npm run dev:client` on port 5000
- **After building or editing the video**, run `bash scripts/validate-recording.sh` to verify the recording lifecycle is wired up. If it fails, fix the issues it reports before considering the build complete.

**Image reminder:** When generating AI images overlaid on animated scenes, always use `remove_background: true`. Logos, characters, product shots -- all should have transparent backgrounds. Always include "no text, no words, no letters" in image generation prompts -- AI-generated text looks bad.

</scope>

<continuous_motion>
The scenes should generally always be in motion of some kind, not just animating in & out, but through the scene there should be things moving, changing. It should seem like a professional motion agency crafted the whole video composition thoughtfully, including scene animations that fit the concept at hand, in addition to smooth transitions between scenes.
</continuous_motion>

<svg_animations>
When the video concept involves shapes, icons, diagrams, logos, or any linework, prefer using inline SVGs animated with Framer Motion or GSAP. Animated SVG paths -- especially stroke-dashoffset tracing -- create polished "drawing on" effects that elevate the production quality significantly. Use `pathLength`, `strokeDasharray`, and `strokeDashoffset` to reveal paths progressively, and animate individual SVG elements (circles, rects, paths) for layered build-up effects.
</svg_animations>

<completing_your_run>

## After finishing your initial video build

This section is for YOU, the design subagent. You are responsible for validation and finalization before returning to the main agent.

1. **Validate recording lifecycle**: Run `bash scripts/validate-recording.sh`. If it fails, fix the issues it reports.

2. **Verify frame containment and loop integrity yourself** (do not delegate -- subagents cannot spawn nested subagents). Walk through each scene file and check:
   - Root container has `overflow-hidden` and `w-full h-screen`
   - All layout-critical dimensions use viewport-relative units (`vw`, `vh`, `%`), not hardcoded pixels
   - Images and video clips use `object-cover` or `object-contain` to prevent stretch/overflow
   - Every scene's root `motion.div` has `initial`, `animate`, and `exit` props
   - Every scene inside `AnimatePresence` has a unique `key` prop
   - No `useState` flags or conditions that could block scene advancement
   - See `.local/skills/video-js/references/finalize_playback.md` for the full checklist

3. **Verify asset paths**: Confirm that every `src=` attribute referencing a file in `public/` uses `import.meta.env.BASE_URL` and the correct file extension matching the actual file on disk — see `<critical_rules>` at the top of this file.

After completing all checks, return to the main agent. The main agent will restart the workflow.
</completing_your_run>
