import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-premium h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  );
};
