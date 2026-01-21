import { ArrowRight, Clock, Sparkles, CheckCircle, Users, Star, Infinity, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import mentoriaLogo from "@/assets/mentoria-logo.png";
import lobbyWallpaper from "@/assets/lobby-wallpaper.png";
import mentoriaBanner from "@/assets/mentoria-banner.png";
import metodoBanner from "@/assets/metodo-banner.png";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description?: string;
  features?: { text: string; highlight?: boolean }[];
  to?: string;
  comingSoon?: boolean;
  featured?: boolean;
  backgroundImage?: string;
  instructor?: string;
}

const ProductCard = ({ title, subtitle, description, features, to, comingSoon, featured, backgroundImage, instructor }: ProductCardProps) => {
  const baseStyles = "group relative w-full rounded-2xl transition-all duration-500 block overflow-hidden";
  
  const getStyles = () => {
    if (comingSoon) {
      return `${baseStyles} bg-gradient-to-br from-card/60 to-card/40 border border-border/50 backdrop-blur-sm`;
    }
    if (featured) {
      return `${baseStyles} border-2 border-accent shadow-[0_0_50px_rgba(228,195,132,0.2)] hover:shadow-[0_0_70px_rgba(228,195,132,0.35)] hover:border-accent`;
    }
    return `${baseStyles} border border-accent/30 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm hover:border-accent/60 hover:shadow-[0_0_40px_rgba(228,195,132,0.15)]`;
  };

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (comingSoon || !to) {
      return <div className={getStyles()}>{children}</div>;
    }
    return <Link to={to} className={getStyles()}>{children}</Link>;
  };

  return (
    <CardWrapper>
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70 md:from-background/95 md:via-background/80 md:to-background/50" />
        </div>
      )}
      
      {/* Top Badge - Positioned inside with padding */}
      {featured && (
        <div className="absolute top-4 left-4 md:top-5 md:left-6 z-20">
          <span className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold flex items-center gap-1.5 shadow-lg border border-accent/20">
            <Star className="w-3 h-3 fill-current" />
            MAIS POPULAR
          </span>
        </div>
      )}
      
      {comingSoon && (
        <div className="absolute top-4 left-4 md:top-5 md:left-6 z-20">
          <span className="bg-muted/90 text-muted-foreground px-4 py-1.5 rounded-full text-[10px] md:text-xs font-medium flex items-center gap-1.5 border border-border/50 backdrop-blur-sm">
            <Clock className="w-3 h-3" />
            EM BREVE
          </span>
        </div>
      )}
      
      <div className={`relative z-10 ${featured ? 'pt-14 pb-6 px-4 md:pt-16 md:pb-8 md:px-8' : 'pt-12 pb-5 px-4 md:pt-14 md:pb-6 md:px-6'}`}>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:items-start md:justify-between">
          <div className="flex-1 md:pr-8">
            <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-1.5 md:mb-2 ${comingSoon ? "text-muted-foreground" : "text-foreground"}`}>
              {title}
            </h3>
            <p className={`text-xs md:text-sm font-medium mb-3 md:mb-4 ${comingSoon ? "text-muted-foreground/70" : "text-accent/90"}`}>
              {subtitle}
            </p>
            
            {instructor && (
              <div className={`text-xs md:text-sm mb-3 flex items-center gap-2 ${comingSoon ? "text-muted-foreground/60" : "text-foreground/80"}`}>
                <Users className="w-3.5 h-3.5 text-accent" />
                <span>com <span className="text-accent font-medium">{instructor}</span></span>
              </div>
            )}
            
            {description && (
              <p className={`text-xs md:text-sm mb-4 leading-relaxed ${comingSoon ? "text-muted-foreground/60" : "text-muted-foreground"}`}>
                {description}
              </p>
            )}
            
            {features && features.length > 0 && (
              <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-2.5 mt-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    {feature.highlight ? (
                      <Zap className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5 fill-accent/30" />
                    ) : (
                      <CheckCircle className="w-3.5 h-3.5 text-accent/70 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-[11px] md:text-xs leading-relaxed ${
                      feature.highlight 
                        ? "text-accent font-medium" 
                        : "text-muted-foreground"
                    }`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {!comingSoon && to && (
            <div className="flex items-center justify-center md:self-center mt-2 md:mt-0">
              <div className={`w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                featured 
                  ? "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground group-hover:scale-110 shadow-lg shadow-accent/30" 
                  : "bg-accent/10 border border-accent/30 text-accent group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent"
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
        <section className="relative py-12 md:py-20 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Logo */}
              <img 
                src={mentoriaLogo} 
                alt="FULL - Preparação Militar" 
                className="h-16 md:h-24 w-auto mb-6 md:mb-8"
              />
              
              {/* Headline */}
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-3">
                Sua Aprovação Começa{" "}
                <span className="bg-gradient-to-r from-accent via-accent to-accent/70 bg-clip-text text-transparent">
                  Aqui
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-[11px] md:text-sm text-accent/90 font-medium mb-3 md:mb-4 tracking-wide">
                SAIBA TUDO QUE TIVE QUE APRENDER PARA SER O 08 DA EFOMM E 01 DA AFA!
              </p>
              
              <p className="text-sm md:text-lg text-muted-foreground max-w-md md:max-w-none">
                Escolha o programa ideal para conquistar sua vaga nas Forças Armadas
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-6 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-5 md:space-y-6">
              {/* MENTORIA FULL */}
              <ProductCard
                title="MENTORIA FULL"
                subtitle="O Pacote Completo — Tudo em Um Lugar Só"
                features={[
                  { text: "Método FULL + FULL QUESTÕES inclusos", highlight: true },
                  { text: "FULL ZENITH + FULL AZIMUTH inclusos", highlight: true },
                  { text: "Simulados com direcionamento personalizado", highlight: true },
                  { text: "Aulas ao vivo e gravadas" },
                  { text: "Metodologia exclusiva de ensino" },
                  { text: "Livro Método Hibeck + vídeos" },
                  { text: "Planos de metas personalizados" },
                  { text: "+2000 flashcards completos" },
                  { text: "Suporte direto do mentor" },
                ]}
                to="/mentoria"
                featured
                backgroundImage={mentoriaBanner}
              />
              
              {/* MÉTODO FULL */}
              <ProductCard
                title="MÉTODO FULL"
                subtitle="A Metodologia que Você Precisa para Classificar"
                features={[
                  { text: "Acesso completo ao Método Hibeck" },
                  { text: "Como revisar de forma estratégica" },
                  { text: "Técnicas de filtragem de questões" },
                  { text: "Livro Método Hibeck + vídeos" },
                  { text: "+2000 flashcards com teoria e exemplos" },
                  { text: "Acesso Vitalício", highlight: true },
                ]}
                to="/metodo"
                backgroundImage={metodoBanner}
              />
              
              {/* FULL QUESTÕES */}
              <ProductCard
                title="FULL QUESTÕES"
                subtitle="O Banco de Questões Definitivo para sua Aprovação"
                features={[
                  { text: "+20.000 questões resolvidas em detalhes", highlight: true },
                  { text: "Filtro inteligente por desempenho" },
                  { text: "Listas personalizadas de estudo" },
                  { text: "Simulados cronometrados" },
                  { text: "Suporte direto para dúvidas" },
                ]}
                comingSoon
              />
              
              {/* FULL ZENITH */}
              <ProductCard
                title="FULL ZENITH"
                subtitle="Domine a Matemática dos Concursos Militares"
                description="Curso completo com aulas ao vivo e gravadas, banco de questões exclusivo e técnicas para gabaritar."
                instructor="Cleber Morais"
                features={[
                  { text: "Aulas ao vivo semanais" },
                  { text: "Aulas gravadas disponíveis" },
                  { text: "Banco de questões exclusivo" },
                  { text: "Material de apoio completo" },
                ]}
                comingSoon
              />
              
              {/* FULL AZIMUTH */}
              <ProductCard
                title="FULL AZIMUTH"
                subtitle="Domine a Física dos Concursos Militares"
                description="Curso completo com aulas ao vivo e gravadas, banco de questões exclusivo e método direto ao ponto."
                instructor="Vasconselos"
                features={[
                  { text: "Aulas ao vivo semanais" },
                  { text: "Aulas gravadas disponíveis" },
                  { text: "Banco de questões exclusivo" },
                  { text: "Material de apoio completo" },
                ]}
                comingSoon
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 md:py-8 border-t border-border/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs md:text-sm text-muted-foreground/70">
              © {new Date().getFullYear()} FULL — Todos os direitos reservados
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Lobby;
