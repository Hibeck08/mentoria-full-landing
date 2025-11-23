import { X, CheckCircle2 } from "lucide-react";

interface ComparisonCardProps {
  title: string;
  items: string[];
  type: 'before' | 'after';
}

export const ComparisonCard = ({ title, items, type }: ComparisonCardProps) => {
  const isBefore = type === 'before';
  
  return (
    <div className={`${isBefore ? 'bg-destructive/10 border-destructive/30' : 'bg-accent/10 border-accent/30'} border-2 rounded-3xl p-8 hover:shadow-premium transition-all duration-300`}>
      <h3 className={`text-2xl font-bold mb-6 ${isBefore ? 'text-destructive' : 'text-accent'}`}>
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            {isBefore ? (
              <X className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            )}
            <span className={`${isBefore ? 'text-muted-foreground' : 'text-foreground font-medium'}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
