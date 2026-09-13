import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FAQItem } from "@/components/FAQItem";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Home, Volume2, VolumeX, ArrowRight, CheckCircle2, XCircle,
  MessageCircle, Users, Layers, BookOpen, Play, Calendar, Crown, Shield,
} from "lucide-react";
import logoSilver from "@/assets/logo-silver.webp";
import heroBw from "@/assets/masterclass-hero-bw.webp";
import wallBw from "@/assets/masterclass-wallpaper-bw.webp";
import bannerMentoria from "@/assets/mentoria-banner.webp";
import bannerQuestoes from "@/assets/questoes-banner.webp";
import bannerMetas from "@/assets/plano-metas-missoes.webp";
import bannerFlashcards from "@/assets/flashcards-wallpaper.webp";

const VSL_ID = "aRHlGzwQ2oU";

const WPP_STANDARD =
  "https://wa.me/5521992104885?text=Quero%20fazer%20minha%20inscri%C3%A7%C3%A3o%20na%20Mentoria%20FULL%20Standard";
const WPP_ULTRA =
  "https://wa.me/5521992104885?text=Quero%20fazer%20minha%20inscri%C3%A7%C3%A3o%20na%20Mentoria%20FULL%20Ultra";
const WPP_DUVIDAS =
  "https://wa.me/5521992104885?text=Ol%C3%A1%21%20Quero%20tirar%20umas%20d%C3%BAvidas%20antes%20de%20escolher%20meu%20plano%20na%20Mentoria%20FULL%21";

type PlanMode = "standard" | "standardplus" | "ultra";

const detalhes: Record<PlanMode, {
  tag: string; titulo: string; subtitulo: string; para: string;
  grupos: { titulo: string; icon: React.ElementType; itens: string[] }[];
  naoInclui: string[]; link: string;
}> = {
  standard: {
    tag: "PLANO STANDARD",
    titulo: "Mentoria FULL | Standard",
    subtitulo: "Pra quem já tem preparatório e quer método, rotina e acompanhamento pra virar aprovação.",
    para: "Serve pra QUALQUER concurso · inclusive CN e EPCAr",
    grupos: [
      { titulo: "Acompanhamento 1:1", icon: Users, itens: [
        "Direcionamento individual comigo, semana a semana, sem resposta automática",
        "Plano de metas montado pro SEU edital, SEU tempo disponível e SEU nível atual",
        "Ajuste de rotina de estudos: matérias, horários, pesos e revisões na medida",
        "Suporte direto no WhatsApp pra destravar dúvida e corrigir rota rápido",
      ] },
      { titulo: "Plataforma completa", icon: Layers, itens: [
        "Banco FULL Questões com +10.000 questões resolvidas e comentadas",
        "+2.000 flashcards Anki prontos de todas as matérias",
        "Nivelamento automático por assunto: a plataforma mostra onde você tá fraco",
        "Livro do Método Hibeck em PDF, o passo a passo completo",
      ] },
      { titulo: "Comunidade & rotina", icon: Calendar, itens: [
        "Encontros ao vivo semanais de estudo em grupo (ficam gravados)",
        "Comunidade fechada de alunos com a mesma missão que você",
        "Cronograma de revisões inteligente pra não esquecer o que estudou",
        "Cobrança e constância: você não estuda mais sozinho",
      ] },
    ],
    naoInclui: ["Aulas AO VIVO de matérias", "Aulas GRAVADAS de matérias"],
    link: WPP_STANDARD,
  },
  standardplus: {
    tag: "STANDARD +",
    titulo: "Mentoria FULL | Standard +",
    subtitulo: "Tudo do Standard mais o acervo completo de aulas gravadas pra estudar no seu ritmo.",
    para: "Serve pra QUALQUER concurso · inclusive CN e EPCAr",
    grupos: [
      { titulo: "Tudo do Standard", icon: Users, itens: [
        "Acompanhamento e direcionamento 1:1 semana a semana",
        "Banco FULL Questões (+10.000 questões) + flashcards Anki",
        "Plano de metas personalizado e organização de rotina",
        "Encontros ao vivo de estudo e comunidade fechada",
      ] },
      { titulo: "Aulas GRAVADAS de todas as matérias", icon: BookOpen, itens: [
        "Videoaulas completas do zero ao avançado, organizadas por assunto",
        "Resolução comentada de questões-chave das provas anteriores",
        "Assiste quando e quantas vezes quiser, no seu ritmo",
        "Ideal pra revisar conteúdo do cursinho ou suprir o que falta",
      ] },
    ],
    naoInclui: ["Aulas AO VIVO de matérias"],
    link: WPP_STANDARD,
  },
  ultra: {
    tag: "PLANO ULTRA",
    titulo: "Mentoria FULL | Ultra",
    subtitulo: "O pacote fechado: mentoria, método, aulas ao vivo e gravadas de todas as matérias.",
    para: "EXCLUSIVO para AFA · EN · EFOMM",
    grupos: [
      { titulo: "Aulas AO VIVO comigo e minha equipe", icon: Play, itens: [
        "Matemática, Física, Português e Inglês toda semana, ao vivo",
        "Tira-dúvidas em tempo real durante a aula",
        "Todas ficam gravadas pra rever quando quiser",
      ] },
      { titulo: "Aulas GRAVADAS de todas as matérias", icon: BookOpen, itens: [
        "Videoaulas completas do zero ao avançado",
        "Acervo completo do Método Hibeck organizado por assunto",
        "Resoluções comentadas das provas AFA, EN e EFOMM",
      ] },
      { titulo: "Mentoria 1:1 aprofundada", icon: Users, itens: [
        "Acompanhamento individual com foco em performance e nota",
        "Análise de simulados com correção de rota imediata",
        "Plano de metas personalizado pro seu edital",
        "Suporte direto no WhatsApp",
      ] },
      { titulo: "Plataforma & comunidade", icon: Layers, itens: [
        "Banco FULL Questões (+10.000) + 2.000 flashcards Anki",
        "Nivelamento automático por assunto",
        "Encontros ao vivo semanais de estudo",
        "Comunidade fechada de alunos AFA, EN e EFOMM",
      ] },
    ],
    naoInclui: [],
    link: WPP_ULTRA,
  },
};

