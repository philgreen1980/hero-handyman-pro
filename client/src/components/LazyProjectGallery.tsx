import { Suspense, lazy } from "react";
import type { ProjectPair } from "./ProjectGallery";

// Lazy-load the heavy ProjectGallery component — it only loads when the page
// containing it is rendered, keeping the initial JS bundle smaller.
const ProjectGallery = lazy(() => import("./ProjectGallery"));

interface LazyProjectGalleryProps {
  projects: ProjectPair[];
  title?: string;
  subtitle?: string;
}

/**
 * Skeleton shown while the gallery chunk is downloading.
 * Matches the approximate height of a 2-row gallery grid so the page
 * doesn't jump when the real component mounts.
 */
function GallerySkeleton() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-10">
          <div className="h-9 bg-muted rounded-md w-72 mx-auto mb-3 animate-pulse" />
          <div className="h-5 bg-muted rounded-md w-96 mx-auto animate-pulse" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md border border-border bg-background"
            >
              <div className="grid grid-cols-2 divide-x divide-border">
                <div className="aspect-[4/3] bg-muted animate-pulse" />
                <div className="aspect-[4/3] bg-muted animate-pulse" />
              </div>
              <div className="px-4 py-3">
                <div className="h-4 bg-muted rounded w-3/4 animate-pulse mb-1" />
                <div className="h-3 bg-muted rounded w-1/2 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LazyProjectGallery(props: LazyProjectGalleryProps) {
  return (
    <Suspense fallback={<GallerySkeleton />}>
      <ProjectGallery {...props} />
    </Suspense>
  );
}
