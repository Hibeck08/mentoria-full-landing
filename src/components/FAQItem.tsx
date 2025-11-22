import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQItem = ({ question, answer, value }: FAQItemProps) => {
  return (
    <AccordionItem value={value} className="border-border">
      <AccordionTrigger className="text-left hover:text-primary font-semibold">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground leading-relaxed">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};
