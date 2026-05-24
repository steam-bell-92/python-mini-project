// Video Template - Replace ReplitLoadingScene with your scenes

import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { ReplitLoadingScene } from './ReplitLoadingScene';

const SCENE_DURATIONS = {
  loading: 99999999,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
  });

  return (
    <div
      className="w-full h-screen overflow-hidden relative"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      {/* mode="wait" = sequential, "sync" = simultaneous, "popLayout" = new snaps in while old animates out */}
      <AnimatePresence>
        {/* Replace this with your scenes */}
        {currentScene === 0 && (
          <ReplitLoadingScene key="loading" />
        )}
      </AnimatePresence>
    </div>
  );
}
