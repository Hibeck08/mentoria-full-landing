import React from "react";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FAQItem } from "@/components/FAQItem";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Home, Instagram, BookOpen, Video, Database, Layers, Calendar,
  Trophy, CheckCircle2, GraduationCap, MessageCircle, Award, User
} from "lucide-react";
import { Link } from "react-router-dom";
import mentoriaLogo from "@/assets/mentoria-logo.png";
import adelphiHero from "@/assets/adelphi-hero.png";
import bryanPhoto from "@/assets/bryan-photo.jpg";

const FloatingWhatsApp = () => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
      <Button variant="gold" size="lg" className="rounded-full shadow-glow-beige px-4 py-3 md:px-8 md:py-6 text-xs md:text-base font-bold whitespace-nowrap" onClick={() => window.open("https://api.whatsapp.com/send?phone=5521992104885", "_blank")}>
        💬 Quero saber mais
      </Button>
    </div>
  );
};

const beneficios = [
  { icon: Video, title: "Aulas gravadas", desc: "Português e Inglês completos, do zero ao avançado — assista quando quiser." },
  { icon: Calendar, title: "Aulas ao vivo", desc: "Encontros semanais de Português e Inglês com os professores tirando dúvidas em tempo real." },
  { icon: Database, title: "Banco FULL Questões", desc: "Acesso ao banco com +20.000 questões resolvidas — Português e Inglês inclusos." },
  { icon: Layers, title: "Flashcards de todos os assuntos", desc: "Revise gramática, vocabulário e interpretação com a metodologia que fixa de verdade." },
  { icon: Trophy, title: "Metas semanais", desc: "Você sabe exatamente o que estudar cada semana — sem perder tempo decidindo." },
];

const equipe = [
  { nome: "Bryan Hibeck", funcao: "Mentor e Coordenador", desc: "Aprovado em 01 da AFA, 08 da EFOMM e 15 da EEAr. Criador do Método FULL.", foto: bryanPhoto },
  { nome: "Prof. Fontes", funcao: "Professor de Português", desc: "Especialista em concursos públicos. Aulas diretas ao ponto, com foco no que cai na prova.", foto: null },
  { nome: "Prof. Teixeira", funcao: "Professor de Inglês", desc: "Domina a banca dos principais concursos. Gramática, vocabulário e leitura — sem enrolação.", foto: null },
];

