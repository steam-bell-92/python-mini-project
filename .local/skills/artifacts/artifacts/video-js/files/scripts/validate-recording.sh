#!/bin/bash
# Validates that the video recording lifecycle hooks are properly wired up.
# Exit 0 = valid, Exit 1 = missing hooks.

ARTIFACT_DIR="$(dirname "$0")/.."
SRC_DIR="$ARTIFACT_DIR/src"

errors=0

# Check that useVideoPlayer is imported somewhere in components/
if ! grep -rq "useVideoPlayer" "$SRC_DIR/components/"; then
  echo "ERROR: No component imports useVideoPlayer from @/lib/video."
  echo "  VideoTemplate must use: const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });"
  echo "  Without this, video export will not work correctly."
  errors=$((errors + 1))
fi

# Check that hooks.ts still has the actual startRecording/stopRecording calls (not just the type declaration)
if ! grep -Fq 'window.startRecording?.()' "$SRC_DIR/lib/video/hooks.ts" 2>/dev/null; then
  echo "ERROR: src/lib/video/hooks.ts is missing the window.startRecording?.() call."
  echo "  This file should not be modified. Restore it from the template."
  errors=$((errors + 1))
fi

if ! grep -Fq 'window.stopRecording?.()' "$SRC_DIR/lib/video/hooks.ts" 2>/dev/null; then
  echo "ERROR: src/lib/video/hooks.ts is missing the window.stopRecording?.() call."
  echo "  This file should not be modified. Restore it from the template."
  errors=$((errors + 1))
fi

if [ $errors -gt 0 ]; then
  echo ""
  echo "Found $errors recording lifecycle error(s). Video export will fail without these fixes."
  exit 1
fi

echo "Recording lifecycle validation passed."
exit 0
