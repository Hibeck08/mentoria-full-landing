import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  featured?: boolean;
  title: string;
  price: string;
  features: PricingFeature[];
}

export const PricingCard = ({ featured, title, price, features }: PricingCardProps) => {
  return (
    <div 
      className={`relative bg-card border rounded-2xl p-8 transition-all duration-300 ${
        featured 
          ? "border-accent shadow-glow-beige scale-105" 
          : "border-border hover:border-accent/50"
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-bold shadow-glow-beige">
            MAIS POPULAR
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl font-bold text-accent">
            {price}
          </span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-accent" />
            </div>
            <span className="text-muted-foreground">{feature.text}</span>
          </li>
        ))}
      </ul>

      <Button 
        className={`w-full ${featured ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-accent text-accent-foreground hover:bg-accent/90"}`}
        size="lg"
      >
        GARANTIR MINHA VAGA
      </Button>

      {featured && (
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-accent">
          <Shield className="w-4 h-4" />
          <span className="font-semibold">Garantia 7 Dias - Risco Zero</span>
        </div>
      )}
    </div>
  );
};
