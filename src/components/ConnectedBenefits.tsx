import { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ConnectedBenefitItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  next?: string;
}

interface ConnectedBenefitsProps {
  items: ConnectedBenefitItem[];
  className?: string;
}

/**
 * Vertical timeline with a glowing flowing gold line in the center.
 * Each benefit is hidden until it enters the viewport, then reveals
 * as if the line was pulling it in.
 */
export const ConnectedBenefits = ({ items, className }: ConnectedBenefitsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() => items.map(() => false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting && !Number.isNaN(idx)) {
            setVisible((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items.length]);

  return (
    <div ref={containerRef} className={cn("relative max-w-5xl mx-auto", className)}>
      {/* Central vertical line */}
      <div className="pointer-events-none absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-0 md:-translate-x-1/2 w-px">
        {/* base track */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
        {/* flowing highlight */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-x-[-2px] h-1/2 animate-line-flow bg-[linear-gradient(to_bottom,transparent_0%,hsl(var(--accent)/0.6)_45%,hsl(0_0%_100%/0.9)_50%,hsl(var(--accent)/0.6)_55%,transparent_100%)] blur-[1px]" />
        </div>
        {/* outer glow */}
        <div className="absolute inset-y-0 -inset-x-1.5 bg-accent/10 blur-md" />
      </div>

      <div className="space-y-12 md:space-y-20 py-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          const isLeft = i % 2 === 0;
          const isVisible = visible[i];
          return (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              data-index={i}
              className="relative"
            >
              {/* node on the line */}
              <div
                className={cn(
                  "absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-10 transition-all duration-700",
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                )}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-accent/50 blur-lg animate-pulse-soft" />
                  <div className="relative w-5 h-5 rounded-full bg-gradient-primary border-2 border-accent shadow-glow-beige" />
                </div>
              </div>

              {/* card */}
              <div
                className={cn(
                  "grid md:grid-cols-2 md:gap-12 items-start",
                  isLeft ? "" : "md:[direction:rtl]"
                )}
              >
                <div
                  className={cn(
                    "pl-16 md:pl-0 md:[direction:ltr]",
                    isLeft ? "md:pr-16 md:text-right" : "md:pl-16",
                    "transition-all duration-700 ease-out",
                    isVisible
                      ? "opacity-100 translate-x-0 translate-y-0"
                      : cn(
                          "opacity-0 translate-y-8",
                          isLeft ? "md:-translate-x-10" : "md:translate-x-10"
                        )
                  )}
                  style={{ transitionDelay: isVisible ? "120ms" : "0ms" }}
                >
                  <div
                    className={cn(
                      "inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-primary shadow-glow-beige mb-4",
                      isLeft ? "md:ml-auto" : ""
                    )}
                  >
                    <Icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                  {item.next && (
                    <div
                      className={cn(
                        "mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1"
                      )}
                    >
                      → {item.next}
                    </div>
                  )}
                </div>
                {/* spacer for the opposite column on desktop */}
                <div className="hidden md:block md:[direction:ltr]" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectedBenefits;