"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Compass,
  Calendar,
  HelpCircle,
  Sparkles,
  CheckSquare,
  MessageSquare,
  TrendingUp,
  Check,
  ArrowRight,
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
    icon: Compass,
    title: "No framework",
    description:
      "You don't know what steps come first, how long things take, or what 'making progress' even looks like.",
  },
  {
    icon: Calendar,
    title: "No accountability",
    description:
      "Classes get busy. The idea sits in your Notes app. Weeks pass. Nothing happens.",
  },
  {
    icon: HelpCircle,
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
  },
  {
    icon: CheckSquare,
    title: "Weekly deliverables",
    description:
      "No ambiguity. Each week you know exactly what to produce, what format to submit, and what success looks like.",
  },
  {
    icon: MessageSquare,
    title: "Real feedback",
    description:
      "The AI doesn't just say 'good job.' It evaluates your work against specific criteria and tells you what to improve.",
  },
  {
    icon: TrendingUp,
    title: "Adaptive pacing",
    description:
      "Crushing it? We'll compress your timeline. Struggling? We'll slow down. Your roadmap evolves with you.",
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
      "Our AI generates a week-by-week plan based on your idea, timeline, and goals. Every week has a specific deliverable.",
  },
  {
    number: "03",
    title: "Build & submit",
    description:
      "Each week, you complete your deliverable and submit it. The AI reviews your work and gives you real feedback.",
  },
  {
    number: "04",
    title: "Adapt & launch",
    description:
      "Moving fast? We'll accelerate your timeline. Falling behind? We'll adjust. Either way, you ship.",
  },
];

const benefits = [
  "No credit card required",
  "Free tier available",
  "Cancel anytime",
  "Full documentation",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your startup idea needs{" "}
              <span className="text-steel-500">structure</span>.
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-600 mb-10 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Scaffold turns your rough idea into a week-by-week roadmap. No
              experience required. Just follow the steps and build.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              id="waitlist"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg border-2 border-slate-200 focus:border-steel-500 focus:outline-none w-full sm:w-80 text-lg"
              />
              <Button size="lg">Get Early Access</Button>
            </motion.div>

            <motion.p
              className="text-sm text-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Join 200+ student founders on the waitlist.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-steel-500 font-semibold mb-2 uppercase tracking-wide text-sm">
                THE PROBLEM
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
                Ideas die from inaction, not competition.
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                You have the idea. You don&apos;t have the roadmap. So you wait
                for the &apos;right time&apos; that never comes.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problemCards.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card>
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Solution Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Scaffold builds your roadmap for you.
              </h2>
              <p className="text-xl text-slate-600">
                Tell us your idea. We&apos;ll generate a complete week-by-week
                plan tailored to what you&apos;re building—with specific
                deliverables, clear deadlines, and AI feedback on everything you
                submit.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeader
            subtitle="HOW IT WORKS"
            title="From rough idea to launched startup."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div>
                  <div className="text-6xl font-bold text-steel-100 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            subtitle="FEATURES"
            title="Everything you need to go from idea to MVP."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card>
                  <div className="w-12 h-12 bg-steel-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-steel-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="text-center mb-12">
            <FadeIn>
              <p className="text-steel-500 font-semibold mb-4 uppercase tracking-wide text-sm">
                BUILT FOR STUDENTS, BY STUDENTS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                Trusted by founders at
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-24 bg-slate-100 rounded-lg flex items-center justify-center"
                >
                  <span className="text-slate-400 font-semibold">
                    University Logo
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="max-w-3xl mx-auto">
              <Card hoverable={false} className="bg-steel-50 border-steel-200">
                <p className="text-lg text-charcoal mb-4 italic">
                  &quot;Scaffold gave me the structure I didn&apos;t know I needed.
                  I went from a vague idea to a working prototype in 4
                  months.&quot;
                </p>
                <p className="text-slate-600 font-semibold">
                  — Student Founder, University &apos;26
                </p>
              </Card>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden bg-gradient-to-r from-steel-500 to-steel-600 rounded-2xl p-12 lg:p-16 text-center">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Ready to give your idea the structure it deserves?
                </h2>
                <p className="text-xl text-steel-100 mb-8 max-w-2xl mx-auto">
                  Join the waitlist. We&apos;ll let you know when you can start
                  building.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-6 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-white focus:outline-none w-full sm:w-96 text-lg"
                  />
                  <Button
                    size="lg"
                    className="bg-white text-steel-600 hover:bg-steel-50"
                  >
                    Get Early Access
                  </Button>
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
