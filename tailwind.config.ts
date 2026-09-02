import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          dark: "hsl(var(--accent-dark))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "1",
            filter: "blur(20px)",
          },
          "50%": {
            opacity: "0.8",
            filter: "blur(30px)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scroll-left": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "scroll-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "gold-shimmer": {
          "0%, 100%": { "box-shadow": "0 0 0 0 hsl(45 90% 60% / 0.0), 0 0 20px hsl(45 90% 60% / 0.25)" },
          "50%": { "box-shadow": "0 0 0 6px hsl(45 90% 60% / 0.15), 0 0 40px hsl(45 90% 60% / 0.55)" },
        },
        "tilt-in": {
          "0%": { opacity: "0", transform: "translateY(40px) rotate(-2deg)" },
          "100%": { opacity: "1", transform: "translateY(0) rotate(0)" },
        },
        "line-flow": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translateY(0)" },
          "50%": { transform: "scale(1.12) translateY(-2%)" },
          "100%": { transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "scroll-left": "scroll-left 30s linear infinite",
        "scroll-right": "scroll-right 20s linear infinite",
        "gold-shimmer": "gold-shimmer 2.4s ease-in-out infinite",
        "tilt-in": "tilt-in 0.7s ease-out both",
        "line-flow": "line-flow 3.5s linear infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        "ken-burns": "ken-burns 24s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-beige-premium": "var(--gradient-beige-premium)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-hero-text": "var(--gradient-hero-text)",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "premium": "var(--shadow-premium)",
        "glow-purple": "var(--glow-purple)",
        "glow-beige": "var(--glow-beige)",
        "shadow-glow-beige": "var(--shadow-glow-beige)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
