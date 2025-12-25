"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckSquare,
  MessageSquare,
  TrendingUp,
  Zap,
  Brain,
  Rocket,
  Target,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

const problemCards = [
  {
    icon: Target,
    title: "No framework",
    description:
      "You don't know what steps come first, how long things take, or what 'making progress' even looks like.",
  },
  {
    icon: Zap,
    title: "No accountability",
    description:
      "Classes get busy. The idea sits in your Notes app. Weeks pass. Nothing happens.",
  },
  {
    icon: Brain,
    title: "No clear next step",
    description:
      "ChatGPT gives you a wall of text. Notion gives you a blank page. Neither tells you what to do Monday morning.",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "AI-generated roadmaps",
    description:
      "Tailored to your specific idea, timeline, and end goal. A hardware startup gets a different plan than a SaaS app.",
    gradient: "from-nebula-500 to-cosmic-500",
  },
  {
    icon: CheckSquare,
    title: "Weekly deliverables",
    description:
      "No ambiguity. Each week you know exactly what to produce, what format to submit, and what success looks like.",
    gradient: "from-cosmic-500 to-aurora-500",
  },
  {
    icon: MessageSquare,
    title: "Real feedback",
    description:
      "The AI doesn't just say 'good job.' It evaluates your work against specific criteria and tells you what to improve.",
    gradient: "from-aurora-500 to-nebula-500",
  },
  {
    icon: TrendingUp,
    title: "Adaptive pacing",
    description:
      "Crushing it? We'll compress your timeline. Struggling? We'll slow down. Your roadmap evolves with you.",
    gradient: "from-sunset-500 to-nebula-600",
  },
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Drop in your idea",
    description:
      "Even one sentence works. 'I want to help students find sublets.' That's enough.",
  },
  {
    number: "02",
    title: "Get your roadmap",
    description:
      "Our AI generates a week-by-week plan based on your idea, timeline, and goals.",
  },
  {
    number: "03",
    title: "Build & submit",
    description:
      "Each week, you complete your deliverable. The AI reviews and gives you real feedback.",
  },
  {
    number: "04",
    title: "Adapt & launch",
    description:
      "Moving fast? We'll accelerate. Falling behind? We'll adjust. Either way, you ship.",
  },
];

// Floating orbs component
const FloatingOrb = ({ delay = 0, duration = 20, size = 400, color = "nebula" }) => (
  <motion.div
    className={`absolute rounded-full opacity-20 blur-3xl pointer-events-none`}
    style={{
      width: size,
      height: size,
      background: color === "nebula" ? "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" :
                  color === "cosmic" ? "radial-gradient(circle, #3b82f6 0%, transparent 70%)" :
                  "radial-gradient(circle, #10b981 0%, transparent 70%)",
    }}
    animate={{
      x: [0, 100, -100, 0],
      y: [0, -100, 100, 0],
      scale: [1, 1.2, 0.8, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export default function Home() {
  return (
    <div className="min-h-screen bg-midnight-950 relative overflow-hidden">
      <Navbar />

      {/* Floating Background Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingOrb delay={0} duration={25} size={600} color="nebula" />
        <FloatingOrb delay={5} duration={30} size={500} color="cosmic" />
        <FloatingOrb delay={10} duration={28} size={450} color="aurora" />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative">
        <Container>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 glass rounded-full text-nebula-400 font-semibold text-sm gap-2 glow">
                <Sparkles className="w-4 h-4" />
                Powered by Advanced AI
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your startup idea needs{" "}
              <span className="gradient-text relative">
                structure
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-nebula-500/20 to-cosmic-500/20 blur-2xl -z-10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Scaffold turns your rough idea into a week-by-week roadmap. No
              experience required. Just follow the steps and build.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              id="waitlist"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-xl glass-strong text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-nebula-500 w-full sm:w-96 text-lg transition-all duration-300"
              />
              <Button size="lg" className="glow-hover group">
                Get Early Access
                <Rocket className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join 200+ student founders on the waitlist
            </motion.p>

            {/* Animated Stats */}
            <motion.div
              className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { label: "Success Rate", value: "94%" },
                { label: "Avg. Time to MVP", value: "8 wks" },
                { label: "Active Builders", value: "200+" },
              ].map((stat, index) => (
                <div key={index} className="glass rounded-xl p-4">
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-32 relative">
        <Container>
          <SectionHeader
            subtitle="THE PROBLEM"
            title={
              <span>
                Ideas die from <span className="gradient-text">inaction</span>, not competition.
              </span>
            }
            description="You have the idea. You don't have the roadmap. So you wait for the 'right time' that never comes."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {problemCards.map((item, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <Card className="group">
                  <div className="w-14 h-14 bg-gradient-to-br from-nebula-600 to-cosmic-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Solution Section */}
      <section className="py-20 lg:py-32 relative">
        <Container>
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="glass-strong rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-nebula-500/10 to-cosmic-500/10"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    Scaffold builds your <span className="gradient-text">roadmap</span> for you.
                  </h2>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Tell us your idea. We&apos;ll generate a complete week-by-week
                    plan tailored to what you&apos;re building—with specific
                    deliverables, clear deadlines, and AI feedback on everything you
                    submit.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 relative">
        <Container>
          <SectionHeader
            subtitle="HOW IT WORKS"
            title={
              <span>
                From rough idea to <span className="gradient-text">launched startup</span>
              </span>
            }
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  className="glass rounded-2xl p-8 relative group hover:scale-105 transition-transform duration-300"
                  whileHover={{ y: -8 }}
                >
                  <div className="text-7xl font-bold text-nebula-500/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>

                  {/* Connecting line */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-nebula-500 to-transparent" />
                  )}
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 relative">
        <Container>
          <SectionHeader
            subtitle="FEATURES"
            title={
              <span>
                Everything you need to go from idea to <span className="gradient-text">MVP</span>
              </span>
            }
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 lg:py-32 relative">
        <Container>
          <div className="text-center mb-12">
            <FadeIn>
              <p className="text-nebula-400 font-semibold mb-4 uppercase tracking-wide text-sm">
                BUILT FOR STUDENTS, BY STUDENTS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                Trusted by founders at
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-28 glass rounded-2xl flex items-center justify-center hover:glass-strong transition-all duration-300 group"
                >
                  <span className="text-slate-500 font-semibold group-hover:text-slate-400 transition-colors">
                    University Logo
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="max-w-4xl mx-auto">
              <div className="glass-strong rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nebula-500 via-cosmic-500 to-aurora-500" />
                <p className="text-xl text-slate-300 mb-6 italic leading-relaxed">
                  &quot;Scaffold gave me the structure I didn&apos;t know I needed.
                  I went from a vague idea to a working prototype in 4
                  months.&quot;
                </p>
                <p className="text-nebula-400 font-semibold">
                  — Student Founder, University &apos;26
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 relative">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl p-12 lg:p-20 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-nebula-600 via-cosmic-600 to-aurora-600 opacity-20" />
              <div className="glass-strong rounded-3xl p-12 lg:p-16 relative">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Ready to give your idea the <span className="gradient-text">structure</span> it deserves?
                </h2>
                <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Join the waitlist. We&apos;ll let you know when you can start
                  building.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-6 py-4 rounded-xl glass-strong text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-nebula-500 w-full sm:w-96 text-lg"
                  />
                  <Button size="lg" className="glow-hover">
                    Get Early Access
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
