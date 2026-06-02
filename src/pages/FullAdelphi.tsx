import React from "react";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FAQItem } from "@/components/FAQItem";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ConnectedBenefits } from "@/components/ConnectedBenefits";
import {
  Home, Instagram, BookOpen, Video, Database, Layers, Calendar,
  Trophy, CheckCircle2, GraduationCap, MessageCircle, Award, Shield,
  Zap, Target, Sparkles, Languages, Globe, Star, Flame, TrendingUp, Search, FileText, Crown, Headphones, PenLine
} from "lucide-react";
import { Link } from "react-router-dom";
import mentoriaLogo from "@/assets/mentoria-logo.png";
import adelphiHero from "@/assets/adelphi-hero.png";
import adelphiBanner2 from "@/assets/adelphi-banner-2.png";
import bryanPhoto from "@/assets/bryan-photo.jpg";
import fontesPhoto from "@/assets/fontes-photo.png";
import teixeiraPhoto from "@/assets/teixeira-photo.png";

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
  { icon: Video, title: "Aulas gravadas, do zero ao topo", desc: "Cursos completos de Português e Inglês. Gramática, interpretação, redação e vocabulário. Assista no seu ritmo, revise quantas vezes precisar e nunca mais fique travado num assunto." },
  { icon: Calendar, title: "Encontros ao vivo toda semana", desc: "Aulas ao vivo com os professores tirando dúvidas em tempo real, corrigindo questões da semana e aprofundando o que mais cai." },
  { icon: Database, title: "Banco FULL Questões liberado", desc: "+20.000 questões resolvidas com filtro por banca, assunto e dificuldade. Português e Inglês inclusos, com resolução comentada passo a passo você não fica mais travado quando erra." },
  { icon: Layers, title: "Flashcards de tudo que cai", desc: "Gramática, vocabulário, falsos cognatos, reading, revisão espaçada que fixa de verdade. Os mesmos flashcards que aprovaram alunos em EFOMM, ESA, ESPCEX e EPCAr." },
  { icon: Trophy, title: "Metas semanais prontas", desc: "Toda segunda você abre a plataforma e já sabe o que estudar: aulas, questões, flashcards. Zero tempo perdido decidindo, você só executa e vê a nota subir." },
  { icon: Shield, title: "Suporte direto com os professores", desc: "Travou numa questão às 22h? Manda no grupo. A gente está ali pra destravar e te empurrar pra frente, nada de ficar esperando dias por uma resposta." },
];

const equipe = [
  {
    nome: "Bryan Hibeck",
    funcao: "Coordenador · Criador do Método FULL",
    foto: bryanPhoto,
    paragrafos: [
      "Resolvi +20.000 questões em 8 meses e fui aprovado em AFA (10º), EFOMM (08º) e EEAr (15º).",
      "Criei o Método FULL pra encurtar o caminho de quem quer passar e agora coordeno o FULL Adelphi pra garantir que cada aluno tenha um plano que leva à aprovação.",
    ],
  },
  {
    nome: "Leandro Fontes",
    funcao: "Professor de Português",
    foto: fontesPhoto,
    paragrafos: [
      "Aprovado em 2024 em EFOMM, ESA e ESPCEX mesmo perdendo 6h por dia no transporte entre escola e trabalho.",
      "Hoje ensina o Português que cai de verdade nas provas: gramática objetiva, interpretação cirúrgica e redação que pontua alto.",
    ],
  },
  {
    nome: "Lucas Teixeira",
    funcao: "Professor de Inglês · Dono do projeto",
    foto: teixeiraPhoto,
    paragrafos: [
      "Aprovado na EPCAr (31º) em 2022 e na EFOMM (37º) em 2024 esta última em só 4 meses de preparação intensiva.",
      "Foi monitor de Inglês na Força Aérea e hoje destrincha reading, vocabulário e falsos cognatos do jeito que cai nas bancas militares.",
    ],
  },
];

const planos = [
  {
    nome: "Intensivo Trimestral",
    destaque: false,
    preco: "R$ 81,01",
    precoAntigo: "R$ 109,00",
    periodo: "/mês",
    parcela: "ou 1x de R$ 227,00 à vista",
    total: "3 meses de imersão",
    link: "https://pay.kiwify.com.br/16PyhV6",
    cta: "QUERO O INTENSIVO",
  },
  {
    nome: "Anual",
    destaque: true,
    preco: "R$ 56,57",
    precoAntigo: "R$ 89,00",
    periodo: "/mês",
    parcela: "ou 1x de R$ 547,00 à vista",
    total: "Melhor custo-benefício",
    link: "https://pay.kiwify.com.br/jOkkdzi",
    cta: "QUERO O ANUAL",
  },
];

