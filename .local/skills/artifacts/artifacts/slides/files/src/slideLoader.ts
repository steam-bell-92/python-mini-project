import type { ComponentType } from "react";

import manifestJson from "@/data/slides-manifest.json";
import { parseSlidesManifest, type SlideEntry } from "@/data/slidesManifestSchema";

export interface LoadedSlide extends SlideEntry {
  Component: ComponentType;
}

const slideModules: Record<string, { default: ComponentType }> = import.meta.glob(
  "./pages/slides/*.tsx",
  { eager: true },
);

function loadManifestSlides(): SlideEntry[] {
  try {
    return parseSlidesManifest(manifestJson);
  } catch (error) {
    const reason = error instanceof Error ? error.message : "unknown error";
    throw new Error(
      `Invalid slide manifest. Run "pnpm run validate-slides" for details. ${reason}`,
    );
  }
}

const manifestSlides = loadManifestSlides();

export const slides: LoadedSlide[] = [...manifestSlides]
  .sort((a, b) => a.position - b.position)
  .map((entry) => {
    const filename = entry.filepath.split("/").pop();
    if (!filename) {
      throw new Error(`Slide "${entry.title}" has an invalid filepath.`);
    }

    const key = `./pages/slides/${filename}`;
    const mod = slideModules[key];

    if (!mod) {
      const available = Object.keys(slideModules).join(", ");
      throw new Error(
        `Slide "${entry.title}" references missing file: ${entry.filepath}. ` +
          `Available modules: ${available}`,
      );
    }

    return {
      ...entry,
      Component: mod.default,
    };
  });
