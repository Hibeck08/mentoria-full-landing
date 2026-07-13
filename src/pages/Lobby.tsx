import { ArrowRight, Clock, Sparkles, CheckCircle, Users, Star, Infinity, Zap, MessageCircle, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import mentoriaLogoAsset from "@/assets/logo-silver.png";
const mentoriaLogo = mentoriaLogoAsset.url;
import lobbyWallpaper from "@/assets/lobby-wallpaper.webp";
import mentoriaBanner from "@/assets/mentoria-banner.webp";

import questoesBanner from "@/assets/questoes-banner.webp";
import adelphiBanner from "@/assets/adelphi-banner.webp";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description?: string;
  features?: { text: string; highlight?: boolean }[];
  to?: string;
  comingSoon?: boolean;
  featured?: boolean;
  backgroundImage?: string;
  backgroundPosition?: string;
  instructor?: string;
}

const ProductCard = ({ title, subtitle, description, features, to, comingSoon, featured, backgroundImage, backgroundPosition, instructor }: ProductCardProps) => {
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
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: backgroundPosition || (featured ? 'right 25% center' : 'center')
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/60 md:from-background/90 md:via-background/70 md:to-background/40" />
        </div>
      )}
      
      {/* Top Badge - Positioned inside with padding */}
      {featured && (
        <div className="absolute top-4 left-4 md:top-6 md:left-8 z-20">
          <span className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold flex items-center gap-1.5 shadow-lg border border-accent/20">
            <Star className="w-3 h-3 fill-current" />
            MAIS POPULAR
          </span>
        </div>
      )}
      
      {comingSoon && (
        <div className="absolute top-4 left-4 md:top-6 md:left-8 z-20">
          <span className="bg-muted/90 text-muted-foreground px-4 py-1.5 rounded-full text-[10px] md:text-xs font-medium flex items-center gap-1.5 border border-border/50 backdrop-blur-sm">
            <Clock className="w-3 h-3" />
            EM BREVE
          </span>
        </div>
      )}
      
      <div className={`relative z-10 ${featured ? 'pt-14 pb-6 px-4 md:pt-20 md:pb-10 md:px-10' : 'pt-12 pb-5 px-4 md:pt-16 md:pb-8 md:px-8'}`}>
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
              
              <p className="text-sm md:text-lg text-muted-foreground max-w-md md:max-w-none mb-6 md:mb-8">
                Escolha o programa ideal para conquistar sua vaga nas Forças Armadas
              </p>
              
              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                {/* WhatsApp Button - Vermilion */}
                <a
                  href="https://api.whatsapp.com/send?phone=5521992104885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-gradient-primary hover:opacity-90 text-accent-foreground font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-glow-beige hover:shadow-glow-beige hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Entre em Contato</span>
                </a>
                
                {/* Instagram Button */}
                <a
                  href="https://instagram.com/hibeck_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-gradient-primary hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-glow-beige hover:shadow-glow-beige hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span>@hibeck_</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-5 md:space-y-8">
              {/* MENTORIA FULL */}
              <ProductCard
                title="MENTORIA FULL"
                subtitle="O Pacote Completo Tudo em Um Lugar Só"
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
              
              {/* FULL ADELPHI */}
              <ProductCard
                title="FULL ADELPHI"
                subtitle="Português e Inglês Curso Completo pra Concursos Públicos"
                features={[
                  { text: "Aulas gravadas de Português e Inglês", highlight: true },
                  { text: "Aulas ao vivo semanais com professores", highlight: true },
                  { text: "Acesso ao banco FULL Questões" },
                  { text: "Flashcards de todos os assuntos" },
                  { text: "Metas semanais pra seguir" },
                  { text: "Time de professores especializados" },
                ]}
                to="/adelphi"
                backgroundImage={adelphiBanner}
                backgroundPosition="right center"
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
              © {new Date().getFullYear()} FULL Todos os direitos reservados
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Lobby;
