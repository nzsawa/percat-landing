import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Check,
  Sparkles,
  BookMarked,
  Share2,
  FolderOpen,
  Search,
  Send,
  PlaySquare,
  Instagram,
  Video,
} from "lucide-react";

// Single-file landing page for percat.app
// TailwindCSS + shadcn/ui + Framer Motion + Lucide icons
// Drop-in as a React component. Add Tailwind in your build for styles.

const features = [
  {
    icon: <BookMarked className="w-5 h-5" />,
    title: "Save anywhere",
    desc: "One tap to save Reels, Posts, and TikToks. Add from web or share sheet.",
  },
  {
    icon: <FolderOpen className="w-5 h-5" />,
    title: "Auto organize",
    desc: "Percat’s AI clusters content by topic, creator, vibe, and intent.",
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Find by memory",
    desc: "Search like: ‘that reel about morning mobility with the blue mat’.",
  },
  {
    icon: <Share2 className="w-5 h-5" />,
    title: "Share & collaborate",
    desc: "Spaces for teams and friends. Share links or mini-collections.",
  },
];

const faqs = [
  {
    q: "What platforms does Percat support?",
    a: "Instagram Reels & Posts, TikTok, plus generic web links. More soon.",
  },
  {
    q: "How does the AI sorting work?",
    a: "We extract captions, audio text, and visuals to classify content by themes and entities.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes—start free with generous limits. Pro unlocks advanced search and team spaces.",
  },
  {
    q: "Can I import existing saves?",
    a: "Yep. Import from your camera roll, notes, or a CSV of links.",
  },
];

