import { ArrowRight, Clock, Sparkles, BookOpen, Video, Target, Brain, CheckCircle, Users, Zap, ListChecks } from "lucide-react";
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
  const baseStyles = "group relative w-full rounded-2xl border-2 transition-all duration-300 block overflow-hidden";
  
  const getStyles = () => {
    if (comingSoon) {
      return `${baseStyles} bg-card/40 border-border/40`;
    }
    if (featured) {
      return `${baseStyles} border-accent shadow-[0_0_40px_rgba(228,195,132,0.2)] hover:shadow-[0_0_60px_rgba(228,195,132,0.35)] hover:border-accent`;
    }
    return `${baseStyles} bg-card/80 border-border/60 hover:border-accent/60 hover:shadow-[0_0_30px_rgba(228,195,132,0.15)]`;
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
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
      )}
      
      <div className={`relative z-10 ${featured ? 'p-8 md:p-10' : 'p-6 md:p-8'}`}>
        {featured && (
          <div className="absolute top-0 left-8 -translate-y-1/2">
            <span className="bg-accent text-accent-foreground px-5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              MAIS POPULAR
            </span>
          </div>
        )}
        
        {comingSoon && (
          <div className="absolute top-0 left-6 -translate-y-1/2">
            <span className="bg-muted/80 text-muted-foreground px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border border-border/50">
              <Clock className="w-3 h-3" />
              EM BREVE
            </span>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${comingSoon ? "text-muted-foreground" : "text-foreground"}`}>
              {title}
            </h3>
            <p className={`text-sm md:text-base font-semibold mb-4 ${comingSoon ? "text-muted-foreground/70" : "text-accent"}`}>
              {subtitle}
            </p>
            
            {instructor && (
              <p className={`text-sm mb-3 flex items-center gap-2 ${comingSoon ? "text-muted-foreground/60" : "text-foreground/80"}`}>
                <Users className="w-4 h-4 text-accent" />
                <span>Professor: <strong className="text-accent">{instructor}</strong></span>
              </p>
            )}
            
            {description && (
              <p className={`text-sm md:text-base mb-4 leading-relaxed ${comingSoon ? "text-muted-foreground/60" : "text-muted-foreground"}`}>
                {description}
              </p>
            )}
            
            {features && features.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${feature.highlight ? "text-green-400" : "text-accent"}`} />
                    <span className={`text-sm ${feature.highlight ? "text-green-400 font-semibold" : "text-muted-foreground"}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {!comingSoon && to && (
            <div className="flex items-center justify-end md:justify-center md:self-center">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                featured 
                  ? "bg-accent text-accent-foreground group-hover:scale-110 shadow-lg" 
                  : "bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
              }`}>
                <ArrowRight className="w-6 h-6" />
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
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Logo */}
              <img 
                src={mentoriaLogo} 
                alt="FULL - Preparação Militar" 
                className="h-20 md:h-28 w-auto mb-8"
              />
              
              {/* Headline */}
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
                Sua Aprovação Começa{" "}
                <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                  Aqui
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-base md:text-lg text-accent font-medium mb-4">
                SAIBA TUDO QUE TIVE QUE APRENDER PARA SER O 08 DA EFOMM E 01 DA AFA!
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Escolha o programa ideal para conquistar sua vaga nas Forças Armadas
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* MENTORIA FULL */}
              <ProductCard
                title="MENTORIA FULL"
                subtitle="Tudo em Um Lugar Só - O Pacote Completo"
                features={[
                  { text: "Método FULL + FULL QUESTÕES inclusos", highlight: true },
                  { text: "FULL ZENITH + FULL AZIMUTH inclusos", highlight: true },
                  { text: "Simulados com Direcionamento Personalizado", highlight: true },
                  { text: "Aulas ao vivo e gravadas" },
                  { text: "Metodologia única de ensino" },
                  { text: "Livro Método Hibeck com vídeos explicativos" },
                  { text: "Planos de metas personalizados" },
                  { text: "+2000 flashcards com todos os assuntos do edital" },
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
                  { text: "Acesso ao Método Hibeck completo" },
                  { text: "Como revisar e fazer questões corretamente" },
                  { text: "Como filtrar questões estratégicas" },
                  { text: "Livro Método Hibeck com vídeos explicativos" },
                  { text: "+2000 flashcards com teoria, exemplos e exceções" },
                  { text: "ACESSO VITALÍCIO", highlight: true },
                ]}
                to="/metodo"
                backgroundImage={metodoBanner}
              />
              
              {/* FULL QUESTÕES */}
              <ProductCard
                title="FULL QUESTÕES"
                subtitle="Banco de Questões Definitivo"
                features={[
                  { text: "+20.000 questões resolvidas detalhadamente", highlight: true },
                  { text: "Filtro de desempenho inteligente" },
                  { text: "Listas personalizadas de estudo" },
                  { text: "Simulados cronometrados" },
                  { text: "Suporte direto para dúvidas de questões", highlight: true },
                ]}
                comingSoon
              />
              
              {/* FULL ZENITH */}
              <ProductCard
                title="FULL ZENITH"
                subtitle="Curso Completo de Matemática"
                description="Aulas ao vivo e gravadas com banco de questões completo. Domine a matemática dos concursos militares."
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
                subtitle="Curso Completo de Física"
                description="Aulas ao vivo e gravadas com banco de questões completo. Domine a física dos concursos militares."
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
        <footer className="py-8 border-t border-border/50">
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
