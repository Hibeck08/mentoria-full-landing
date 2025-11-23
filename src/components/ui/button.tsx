import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-accent-foreground hover:opacity-95 shadow-glow-beige hover:shadow-glow-beige transition-all duration-300 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/40 before:via-white/10 before:to-transparent before:pointer-events-none",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-accent bg-transparent text-accent hover:bg-gradient-primary hover:text-accent-foreground hover:shadow-glow-beige transition-all duration-300",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent/10 hover:text-accent",
        link: "text-accent underline-offset-4 hover:underline",
        hero: "bg-gradient-primary text-accent-foreground hover:opacity-95 shadow-glow-beige font-bold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-beige before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/40 before:via-white/10 before:to-transparent before:pointer-events-none",
        gold: "bg-gradient-primary text-accent-foreground hover:opacity-95 shadow-glow-beige hover:shadow-glow-beige font-bold transition-all duration-300 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/50 before:via-white/20 before:to-transparent before:pointer-events-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        <span className="relative z-10">{children}</span>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
