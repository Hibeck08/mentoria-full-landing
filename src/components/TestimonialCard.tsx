import { Star } from "lucide-react";

interface TestimonialCardProps {
  image: string;
  name: string;
  achievement: string;
  testimonial: string;
}

export const TestimonialCard = ({ image, name, achievement, testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-premium transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-accent/50"
        />
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-sm text-accent font-semibold">{achievement}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-muted-foreground leading-relaxed italic">"{testimonial}"</p>
      <div className="mt-4 pt-4 border-t border-border">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
          <span className="w-2 h-2 bg-accent rounded-full" />
          Estudante Aprovado
        </span>
      </div>
    </div>
  );
};