const FullAdelphi = () => {
  const scrollToContact = () => {
    document.getElementById("adelphi-contato")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-end md:items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={adelphiHero} alt="FULL Adelphi" className="w-full h-full object-cover object-[center_top] brightness-75 contrast-105 saturate-105" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/45 to-background/90 md:bg-gradient-to-r md:from-background/90 md:via-background/55 md:to-background/30" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
          <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[100px] opacity-25" />
        </div>

        <div className="container relative z-10 mx-auto px-6 pt-24 pb-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="absolute top-4 md:top-8 left-4 md:left-8 z-20">
              <img src={mentoriaLogo} alt="FULL" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-2xl" loading="eager" />
            </div>
            <Link to="/" className="absolute top-4 md:top-8 right-4 md:right-8 flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 z-20 hover:border-accent/50 transition-all">
              <Home className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-foreground hidden md:inline">Menu</span>
            </Link>

            <div className="flex flex-col items-start gap-5 md:gap-7 min-h-[88vh] md:min-h-[80vh] justify-end md:justify-center pb-24 md:pb-0 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 rounded-full px-4 py-2 backdrop-blur-sm animate-fade-in-up">
                <GraduationCap className="w-4 h-4 text-accent" />
                <span className="text-xs md:text-sm font-bold text-accent uppercase tracking-wider">Português · Inglês · Concursos Públicos</span>
              </div>

              <h1 className="text-[1.6rem] sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                <span className="bg-gradient-hero-text bg-clip-text text-transparent">FULL ADELPHI</span>
                <br />
                <span className="text-foreground">Curso completo de Português e Inglês pra concursos públicos.</span>
              </h1>

              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                Aulas ao vivo e gravadas, banco de questões, flashcards e metas semanais. Tudo num lugar só — feito por quem realmente passou.
              </p>

              <div className="flex flex-col items-start gap-3 pt-2 animate-fade-in-up w-full sm:w-auto" style={{ animationDelay: "0.45s" }}>
                <Button variant="gold" size="lg" onClick={scrollToContact} className="text-sm md:text-lg shadow-glow-beige rounded-full font-bold px-6 py-5 md:px-12 md:py-8 w-full sm:w-auto">
                  QUERO ENTRAR NO FULL ADELPHI →
                </Button>
                <p className="text-xs md:text-sm text-muted-foreground/90">⚡ Turmas com vagas limitadas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-20">
          <div className="bg-gradient-primary py-2 md:py-4 border-y-2 border-accent-dark/30">
            <p className="text-center text-accent-foreground font-bold text-xs md:text-base tracking-wider px-4">
              ⭐ FULL ADELPHI · PORTUGUÊS · INGLÊS · CONCURSOS PÚBLICOS ⭐
            </p>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-14 md:py-24 bg-gradient-to-b from-background to-secondary/10 relative">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[140px]" />
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 rounded-full px-4 py-2 mb-4">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-wider">O que está incluso</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold mb-3">
                Tudo pra você dominar <span className="bg-gradient-primary bg-clip-text text-transparent">Português e Inglês</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Conteúdo direto, sem enrolação. Feito pra concurso.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {beneficios.map((b, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="h-full bg-card/70 backdrop-blur-sm border-2 border-accent/30 rounded-2xl p-6 hover:border-accent transition-all">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <b.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button variant="gold" size="lg" onClick={scrollToContact} className="text-sm md:text-lg font-bold px-8 py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige w-full max-w-sm md:w-auto">
                QUERO MEU LUGAR →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="py-14 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-10" />
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 rounded-full px-4 py-2 mb-4">
                <Trophy className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-wider">Quem vai te ensinar</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold mb-3">
                Quem <span className="bg-gradient-primary bg-clip-text text-transparent">somos</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Um time formado por quem passou e por quem ensina quem passa.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5 md:gap-6">
            {equipe.map((p, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="h-full bg-card/80 backdrop-blur-sm border-2 border-accent/30 rounded-2xl p-6 md:p-8 hover:border-accent hover:shadow-premium transition-all">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-5">
                    <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30" />
                    {p.foto ? (
                      <img src={p.foto} alt={p.nome} className="relative w-full h-full rounded-full object-cover border-2 border-accent/40 shadow-premium" loading="lazy" />
                    ) : (
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-card to-secondary border-2 border-accent/40 flex items-center justify-center shadow-premium">
                        <User className="w-14 h-14 md:w-16 md:h-16 text-accent/60" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 text-center">{p.nome}</h3>
                  <p className="text-sm text-accent font-semibold mb-3 text-center">{p.funcao}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO/CTA */}
      <section id="adelphi-contato" className="py-14 md:py-24 bg-secondary/10 scroll-mt-8 relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-15" />
        <div className="container relative z-10 mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            <div className="bg-card/80 backdrop-blur-sm border-2 border-accent/40 rounded-3xl p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-primary text-accent-foreground rounded-full px-4 py-2 mb-5 shadow-glow-beige">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Fale com a gente</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl font-bold mb-4">
                Pronto pra <span className="bg-gradient-primary bg-clip-text text-transparent">dominar</span> as duas matérias que mais derrubam?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Mande mensagem e descubra como entrar no FULL Adelphi. Vagas limitadas.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5521992104885"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary hover:opacity-95 text-accent-foreground font-bold px-8 py-5 md:px-12 md:py-6 rounded-full shadow-glow-beige transition-all hover:scale-[1.02] text-sm md:text-base uppercase tracking-wide"
              >
                <MessageCircle className="w-5 h-5" />
                QUERO FALAR NO WHATSAPP
              </a>
              <p className="text-xs text-muted-foreground/80 mt-5">⚡ Resposta rápida · Tire suas dúvidas direto comigo</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-3">
              Perguntas <span className="bg-gradient-primary bg-clip-text text-transparent">Frequentes</span>
            </h2>
            <p className="text-base md:text-lg text-center text-muted-foreground mb-10 md:mb-14">Tire suas dúvidas antes de começar</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <FAQItem value="item-1" question="O FULL Adelphi serve pra qual concurso?" answer="Pra qualquer concurso público que cobre Português e Inglês — federais, estaduais, municipais, militares e civis. O conteúdo é alinhado com as principais bancas do país." />
                <FAQItem value="item-2" question="As aulas são ao vivo ou gravadas?" answer="Os dois! Você tem o curso completo gravado pra estudar no seu ritmo e encontros ao vivo semanais com os professores pra tirar dúvidas e aprofundar conteúdo." />
                <FAQItem value="item-3" question="Eu também tenho acesso ao banco de questões?" answer="Sim. O FULL Adelphi vem com acesso ao banco FULL Questões, com +20.000 questões resolvidas — incluindo Português e Inglês de várias bancas." />
                <FAQItem value="item-4" question="Como funcionam as metas semanais?" answer="Toda semana você recebe um plano com o que estudar (aulas, questões, flashcards). Você só executa — sem precisar decidir por onde começar." />
                <FAQItem value="item-5" question="Como faço pra entrar?" answer="Clica no botão do WhatsApp e fala com a gente. Vamos te explicar os planos disponíveis e como funciona o acesso." />
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FloatingWhatsApp />

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <img src={mentoriaLogo} alt="FULL" className="w-12 h-12 md:w-16 md:h-16 mb-3" loading="lazy" />
              <p className="text-base text-muted-foreground italic font-semibold">"Português e Inglês com método."</p>
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-3">Links Úteis</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Menu</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-3">Redes Sociais</h3>
              <a href="https://instagram.com/hibeck_" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
                <span>@hibeck_</span>
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-muted-foreground">
            <p className="text-sm">&copy; {new Date().getFullYear()} FULL Adelphi. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FullAdelphi;