const cards: { mode: PlanMode; tag: string; title: string; desc: string; destaque?: string; bullets: string[] }[] = [
  {
    mode: "standard",
    tag: "PLANO STANDARD",
    title: "Já tenho preparatório",
    desc: "Falta direção, rotina e acompanhamento, não mais conteúdo.",
    bullets: ["Acompanhamento 1:1 semanal", "Banco FULL Questões + flashcards Anki", "Plano de metas personalizado", "Qualquer concurso · CN e EPCAr"],
  },
  {
    mode: "standardplus",
    tag: "STANDARD +",
    title: "Quero também as gravadas",
    desc: "Tudo do Standard mais o acervo de aulas gravadas de todas as matérias.",
    bullets: ["Tudo do Standard incluso", "Aulas gravadas completas", "Resoluções comentadas", "Estuda no seu ritmo"],
  },
  {
    mode: "ultra",
    tag: "PLANO ULTRA",
    title: "Quero TUDO incluso",
    desc: "O pacote fechado com aulas ao vivo semanais e mentoria aprofundada.",
    destaque: "DESCONTO IMPERDÍVEL",
    bullets: ["Aulas AO VIVO semanais", "Aulas gravadas de tudo", "Mentoria 1:1 aprofundada", "Exclusivo AFA · EN · EFOMM"],
  },
];

const depoimentos = [
  "/lovable-uploads/feedback-1.jpg",
  "/lovable-uploads/feedback-2.jpg",
  "/lovable-uploads/feedback-3.jpg",
  "/lovable-uploads/feedback-4.jpg",
  "/lovable-uploads/feedback-5.jpg",
  "/lovable-uploads/feedback-6.jpg",
  "/lovable-uploads/feedback-7.jpg",
  "/lovable-uploads/feedback-8.jpg",
  "/lovable-uploads/feedback-9.jpg",
];

