import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'fast' | 'scale' | 'left' | 'right';
  delay?: number;
}

export const ScrollReveal = ({ 
  children, 
  className, 
  variant = 'default',
  delay = 0 
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal();

  const variantClass = {
    default: 'scroll-reveal',
    fast: 'scroll-reveal-fast',
    scale: 'scroll-reveal-scale',
    left: 'scroll-reveal-left',
    right: 'scroll-reveal-right'
  }[variant];

  return (
    <div 
      ref={ref} 
      className={cn(variantClass, isVisible && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
