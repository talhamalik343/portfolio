import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/talha-portrait.png.asset.json";
import darkBg from "@/assets/dark-bg.jpg";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  FileDown,
  Phone,
  Sparkles,
  Code2,
  Database,
  Layout,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Malik M Talha — AI Engineering Student & Developer",
      },
      {
        name: "description",
        content:
          "Malik M Talha — BS Artificial Intelligence student at FAST National University, building RAG pipelines, AI agents, and automated workflows.",
      },
      { property: "og:title", content: "Malik M Talha — AI Engineering Student & Developer" },
      {
        property: "og:description",
        content:
          "BS AI student at FAST building RAG pipelines, AI agents, and automated workflows with Python, LangChain, and n8n.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Languages",
    tags: ["Python", "C++"],
  },
  {
    icon: Sparkles,
    title: "Generative AI & Architecture",
    tags: ["RAG", "LangChain", "LlamaIndex", "Prompt Engineering"],
  },
  {
    icon: Database,
    title: "Vector Databases & Tools",
    tags: ["ChromaDB", "Pinecone", "n8n Automation"],
  },
  {
    icon: Layout,
    title: "Frameworks & Web",
    tags: ["PyTorch", "Scikit-Learn", "FastAPI", "Git/GitHub"],
  },
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Ambient background image, fixed and faint, for depth */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center opacity-[0.18]"
        style={{ backgroundImage: `url(${darkBg})` }}
        aria-hidden="true"
      />
      <div className="relative z-10">
        <Header scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function Header({
  scrolled,
  menuOpen,
  setMenuOpen,
}: {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
            <span className="text-sm font-bold tracking-tight">MT</span>
          </span>
          <span className="text-[0.95rem] font-semibold tracking-tight text-foreground">
            Malik M Talha
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
          >
            Get in Touch <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-md text-foreground ring-1 ring-border md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              Get in Touch <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              BS Artificial Intelligence · FAST National University
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-accent-gradient">Malik M Talha</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              I'm an AI Engineering student at FAST National University focused on
              building intelligent systems. I design RAG pipelines, autonomous AI
              agents, and automated workflows that turn research into practical,
              shipping software.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_8px_30px_-8px_oklch(0.76_0.09_85/0.5)]"
              >
                View Skills <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Mail className="h-4 w-4" /> Get in Touch
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <Stat value="RAG" label="Pipelines" />
              <span className="h-4 w-px bg-border" />
              <Stat value="AI" label="Agents" />
              <span className="h-4 w-px bg-border" />
              <Stat value="n8n" label="Workflows" />
            </div>
          </div>

          <div className="animate-rise justify-self-center lg:justify-self-end">
            <div className="relative">
              <div className="ambient-glow absolute -inset-6 rounded-[2rem]" />
              <img
                src={portraitAsset.url}
                alt="Portrait of Malik M Talha"
                width={320}
                height={320}
                className="relative h-72 w-72 rounded-3xl border border-border object-cover shadow-2xl sm:h-80 sm:w-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <span className="font-semibold text-foreground">{value}</span>
      <span>{label}</span>
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="About" title="Engineering intelligence into software" />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <div className="space-y-5 text-[0.975rem] leading-relaxed text-muted-foreground">
            <p>
              I'm a BS Artificial Intelligence student at FAST National University,
              where I'm learning the foundations of machine learning, systems, and
              applied AI. My focus is on taking what works in research and shaping it
              into reliable software — retrieval-augmented generation pipelines that
              ground models in real data, and autonomous agents that plan and execute
              multi-step tasks.
            </p>
            <p>
              Alongside RAG and agents, I build automated workflows with n8n and FastAPI
              microservices that wire models into real products. I care about the full
              loop: clean data, dependable retrieval, sensible prompts, and APIs that
              other developers can actually use. The goal is practical AI that ships.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <InfoCard label="University" value="FAST NUCES" />
            <InfoCard label="Degree" value="BS Artificial Intelligence" />
            <InfoCard label="Focus" value="RAG · Agents · Workflows" />
            <InfoCard label="Toolbelt" value="Python · LangChain · n8n" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I build with"
          description="A categorized look at the tools, frameworks, and concepts I reach for when building intelligent systems."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary/15">
                  <group.icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <SectionHeading
                eyebrow="Contact"
                title="Let's build something intelligent"
                description="Open to collaborations, internships, and AI engineering conversations. Reach out — I usually reply within a day."
              />
              <a
                href="mailto:talhamalik3434445@gmail.com"
                className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-primary transition-opacity hover:opacity-80"
              >
                <Mail className="h-5 w-5" /> talhamalik3434445@gmail.com
              </a>
            </div>

            <div className="flex flex-col justify-center gap-3 border-t border-border p-8 sm:border-l sm:border-t-0 sm:p-12">
              <ContactLink
                icon={Phone}
                label="Phone"
                href="tel:+923320716421"
                hint="0332 0716421"
              />
              <ContactLink
                icon={Linkedin}
                label="LinkedIn"
                href="https://www.linkedin.com/in/malik-talha-00923b324"
                hint="Connect professionally"
              />
              <ContactLink
                icon={Github}
                label="GitHub"
                href="https://github.com/talhamalik343"
                hint="See the source code"
              />
              <a
                href="/resume.pdf"
                download
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_10px_36px_-10px_oklch(0.76_0.09_85/0.55)]"
              >
                <FileDown className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  href,
  hint,
}: {
  icon: typeof Github;
  label: string;
  href: string;
  hint: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-primary/40"
    >
      <span className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
          <Icon className="h-4 w-4" />
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-medium text-foreground">{label}</span>
          <span className="text-xs text-muted-foreground">{hint}</span>
        </span>
      </span>
      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} Malik M Talha. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/talhamalik343" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/malik-talha-00923b324" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            LinkedIn
          </a>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
