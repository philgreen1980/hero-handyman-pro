import { useState } from "react";

export interface ProjectPair {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption: string;
  city: string;
}

interface ProjectGalleryProps {
  projects: ProjectPair[];
  title?: string;
  subtitle?: string;
}

export default function ProjectGallery({
  projects,
  title = "Recent Projects in Your Neighborhood",
  subtitle = "Real work, real results — from homes just like yours across the Metro East.",
}: ProjectGalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Grid of before/after pairs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden shadow-md border border-border bg-background cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => setActive(active === i ? null : i)}
            >
              {/* Photo pair */}
              <div className="grid grid-cols-2 divide-x divide-border">
                {/* BEFORE */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.beforeSrc}
                    alt={project.beforeAlt}
                    loading="lazy"
                    width={450}
                    height={338}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                    Before
                  </span>
                </div>

                {/* AFTER */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.afterSrc}
                    alt={project.afterAlt}
                    loading="lazy"
                    width={450}
                    height={338}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                    After
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-foreground leading-snug">
                    {project.caption}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {project.city}
                  </p>
                </div>
                <span className="text-xs text-primary font-medium shrink-0 ml-2">
                  {active === i ? "▲ Less" : "▼ More"}
                </span>
              </div>

              {/* Expanded detail */}
              {active === i && (
                <div className="px-4 pb-4 text-sm text-muted-foreground border-t border-border pt-3">
                  Completed by Hero Handyman Pro — serving {project.city} and
                  surrounding Metro East communities.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
