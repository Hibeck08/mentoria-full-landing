import { ArrowRight, Clock, Sparkles, BookOpen, Video, Target, Brain, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import mentoriaLogo from "@/assets/mentoria-logo.png";
import lobbyWallpaper from "@/assets/lobby-wallpaper.png";
import mentoriaBanner from "@/assets/mentoria-banner.png";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description?: string;
  features?: string[];
  to?: string;
  comingSoon?: boolean;
  featured?: boolean;
  backgroundImage?: string;
}

const ProductCard = ({ title, subtitle, description, features, to, comingSoon, featured, backgroundImage }: ProductCardProps) => {
  const baseStyles = "group relative w-full rounded-2xl border-2 transition-all duration-300 block overflow-hidden";
  
  const getStyles = () => {
    if (comingSoon) {
      return `${baseStyles} bg-card/30 border-border/30 cursor-not-allowed`;
    }
    if (featured) {
      return `${baseStyles} border-accent/60 shadow-[0_0_30px_rgba(228,195,132,0.15)] hover:shadow-[0_0_40px_rgba(228,195,132,0.25)] hover:border-accent`;
    }
    return `${baseStyles} bg-card border-border hover:border-accent/50 hover:shadow-lg`;
  };

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (comingSoon || !to) {
      return <div className={getStyles()}>{children}</div>;
    }
    return <Link to={to} className={getStyles()}>{children}</Link>;
  };

  return (
    <CardWrapper>
      {/* Background Image for Featured Card */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
      )}
      
      <div className={`relative z-10 ${featured ? 'p-6 md:p-8' : 'p-6 md:p-8'}`}>
        {featured && (
          <div className="absolute -top-0 left-6 -translate-y-1/2">
            <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              MAIS POPULAR
            </span>
          </div>
        )}
        
        {comingSoon && (
          <div className="absolute -top-0 left-6 -translate-y-1/2">
            <span className="bg-muted text-muted-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Clock className="w-3 h-3" />
              EM BREVE
            </span>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <h3 className={`text-xl md:text-2xl font-bold mb-1 ${comingSoon ? "text-muted-foreground" : "text-foreground"}`}>
              {title}
            </h3>
            <p className={`text-sm font-medium mb-3 ${comingSoon ? "text-muted-foreground/70" : "text-accent"}`}>
              {subtitle}
            </p>
            
            {description && (
              <p className={`text-sm md:text-base mb-4 ${comingSoon ? "text-muted-foreground/60" : "text-muted-foreground"}`}>
                {description}
              </p>
            )}
            
            {features && features.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {!comingSoon && to && (
            <div className="flex items-center justify-end md:justify-center md:self-center">
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
      </div>
    </CardWrapper>
  );
};

const Lobby = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Wallpaper */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${lobbyWallpaper})` }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10">
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
            <div className="max-w-3xl mx-auto space-y-6">
              <ProductCard
                title="MENTORIA FULL"
                subtitle="Acompanhamento Completo e Personalizado"
                features={[
                  "Aulas ao vivo e gravadas",
                  "Metodologia única de ensino",
                  "Livro Método Hibeck com vídeos explicativos",
                  "Planos de metas personalizados",
                  "+2000 flashcards com todos os assuntos do edital",
                  "Suporte direto do mentor"
                ]}
                to="/mentoria"
                featured
                backgroundImage={mentoriaBanner}
              />
              
              <ProductCard
                title="MÉTODO FULL"
                subtitle="A Metodologia que Você Precisa para Classificar"
                features={[
                  "Acesso ao Método Hibeck completo",
                  "Como revisar e fazer questões corretamente",
                  "Como filtrar questões estratégicas",
                  "Livro Método Hibeck com vídeos explicativos",
                  "+2000 flashcards com teoria, exemplos e exceções",
                  "ACESSO VITALÍCIO"
                ]}
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
    </div>
  );
};

export default Lobby;