const FullAdelphi = () => {
  const scrollToContact = () => {
    document.getElementById("planos-adelphi")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-end md:items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={adelphiHero} alt="FULL Adelphi" className="w-full h-full object-cover object-[center_top] brightness-[0.55] contrast-110 saturate-105" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/55 to-background/95 md:bg-gradient-to-r md:from-background/95 md:via-background/55 md:to-background/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_95%)]" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
          <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[100px] opacity-25" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <div className="absolute top-[28%] right-6 animate-float opacity-70 md:hidden will-change-transform" style={{ animationDelay: "0.5s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-xl p-3 shadow-glow-beige border border-accent/20"><Languages className="w-6 h-6 text-accent-foreground" /></div>
          </div>
          <div className="absolute top-[44%] left-6 animate-float opacity-70 md:hidden will-change-transform" style={{ animationDelay: "1s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-xl p-3 shadow-glow-beige border border-accent/20"><BookOpen className="w-6 h-6 text-accent-foreground" /></div>
          </div>
          <div className="absolute top-28 right-20 animate-float opacity-90 hidden md:block will-change-transform" style={{ animationDelay: "0.5s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20"><Languages className="w-10 h-10 text-accent-foreground" /></div>
          </div>
          <div className="absolute top-1/2 right-32 animate-float opacity-90 hidden md:block will-change-transform" style={{ animationDelay: "1.5s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20"><Globe className="w-10 h-10 text-accent-foreground" /></div>
          </div>
          <div className="absolute bottom-36 right-1/4 animate-float opacity-90 hidden md:block will-change-transform" style={{ animationDelay: "1s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20"><BookOpen className="w-10 h-10 text-accent-foreground" /></div>
          </div>
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
                <span className="text-xs md:text-sm font-bold text-accent uppercase tracking-wider">Português · Inglês · Preparatório Premium</span>
              </div>

              <h1 className="text-[1.6rem] sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                <span className="bg-gradient-hero-text bg-clip-text text-transparent">FULL ADELPHI</span>
                <br />
                <span className="text-foreground">o melhor preparatório de </span>
                <span className="bg-gradient-hero-text bg-clip-text text-transparent">português e inglês</span>
                <span className="text-foreground"> para concursos públicos.</span>
              </h1>

              <p className="text-xs md:text-base text-muted-foreground/90 leading-relaxed animate-fade-in-up max-w-xl" style={{ animationDelay: "0.3s" }}>
                Você não precisa de dom, precisa de <strong className="text-foreground">método</strong>. Aulas ao vivo, banco de questões e plano de metas com quem acabou de passar.
              </p>

              <div className="flex flex-col items-start gap-3 pt-2 animate-fade-in-up w-full sm:w-auto" style={{ animationDelay: "0.45s" }}>
                <Button variant="gold" size="lg" onClick={scrollToContact} className="text-sm md:text-lg shadow-glow-beige rounded-full font-bold px-6 py-5 md:px-12 md:py-8 w-full sm:w-auto">
                  QUERO ME ORGANIZAR →
                </Button>
                <p className="text-xs md:text-sm text-muted-foreground/90">⚡ Acesso imediato · Garantia de 7 dias</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-20">
          <div className="bg-gradient-primary py-2 md:py-4 border-y-2 border-accent-dark/30">
            <p className="text-center text-accent-foreground font-bold text-xs md:text-base tracking-wider px-4">
              ⭐ FULL ADELPHI · PORTUGUÊS · INGLÊS · EFOMM · ESA · ESPCEX · EPCAR · CONCURSOS PÚBLICOS ⭐
            </p>
          </div>
        </div>
      </section>

      {/* INTRO / PROBLEMA */}
      <section className="py-14 md:py-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-accent rounded-full blur-[160px] opacity-10" />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <div className="text-center space-y-5">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 rounded-full px-4 py-2">
                <Flame className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-wider">A real do concurso</span>
              </div>
              <h2 className="text-[1.6rem] md:text-4xl font-bold leading-tight">
                Vaga se ganha, ou se perde, em <span className="bg-gradient-primary bg-clip-text text-transparent">Português e Inglês</span>.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                São as matérias com <strong className="text-foreground">maior peso de desempate</strong> nas principais bancas e justamente as que mais candidato deixa pra depois. Interpretação sob pressão, regência, vocabulário...
              </p>
              <p className="text-base md:text-lg text-foreground font-semibold">
                No FULL Adelphi você estuda Português e Inglês com método, ao vivo, com quem acabou de passar nos concursos que você quer.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* COMO FUNCIONA - Cycle (moved above benefits) */}
      <section className="py-14 md:py-24 bg-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-15" />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-primary text-accent-foreground rounded-full px-4 py-2 mb-4 shadow-glow-beige">
                <Crown className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Tudo conectado</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold mb-3">
                Um <span className="bg-gradient-primary bg-clip-text text-transparent">ciclo de estudo</span> que se alimenta sozinho
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Cada peça do FULL Adelphi puxa a outra. Você aprende, treina, fixa e mede sem furo no ciclo.
              </p>
            </div>
          </ScrollReveal>

          <ConnectedBenefits
            items={[
              { icon: Video, title: "Aula ao vivo", desc: "Fontes e Teixeira destrinchando o conteúdo da semana, você ouve, anota e tira dúvida em tempo real.", next: "alimenta as listas" },
              { icon: Database, title: "Banco FULL Questões", desc: "Listas com as questões EXATAS do que foi visto na aula. Errou? A resolução te mostra o caminho.", next: "vira flashcard" },
              { icon: Layers, title: "Flashcards de revisão", desc: "Os pontos que mais caem viram cards. Revisão espaçada que fixa de verdade sem reler tudo.", next: "entra na meta" },
              { icon: Calendar, title: "Meta semanal pronta", desc: "Toda segunda o ciclo recomeça com plano novo: aula → questão → flashcard → simulado.", next: "fecha o ciclo" },
            ]}
          />

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button variant="gold" size="lg" onClick={scrollToContact} className="text-sm md:text-lg font-bold px-8 py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige w-full max-w-sm md:w-auto">
                ENTRAR NO CICLO AGORA →
              </Button>
              <p className="text-xs md:text-sm text-muted-foreground/90 mt-3">⚡ Acesso imediato · Garantia de 7 dias</p>
            </div>
          </ScrollReveal>
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
                Conteúdo direto, aulas conduzidas por aprovados e uma plataforma que faz o plano de estudo por você. Tudo num lugar só.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {beneficios.map((b, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="h-full bg-card/70 backdrop-blur-sm border-2 border-accent/30 rounded-2xl p-6 hover:border-accent hover:shadow-premium transition-all duration-300">
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
                QUERO ME ORGANIZAR →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BANNER ESCOLAS MILITARES */}
      <section className="relative overflow-hidden">
        <div className="relative h-[280px] md:h-[420px]">
          <img src={adelphiBanner2} alt="Escolas Militares" className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-110 saturate-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/80" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/30 rounded-full blur-[120px] opacity-40" />

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl space-y-3 md:space-y-5">
                <div className="inline-flex items-center gap-2 bg-accent/15 backdrop-blur-sm border border-accent/40 rounded-full px-4 py-2">
                  <Star className="w-4 h-4 text-accent" />
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">Aprovados de verdade</span>
                </div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight">
                  <span className="text-foreground">Aulas com quem já </span>
                  <span className="bg-gradient-primary bg-clip-text text-transparent">cruzou esse portão.</span>
                </h2>
                <p className="text-sm md:text-lg text-muted-foreground max-w-xl">
                  Aprovados em EFOMM, ESA, ESPCEX e EPCAr ensinando o que realmente cai e como passar. Sem teoria solta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="py-14 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[140px] opacity-30" />
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
                Três aprovados, três histórias diferentes, um método que funciona. Quem está aqui na frente sabe exatamente o que você está sentindo aí na cadeira.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5 md:gap-7">
            {equipe.map((p, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="h-full bg-card/80 backdrop-blur-sm border-2 border-accent/30 rounded-2xl p-6 md:p-8 hover:border-accent hover:shadow-premium transition-all duration-300">
                  <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-5">
                    <div className="absolute -inset-2 bg-gradient-primary rounded-full blur-2xl opacity-40" />
                    <img src={p.foto} alt={p.nome} className="relative w-full h-full rounded-full object-cover object-center border-2 border-accent/50 shadow-premium" loading="lazy" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 text-center">{p.nome}</h3>
                  <p className="text-xs md:text-sm text-accent font-bold mb-4 text-center uppercase tracking-wider">{p.funcao}</p>
                  <div className="space-y-2.5">
                    {p.paragrafos.map((par, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground leading-relaxed text-left">{par}</p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      {/* BANCO FULL QUESTÕES SHOWCASE */}
      <section className="py-14 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[160px] opacity-10" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[140px] opacity-25" />
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-primary text-accent-foreground rounded-full px-4 py-2 mb-4 shadow-glow-beige">
                <Database className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Plataforma inclusa</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold mb-3">
                Banco <span className="bg-gradient-primary bg-clip-text text-transparent">FULL Questões</span> liberado
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                +20.000 questões de Português e Inglês com filtros por banca, ano e nível. <strong className="text-accent">Tudo incluído no FULL Adelphi.</strong>
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-10 md:space-y-14">
            <ScrollReveal variant="right">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5">
                    <Search className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Filtros inteligentes</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Achou. Resolveu. <span className="text-accent">Aprendeu.</span></h3>
                  <p className="text-muted-foreground leading-relaxed">Cada questão vem com <strong className="text-accent">resolução comentada passo a passo</strong> você não fica mais travado quando erra.</p>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/10 rounded-2xl blur-xl opacity-60" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 md:p-3 hover:scale-[1.02] transition-transform duration-300">
                    <img src="/platform/resolucao.png" alt="Resolução comentada" className="w-full rounded-xl object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="left">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative group order-2 md:order-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/10 rounded-2xl blur-xl opacity-60" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 md:p-3 hover:scale-[1.02] transition-transform duration-300">
                    <img src="/platform/desempenho-desktop.png" alt="Painel de desempenho" className="w-full rounded-xl object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="space-y-3 order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Desempenho em tempo real</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Veja sua nota <span className="text-accent">subir antes da prova</span></h3>
                  <p className="text-muted-foreground leading-relaxed">Gráficos por matéria, evolução semanal e ranking. Estudo no escuro acabou.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS / FEEDBACK */}
      <section className="py-12 md:py-20 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-6 mb-6 md:mb-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 rounded-full px-4 py-2 mb-4">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-wider">Resultados reais</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold mb-3">
                Quem entrou, <span className="bg-gradient-primary bg-clip-text text-transparent">classificou.</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">A prova de que o método entrega.</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="relative w-full h-[45vh] md:h-[65vh] overflow-hidden">
          <div className="absolute inset-0 flex animate-scroll-left" style={{ width: "max-content" }}>
            {[...Array(2)].flatMap((_, dup) =>
              ["1","2","3","4","5","6","7","8","9"].map((n, i) => (
                <div key={`${dup}-${i}`} className="h-[45vh] md:h-[65vh] w-auto flex-shrink-0">
                  <img src={`/lovable-uploads/feedback-${n}.jpg`} alt={`Depoimento ${n}`} className="h-full w-auto object-contain" loading="lazy" decoding="async" />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8">
          <ScrollReveal>
            <div className="text-center">
              <Button variant="gold" size="lg" onClick={scrollToContact} className="text-sm md:text-lg font-bold px-8 py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige w-full max-w-sm md:w-auto">
                QUERO SER APROVADO →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos-adelphi" className="py-14 md:py-24 bg-background scroll-mt-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[140px] opacity-25" />
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 rounded-full px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-wider">Escolha seu acesso</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold mb-3">
                Escolha seu <span className="text-accent">plano</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Mesmo curso completo. <strong className="text-accent">Quanto mais tempo, mais barato fica cada mês.</strong>
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto items-stretch">
            {planos.map((plano, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`relative h-full rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col transition-all duration-300 ${
                  plano.destaque
                    ? "bg-gradient-beige-premium border-2 border-accent shadow-glow-beige md:scale-[1.04]"
                    : "bg-card/80 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/50"
                }`}>
                  {plano.destaque && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-primary text-accent-foreground px-4 py-1.5 rounded-full text-xs font-black shadow-glow-beige whitespace-nowrap">
                        ⭐ MAIS ESCOLHIDO
                      </div>
                    </div>
                  )}
                  <h3 className={`text-2xl md:text-3xl font-black mb-2 text-center mt-2 ${plano.destaque ? "text-background" : "text-foreground"}`}>
                    {plano.nome}
                  </h3>
                  <div className="text-center mb-5">
                    {plano.precoAntigo && (
                      <p className={`text-sm line-through mb-1 ${plano.destaque ? "text-background/60" : "text-muted-foreground/70"}`}>
                        De {plano.precoAntigo}{plano.periodo}
                      </p>
                    )}
                    <p className={`text-4xl md:text-5xl font-black ${plano.destaque ? "text-background" : "text-accent"}`}>
                      {plano.preco}
                      <span className={`text-sm font-medium ${plano.destaque ? "text-background/80" : "text-muted-foreground"}`}>{plano.periodo}</span>
                    </p>
                    {plano.parcela && (
                      <p className={`text-xs md:text-sm mt-1 font-semibold ${plano.destaque ? "text-background/90" : "text-muted-foreground"}`}>
                        {plano.parcela}
                      </p>
                    )}
                    <div className={`inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full text-xs font-bold ${plano.destaque ? "bg-background/20 text-background" : "bg-accent/15 text-accent"}`}>
                      <Zap className="w-3 h-3" />
                      {plano.total}
                    </div>
                  </div>
                  <ul className={`space-y-2.5 mb-6 flex-grow text-sm ${plano.destaque ? "text-background" : "text-foreground"}`}>
                    {[
                      "Aulas gravadas (Português + Inglês)",
                      "Aulas ao vivo semanais",
                      "Banco FULL Questões (+20.000)",
                      "Flashcards de todos os assuntos",
                      "Metas semanais prontas",
                      "Suporte direto com os professores",
                    ].map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plano.destaque ? "text-background" : "text-accent"}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plano.destaque ? "default" : "gold"}
                    className={`w-full py-5 text-sm md:text-base font-bold ${plano.destaque ? "bg-background text-accent hover:bg-background/90" : ""}`}
                    onClick={() => window.open(plano.link, "_blank")}
                  >
                    {plano.cta} →
                  </Button>
                  <div className={`mt-3 flex items-center justify-center gap-1.5 text-xs ${plano.destaque ? "text-background" : "text-muted-foreground"}`}>
                    <Shield className="w-3.5 h-3.5" />
                    <span className="font-semibold">Garantia de 7 dias</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-center text-muted-foreground mt-8 text-sm">
              🔒 Pagamento 100% seguro · Cartão, PIX ou Boleto · Acesso imediato
            </p>
          </ScrollReveal>
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
                <span className="text-xs font-bold uppercase tracking-wider">Ainda com dúvida?</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl font-bold mb-4">
                Manda mensagem e <span className="bg-gradient-primary bg-clip-text text-transparent">a gente te explica tudo</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Tira sua dúvida no WhatsApp antes de assinar. A gente te ajuda a entender qual plano faz mais sentido pro seu objetivo.
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
              <p className="text-xs text-muted-foreground/80 mt-5">⚡ Resposta rápida · Direto com a equipe</p>
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
                <FAQItem value="item-1" question="O FULL Adelphi serve pra qual concurso?" answer="Pra qualquer concurso que cobre Português e Inglês com foco especial em EFOMM, ESA, ESPCEX, EPCAr e concursos públicos federais e estaduais. O conteúdo é alinhado com as principais bancas do país." />
                <FAQItem value="item-2" question="As aulas são ao vivo ou gravadas?" answer="Os dois. Você tem o curso completo gravado pra estudar no seu ritmo, e encontros ao vivo toda semana com Fontes (Português) e Teixeira (Inglês) pra tirar dúvidas e aprofundar conteúdo." />
                <FAQItem value="item-3" question="Eu também tenho acesso ao Banco FULL Questões?" answer="Sim. Todo aluno do FULL Adelphi tem acesso liberado ao Banco FULL Questões, com +20.000 questões resolvidas incluindo Português e Inglês de várias bancas, com filtros e resolução comentada." />
                <FAQItem value="item-4" question="Como funcionam as metas semanais?" answer="Toda segunda você abre a plataforma e já encontra um plano com o que estudar (aulas, questões, flashcards). Você só executa sem precisar perder tempo decidindo por onde começar." />
                <FAQItem value="item-5" question="Qual a diferença entre o Anual e o Intensivo Trimestral?" answer="O acesso é o mesmo. O Anual sai R$ 56,57/mês (1x de R$ 547,00) e é o melhor custo-benefício. O Intensivo Trimestral sai R$ 81,01/mês (1x de R$ 227,00) e serve pra quem está a poucos meses da prova e quer turbinar o resultado." />
                <FAQItem value="item-6" question="Tem garantia?" answer="Sim. 7 dias incondicionais. Se não gostar por qualquer motivo, devolvemos 100% do valor sem perguntas." />
                <FAQItem value="item-7" question="Sou iniciante. Sirvo?" answer="Sirve. As aulas começam do zero, com explicação passo a passo. Não importa se você está há anos longe do português ou nunca estudou inglês a sério a gente te leva do básico ao nível de aprovação." />
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
