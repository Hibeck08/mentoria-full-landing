import { Shield, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollReveal } from "./ScrollReveal";

export const GuaranteeSection = ({ onScrollToPlans }: { onScrollToPlans?: () => void }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="bg-card/80 backdrop-blur-sm border-2 border-accent/30 rounded-3xl p-12 shadow-glow-gold">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Shield className="w-16 h-16 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Garantia <span className="text-accent">Incondicional</span> de 7 Dias
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Experimente a Mentoria FULL por 7 dias completos. Se você não estiver satisfeito por qualquer motivo, 
                    devolvemos <strong className="text-foreground">100% do seu investimento</strong> sem perguntas.
                  </p>
                  
                  <ul className="space-y-2 mb-6 text-left inline-block">
                    {[
                      "Sem burocracia ou complicações",
                      "Devolução do valor integral",
                      "Você não perde nada testando"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  variant="gold" 
                  size="lg" 
                  onClick={onScrollToPlans}
                  className="text-lg font-bold px-12 py-8 rounded-full shadow-glow-gold hover:shadow-glow-gold/70 transition-all"
                >
                  COMEÇAR AGORA COM GARANTIA →
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  🔒 Seu investimento está 100% protegido
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