function GradientBlob({ className = "" }: { className?: string }) {
  return (
    <div
      className={
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:radial-gradient(70%_70%_at_50%_20%,black,transparent)] " +
        className
      }
    >
      <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-500 opacity-20 blur-3xl" />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-7 w-7">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400" />
        <span className="absolute inset-[2px] rounded-lg bg-black" />
        <Sparkles className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-white" />
      </div>
      <span className="text-lg font-semibold tracking-tight">percat<span className="text-indigo-400">.app</span></span>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <div className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm text-white/80 hover:text-white">Features</a>
          <a href="#how" className="text-sm text-white/80 hover:text-white">How it works</a>
          <a href="#faq" className="text-sm text-white/80 hover:text-white">FAQ</a>
          <Button asChild className="rounded-xl">
            <a href="#cta">Get early access</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <GradientBlob />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-28">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            Remember more than links
          </motion.h1>
          <p className="mt-5 text-pretty text-white/80">
            Save reels & posts from Instagram and TikTok. Percat's AI sorts them—so you can find them later by describing what you remember.
          </p>
          <div className="mt-8 flex max-w-md items-center gap-3">
            <Input placeholder="Enter your email" className="h-11 rounded-xl bg-white/5 placeholder:text-white/50" />
            <Button className="h-11 rounded-xl px-5">Join waitlist</Button>
          </div>
          <p className="mt-3 text-xs text-white/50">No spam. Early users get Pro perks.</p>
          <div className="mt-8 flex items-center gap-4 text-white/70">
            <div className="flex items-center gap-2 text-sm"><Check className="h-4 w-4" /> Private by default</div>
            <div className="flex items-center gap-2 text-sm"><Check className="h-4 w-4" /> One-tap saving</div>
            <div className="flex items-center gap-2 text-sm"><Check className="h-4 w-4" /> Natural search</div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-3 shadow-2xl">
            <div className="grid h-full grid-rows-3 gap-3">
              <div className="grid grid-cols-2 gap-3">
                <MockCard title="Mobility drills" tag="Wellness" />
                <MockCard title="Pasta trick" tag="Cooking" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <MockTile label="Morning routine" />
                <MockTile label="UI micro-interactions" />
                <MockTile label="Street style" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <MockWide caption="‘the reel with the blue mat’" />
                <MockWide caption="‘creator: ali fitness’" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-24 bg-gradient-to-t from-black to-transparent" />
          </div>
          <div className="absolute -right-4 -top-4 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
            <Instagram className="h-4 w-4" />
            <Video className="h-4 w-4" />
            <span className="text-xs text-white/80">Add from Instagram & TikTok</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MockCard({ title, tag }: { title: string; tag: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400/30 via-fuchsia-400/20 to-amber-300/20" />
      <div className="aspect-[4/3] w-full" />
      <div className="relative p-3">
        <div className="text-xs text-white/60">{tag}</div>
        <div className="truncate text-sm font-medium">{title}</div>
      </div>
    </div>
  );
}

function MockTile({ label }: { label: string }) {
  return (
    <div className="flex aspect-square items-end overflow-hidden rounded-2xl bg-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-indigo-400/20 to-fuchsia-400/20" />
      <div className="relative w-full p-3 text-xs font-medium">{label}</div>
    </div>
  );
}

function MockWide({ caption }: { caption: string }) {
  return (
    <div className="relative flex aspect-[5/3] items-end overflow-hidden rounded-2xl bg-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-sky-400/20 to-indigo-400/20" />
      <div className="relative w-full p-3 text-xs italic text-white/80">{caption}</div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="relative border-t border-white/10 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Save. Organize. Find. Share.</h2>
          <p className="mt-3 text-white/70">
            Turn your social media saves into an organized library that actually works for you.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Card key={i} className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5">{f.icon}</span>
                  {f.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/70">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="relative border-t border-white/10 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">How it works</h3>
          <ol className="mt-6 space-y-5">
            {[
              {
                step: "Save",
                text: "Use the share sheet, browser extension, or paste a link. We fetch captions, audio, and visuals.",
              },
              {
                step: "Organize",
                text: "AI sorts by topic, creator, and intent—auto tags, smart folders, and collections.",
              },
              { step: "Find", text: "Describe what you remember. Natural language + visual search = done." },
              { step: "Share", text: "Send a public link or invite collaborators to a Space." },
            ].map((s, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-white/10 text-sm font-semibold">{i + 1}</div>
                <div>
                  <div className="font-medium">{s.step}</div>
                  <div className="text-sm text-white/70">{s.text}</div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex items-center gap-3">
            <Button className="rounded-xl">Try a live demo</Button>
            <Button variant="outline" className="rounded-xl border-white/20 bg-white/5">
              <PlaySquare className="mr-2 h-4 w-4" /> Watch 60s video
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-xl">
            <div className="absolute inset-0 grid grid-cols-3 gap-2 p-3">
              <div className="rounded-lg bg-white/10" />
              <div className="rounded-lg bg-white/10" />
              <div className="rounded-lg bg-white/10" />
              <div className="col-span-2 rounded-lg bg-white/10" />
              <div className="rounded-lg bg-white/10" />
              <div className="rounded-lg bg-white/10" />
              <div className="col-span-2 rounded-lg bg-white/10" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black" />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Send className="h-4 w-4" /> Share to Percat from Instagram
            </div>
            <div className="text-xs text-white/60">Auto-tagged: mobility, warmup, routine</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="relative border-t border-white/10 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">A library that works for you</h3>
            <p className="mt-2 text-white/70">Glanceable cards, smart folders, and quick actions.</p>
          </div>
          <Button variant="outline" className="rounded-xl border-white/20 bg-white/5">Open sample Space</Button>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 via-fuchsia-400/10 to-amber-300/10 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <div className="truncate text-xs font-medium">Card {i + 1}</div>
                <div className="text-[10px] text-white/60">@creator · 0:{(i % 6) + 9}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative border-t border-white/10 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Loved by collectors & creators</h3>
          <p className="mt-2 text-white/70">Early users say Percat turns chaos into recallable knowledge.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {["Percat finally makes my saved reels useful.", "I just describe what I remember. It finds it.", "Our team shares research minis in Spaces."].map((t, i) => (
            <Card key={i} className="border-white/10 bg-white/5">
              <CardContent className="p-6">
                <p className="text-sm text-white/80">“{t}”</p>
                <div className="mt-4 text-xs text-white/50">— Early Access User #{i + 1}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="relative border-t border-white/10 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQs</h3>
        <div className="mt-8 divide-y divide-white/10">
          {faqs.map((f, i) => (
            <details key={i} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-left text-base font-medium">
                {f.q}
                <span className="ml-4 text-white/40 group-open:rotate-45 transition-transform">＋</span>
              </summary>
              <div className="pb-6 text-sm text-white/70">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="relative border-t border-white/10 py-16 md:py-20">
      <GradientBlob />
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">Be first in line</h3>
        <p className="mt-3 text-white/70">
          Join the waitlist. We’ll invite in waves and gift Pro months to early users.
        </p>
        <div className="mx-auto mt-6 flex max-w-md items-center gap-3">
          <Input placeholder="you@domain.com" className="h-11 rounded-xl bg-white/5 placeholder:text-white/50" />
          <Button className="h-11 rounded-xl px-5">Get invite</Button>
        </div>
        <div className="mt-4 text-xs text-white/50">By signing up, you agree to our Terms & Privacy.</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <Logo />
        <nav className="flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </nav>
        <div className="text-xs text-white/50">© {new Date().getFullYear()} Percat, Inc.</div>
      </div>
    </footer>
  );
}

export default function PercatLanding() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Showcase />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