const Masterclass = () => {
  const [muted, setMuted] = React.useState(true);
  const [openPlan, setOpenPlan] = React.useState<PlanMode | null>(null);
  const detalhe = detalhes[openPlan ?? "standard"];

  const src = `https://www.youtube-nocookie.com/embed/${VSL_ID}?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=${VSL_ID}&controls=1&rel=0&playsinline=1&modestbranding=1`;

  const scrollToPlans = () =>
    document.getElementById("planos-vsl")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      {/* MENU */}
      <Link
        to="/"
        className="fixed top-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-background/70 backdrop-blur px-4 py-2 text-xs font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        <Home className="w-3.5 h-3.5" /> Menu
      </Link>

      {/* HERO + VSL */}
      <section className="relative overflow-hidden pt-16 pb-14 md:pt-20 md:pb-20">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-primary/25 via-background to-background" />

        {/* banner espelhado no topo */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] md:h-[560px] flex">
          <img
            src={heroBw}
            alt=""
            aria-hidden
            className="h-full w-1/2 object-cover object-right grayscale opacity-40"
          />
          <img
            src={heroBw}
            alt=""
            aria-hidden
            className="h-full w-1/2 object-cover object-right grayscale opacity-40 scale-x-[-1]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.22),transparent_65%)]" />
        </div>

        <div className="container mx-auto px-5">
          <img src={logoSilver} alt="FULL" className="h-10 md:h-12 w-auto mx-auto mb-6 opacity-90" />

          <h1 className="max-w-4xl mx-auto text-center text-2xl md:text-4xl lg:text-5xl font-black leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]">
            <span className="bg-accent/90 text-accent-foreground px-2 rounded-md box-decoration-clone">
              Um método único e comprovado
            </span>{" "}
            que já levou alunos ao topo da AFA, EN e EFOMM
          </h1>
          <p className="max-w-2xl mx-auto text-center text-sm md:text-base text-muted-foreground mt-4">
            Assista ao vídeo abaixo e entenda como a Mentoria FULL transforma rotina bagunçada em
            aprovação nas Forças Armadas.
          </p>


          {/* VSL 9:16 com wallpaper P&B atrás */}
          <div className="relative mt-8 md:mt-10 left-1/2 -translate-x-1/2 w-screen">
            {/* wallpaper escuro em qualidade original preenchendo o fundo */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img
                src={wallBw}
                alt=""
                aria-hidden
                className="h-full w-full object-cover"
              />
              {/* escurecimento pesado para manter o contraste do conteúdo */}
              <div className="absolute inset-0 bg-black/75" />
              {/* tom roxo sutil unificado */}
              <div className="absolute inset-0 bg-[hsl(268_60%_25%)]/40" />
              {/* transição suave apenas no topo e na base, sem vinheta lateral */}
              <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/70" />
            </div>

            <div className="relative z-10 flex justify-center px-5 py-6 md:py-10">
              <div className="relative w-full max-w-[330px] sm:max-w-[380px] md:max-w-[420px]">
                <div className="absolute -inset-4 bg-accent/30 blur-3xl rounded-[2rem] -z-10" />
                <div className="relative rounded-[1.75rem] border-2 border-accent/40 bg-card/80 backdrop-blur-sm p-2 shadow-premium">
                  <div className="relative w-full aspect-[9/16] overflow-hidden rounded-[1.25rem] bg-black">
                    <iframe
                      key={muted ? "muted" : "unmuted"}
                      src={src}
                      title="Masterclass FULL"
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMuted((m) => !m)}
                  className="mt-3 mx-auto flex items-center gap-2 rounded-full border border-accent/40 bg-card/80 backdrop-blur px-4 py-2 text-xs font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  {muted ? "Clique para ativar o som" : "Som ativado"}
                </button>
              </div>
            </div>

            {/* CTA logo abaixo do vídeo */}
            <div className="px-5 pb-6 md:pb-10 text-center">
              <Button variant="gold" size="lg" onClick={scrollToPlans} className="rounded-full px-8 font-black shadow-glow-beige">
                <span className="inline-flex items-center justify-center gap-2">
                  QUERO MINHA VAGA NA MENTORIA <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
              <p className="mt-3 text-[11px] text-muted-foreground">Vagas limitadas · garantia incondicional de 7 dias</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPOSTA + CTA */}
      <section className="py-14 md:py-20 border-t border-border/40">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center gap-1.5 mb-6">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-2 w-8 rounded-full bg-accent/70 -skew-x-12" />
              ))}
            </div>
            <ScrollReveal>
              <h2 className="text-2xl md:text-4xl font-black leading-tight">
                <span className="bg-accent/90 text-accent-foreground px-2 rounded-md box-decoration-clone">
                  Condensamos anos de preparação
                </span>{" "}
                em um sistema rápido e prático
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mt-4">
                Método validado, banco de questões, flashcards, plano de metas e acompanhamento direto.
                Tudo em um lugar só, pra você parar de adivinhar o que estudar.
              </p>
              <Button variant="gold" size="lg" onClick={scrollToPlans} className="mt-8 rounded-full px-8 font-black">
                <span className="inline-flex items-center justify-center gap-2">
                  QUERO FAZER PARTE DA MENTORIA <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-10 md:mt-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Users, title: "Acompanhamento 1:1", desc: "Direcionamento semanal personalizado, sem resposta automática." },
                { icon: Layers, title: "Plataforma completa", desc: "Banco FULL Questões, flashcards Anki e nivelamento por assunto." },
                { icon: Calendar, title: "Rotina mastigada", desc: "Plano de metas e cronograma feitos pro seu edital e tempo." },
                { icon: BookOpen, title: "Aulas gravadas", desc: "Acervo completo de videoaulas pra estudar no seu ritmo (Standard + e Ultra)." },
                { icon: Play, title: "Aulas ao vivo", desc: "Matemática, Física, Português e Inglês toda semana com tira-dúvidas (Ultra)." },
                { icon: Shield, title: "Garantia de 7 dias", desc: "Testa a mentoria durante uma semana. Não gostou? Devolvemos 100%." },
              ].map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-4 rounded-2xl border border-accent/20 bg-card/60 p-4 md:p-5 backdrop-blur-sm hover:border-accent/40 transition-colors"
                >
                  <div className="shrink-0 rounded-xl bg-accent/15 p-2.5">
                    <b.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-black leading-tight">{b.title}</h3>
                    <p className="mt-1 text-xs md:text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BENEFÍCIOS 01 */}
      <section className="py-14 md:py-20 border-y border-border/40">
        <div className="container mx-auto px-5 grid md:grid-cols-[1.08fr_.92fr] gap-8 md:gap-14 items-center">
          <ScrollReveal variant="left">
            <div className="overflow-hidden rounded-2xl border border-accent/25 bg-card shadow-premium">
              <img src={bannerMentoria} alt="Visão geral da Mentoria FULL" loading="lazy" className="w-full aspect-[16/7] object-cover" />
            </div>
            <div className="mt-3 overflow-hidden rounded-xl border border-accent/20 bg-card">
              <img src={bannerMetas} alt="Plano de metas e missões da Mentoria FULL" loading="lazy" className="w-full aspect-[16/4] object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right">
            <span className="text-[10px] font-black tracking-[0.2em] text-accent">DIREÇÃO TODOS OS DIAS</span>
            <h2 className="mt-3 text-2xl md:text-4xl font-black leading-tight">Sua preparação deixa de depender da sorte</h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Você recebe um caminho claro para estudar, revisar e medir sua evolução, com acompanhamento para corrigir a rota antes de perder tempo.
            </p>
            <ul className="mt-6 grid gap-3">
              {[
                "Plano de metas ajustado ao seu momento",
                "Rotina organizada por prioridades reais",
                "Acompanhamento próximo para manter constância",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* BENEFÍCIOS 02 */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-5 grid md:grid-cols-[.92fr_1.08fr] gap-8 md:gap-14 items-center">
          <ScrollReveal variant="left" className="md:order-2">
            <div className="overflow-hidden rounded-2xl border border-accent/25 bg-card shadow-premium">
              <img src={bannerQuestoes} alt="Banco FULL Questões da Mentoria FULL" loading="lazy" className="w-full aspect-[16/9] object-cover" />
            </div>
            <div className="mt-3 overflow-hidden rounded-xl border border-accent/20 bg-card">
              <img src={bannerFlashcards} alt="Flashcards de revisão da Mentoria FULL" loading="lazy" className="w-full aspect-[16/6] object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" className="md:order-1">
            <span className="text-[10px] font-black tracking-[0.2em] text-accent">TREINO QUE GERA RESULTADO</span>
            <h2 className="mt-3 text-2xl md:text-4xl font-black leading-tight">Conteúdo certo, no momento certo</h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              A plataforma concentra as ferramentas que transformam teoria em desempenho: questões, revisões e materiais para você avançar com confiança.
            </p>
            <ul className="mt-6 grid gap-3">
              {[
                "Banco de questões com resolução e nivelamento",
                "Flashcards Anki para revisões inteligentes",
                "Aulas e encontros para acelerar sua evolução",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-14 md:py-20 border-y border-border/40 overflow-hidden">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <h2 className="text-xl md:text-3xl font-black max-w-lg leading-tight">
              A mentoria não mudou só a nota, mudou a rotina e a cabeça de quem entrou
            </h2>
            <ArrowRight className="hidden md:block w-10 h-10 text-accent" />
          </div>

          <div className="relative -mx-5 overflow-hidden">
            <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
              {[...depoimentos, ...depoimentos].map((img, index) => (
                <div key={`${img}-${index}`} className="mx-2.5 w-[280px] shrink-0 md:w-[360px]">
                  <div className="overflow-hidden rounded-2xl border border-accent/25 bg-card shadow-premium">
                    <img src={img} alt="Feedback de aluno da Mentoria FULL" loading="lazy" className="w-full h-auto object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center md:justify-end">
            <Button variant="gold" size="lg" onClick={scrollToPlans} className="rounded-full px-8 font-black">
              <span className="inline-flex items-center justify-center gap-2">
                QUERO MUDAR MINHA PREPARAÇÃO <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos-vsl" className="py-14 md:py-20 scroll-mt-8">
        <div className="container mx-auto px-5">
          <h2 className="text-center text-2xl md:text-4xl font-black mb-3">Escolha o seu plano</h2>
          <p className="text-center text-sm text-muted-foreground mb-10">
            Clique no plano pra ver todos os benefícios e solicitar sua inscrição.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {cards.map((c) => (
              <button
                key={c.mode}
                type="button"
                onClick={() => setOpenPlan(c.mode)}
                className={`relative text-left rounded-2xl p-5 md:p-7 border-2 bg-card/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                  c.mode === "ultra"
                    ? "border-accent shadow-glow-beige hover:shadow-glow-beige"
                    : "border-accent/25 hover:border-accent hover:shadow-glow-beige"
                }`}
              >
                {c.destaque && (
                  <span className="absolute -top-3 right-4 text-[9px] font-black tracking-wider px-3 py-1 rounded-full bg-accent text-accent-foreground animate-pulse-soft">
                    {c.destaque}
                  </span>
                )}
                <span className="text-[10px] font-black tracking-widest px-3 py-1 rounded-full bg-accent/15 text-accent">
                  {c.tag}
                </span>
                <h3 className="text-xl md:text-2xl font-black mt-3 mb-1.5">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{c.desc}</p>
                <ul className="space-y-2">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-xs md:text-sm text-foreground/90">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
                <span className={`mt-5 flex items-center justify-center gap-2 rounded-full py-3 text-xs font-black transition-colors ${
                  c.mode === "ultra"
                    ? "bg-accent text-accent-foreground shadow-glow-beige"
                    : "border border-accent/50 text-accent"
                }`}>
                  VER TUDO QUE ESTÁ INCLUSO <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            ))}
          </div>
          <p className="text-center text-[11px] text-muted-foreground mt-6">
            Desconto imperdível por tempo limitado · fale conosco para fazer sua inscrição
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 border-t border-border/40">
        <div className="container mx-auto px-5 grid md:grid-cols-[320px_1fr] gap-8 max-w-5xl">
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-3">Perguntas frequentes</h2>
            <p className="text-sm text-muted-foreground">
              Respostas claras pras dúvidas mais comuns sobre a Mentoria FULL.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <FAQItem value="q1" question="O que torna a Mentoria FULL diferente de um cursinho?" answer="Cursinho entrega conteúdo. A mentoria entrega direção: plano de metas individual, acompanhamento semanal, banco de questões com nivelamento e flashcards. Você para de adivinhar o que estudar." />
            <FAQItem value="q2" question="Em quanto tempo vejo resultado?" answer="A partir do 2º/3º mês, quando a rotina engrena e o volume de questões começa a aparecer na nota. Por isso o plano mínimo é trimestral." />
            <FAQItem value="q3" question="Preciso já estar estudando pra entrar?" answer="Não. O plano Ultra é o pacote fechado com aulas ao vivo e gravadas pra quem começa do zero. O Standard é ideal pra quem já tem preparatório." />
            <FAQItem value="q4" question="Serve pra qual concurso?" answer="Standard e Standard + servem pra qualquer concurso, inclusive CN e EPCAr. O Ultra é exclusivo para AFA, EN e EFOMM." />
            <FAQItem value="q5" question="Como faço minha inscrição?" answer="Escolha seu plano e envie a mensagem pelo WhatsApp. Nossa equipe explica as condições atuais e conclui sua inscrição." />
            <FAQItem value="q6" question="E se eu não puder participar dos encontros ao vivo?" answer="Todos os encontros e aulas ficam gravados na plataforma pra você assistir quando quiser." />
          </Accordion>
        </div>
      </section>

      <footer className="py-8 border-t border-border/40">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <img src={logoSilver} alt="FULL" className="h-8 w-auto opacity-70" />
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} FULL · Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* DIALOG DE PLANOS */}
      <Dialog open={openPlan !== null} onOpenChange={(o) => !o && setOpenPlan(null)}>
        <DialogContent className="w-[calc(100%-1.5rem)] sm:max-w-3xl max-h-[85vh] overflow-y-auto p-0 border-accent/30">
          <div className="p-5 md:p-7">
            <span className="text-[10px] font-black tracking-widest px-3 py-1 rounded-full bg-accent/15 text-accent">
              {detalhe.tag}
            </span>
            <h3 className="text-xl md:text-2xl font-black mt-3">{detalhe.titulo}</h3>
            <p className="text-sm text-muted-foreground mt-1">{detalhe.subtitulo}</p>
            <p className="text-xs font-bold text-accent mt-2 flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5" /> {detalhe.para}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-5">
              {detalhe.grupos.map((g) => (
                <div key={g.titulo} className="rounded-xl border border-border bg-card/60 p-4">
                  <p className="flex items-center gap-2 text-sm font-bold mb-2">
                    <g.icon className="w-4 h-4 text-accent" /> {g.titulo}
                  </p>
                  <ul className="space-y-1.5">
                    {g.itens.map((i) => (
                      <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {detalhe.naoInclui.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {detalhe.naoInclui.map((n) => (
                  <li key={n} className="flex gap-2 text-xs text-muted-foreground/70">
                    <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" /> Não inclui: {n}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 rounded-xl border-2 border-accent/40 bg-accent/10 p-4 text-center">
              <p className="text-xs font-black uppercase tracking-widest text-accent">Desconto imperdível por tempo limitado</p>
              <p className="mt-2 text-sm text-muted-foreground">Fale diretamente com nossa equipe para conhecer as condições e concluir sua inscrição.</p>
              <Button asChild variant="gold" className="mt-4 w-full sm:w-auto rounded-full px-6 font-black">
                <a href={detalhe.link} target="_blank" rel="noopener noreferrer">
                  <span className="inline-flex items-center justify-center gap-2">
                    QUERO FAZER MINHA INSCRIÇÃO <MessageCircle className="w-4 h-4" />
                  </span>
                </a>
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-accent" /> Garantia incondicional de 7 dias</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Atendimento humano pelo WhatsApp</span>
            </div>

            <div className="mt-5 flex justify-center">
              <a
                href={WPP_DUVIDAS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2.5 text-xs font-bold text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Ficou com dúvida? Fala comigo no WhatsApp
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Masterclass;
