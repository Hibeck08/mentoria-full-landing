import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import mentoriaLogo from "@/assets/mentoria-logo.png";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  to?: string;
  comingSoon?: boolean;
  featured?: boolean;
}

const ProductCard = ({ title, subtitle, description, to, comingSoon, featured }: ProductCardProps) => {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (comingSoon || !to) {
      return (
        <div className={`group relative w-full p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
          comingSoon 
            ? "bg-card/50 border-border/50 opacity-70 cursor-not-allowed" 
            : "bg-card border-border hover:border-accent/50"
        }`}>
          {children}
        </div>
      );
    }
    return (
      <Link 
        to={to} 
        className={`group relative w-full p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
          featured 
            ? "bg-gradient-to-br from-card via-card to-accent/10 border-accent shadow-glow-beige hover:shadow-glow-beige-lg" 
            : "bg-card border-border hover:border-accent/50 hover:shadow-lg"
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <CardWrapper>
      {featured && (
        <div className="absolute -top-3 left-6">
          <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            MAIS POPULAR
          </span>
        </div>
      )}
      
      {comingSoon && (
        <div className="absolute -top-3 left-6">
          <span className="bg-muted text-muted-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Clock className="w-3 h-3" />
            EM BREVE
          </span>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h3 className={`text-xl md:text-2xl font-bold mb-1 ${comingSoon ? "text-muted-foreground" : "text-foreground"}`}>
            {title}
          </h3>
          <p className={`text-sm font-medium mb-2 ${comingSoon ? "text-muted-foreground/70" : "text-accent"}`}>
            {subtitle}
          </p>
          <p className={`text-sm md:text-base ${comingSoon ? "text-muted-foreground/60" : "text-muted-foreground"}`}>
            {description}
          </p>
        </div>
        
        {!comingSoon && to && (
          <div className="flex items-center justify-end md:justify-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              featured 
                ? "bg-accent text-accent-foreground group-hover:scale-110" 
                : "bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
            }`}>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

const Lobby = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Logo */}
            <img 
              src={mentoriaLogo} 
              alt="FULL - Preparação Militar" 
              className="h-20 md:h-28 w-auto mb-8"
            />
            
            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Sua Aprovação Começa{" "}
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                Aqui
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Escolha o programa ideal para conquistar sua vaga nas Forças Armadas
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-6">
            <ProductCard
              title="MENTORIA FULL"
              subtitle="Acompanhamento Completo"
              description="Mentoria individualizada com acompanhamento semanal, correção de redações, simulados exclusivos e suporte direto do mentor."
              to="/mentoria"
              featured
            />
            
            <ProductCard
              title="MÉTODO FULL"
              subtitle="Curso Autodidata"
              description="Acesso completo ao método de estudos, videoaulas, materiais em PDF e cronograma estruturado para você estudar no seu ritmo."
              to="/metodo"
            />
            
            <ProductCard
              title="FULL ZENITH"
              subtitle="Matemática para Concursos Militares"
              description="Curso focado em matemática com todas as técnicas e macetes para gabaritar as provas das Forças Armadas."
              comingSoon
            />
            
            <ProductCard
              title="FULL AZIMUTH"
              subtitle="Física para Concursos Militares"
              description="Domine a física cobrada nos concursos militares com um método direto ao ponto e exercícios estratégicos."
              comingSoon
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FULL - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Lobby;
