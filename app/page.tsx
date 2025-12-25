"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Code2,
  Rocket,
  Shield,
  Users,
  ArrowRight,
  Check,
  Github,
  Terminal,
  Blocks,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Get your GitHub App running in minutes with our intuitive CLI and templates.",
  },
  {
    icon: Code2,
    title: "Developer-First",
    description: "Built by developers, for developers. Clean APIs and excellent documentation.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security with OAuth, webhook verification, and more.",
  },
  {
    icon: Rocket,
    title: "Deploy Anywhere",
    description: "Deploy to Vercel, AWS, or your own infrastructure with ease.",
  },
  {
    icon: Terminal,
    title: "CLI Tools",
    description: "Powerful CLI for scaffolding, testing, and managing your GitHub Apps.",
  },
  {
    icon: Blocks,
    title: "Extensible",
    description: "Plugin system and hooks to customize every aspect of your app.",
  },
];

const stats = [
  { value: "10k+", label: "Apps Created" },
  { value: "50k+", label: "Developers" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

const benefits = [
  "No credit card required",
  "Free tier available",
  "Cancel anytime",
  "Full documentation",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <Container>
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full mb-6">
                <Github className="w-4 h-4 text-primary-600 mr-2" />
                <span className="text-sm font-medium text-primary-600">
                  Trusted by 50,000+ developers
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Build GitHub Apps in{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Minutes
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The fastest way to build, test, and deploy GitHub Apps. Transform
              your development workflow with powerful automation tools.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" asChild>
                <Link href="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  {benefit}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            className="mt-16 lg:mt-24 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900 p-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">
                <code>{`$ npx create-scaffold-app my-github-app
✓ Creating your GitHub App...
✓ Setting up authentication...
✓ Configuring webhooks...
✓ Installing dependencies...

Success! Your GitHub App is ready.

$ cd my-github-app && npm run dev
> Server running at http://localhost:3000`}</code>
              </pre>
            </div>
            {/* Floating elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-32 h-32 bg-primary-200 rounded-full opacity-50 blur-3xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary-200 rounded-full opacity-50 blur-3xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-600">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-100">{stat.label}</div>
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
            subtitle="Features"
            title="Everything you need to build amazing GitHub Apps"
            description="Scaffold provides all the tools and infrastructure you need to create production-ready GitHub Apps."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <Container>
          <SectionHeader
            subtitle="Simple Process"
            title="From idea to production in three steps"
            description="Building GitHub Apps has never been easier. Our streamlined process gets you up and running fast."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Your App",
                description:
                  "Use our CLI to scaffold a new GitHub App with best practices built-in.",
              },
              {
                step: "02",
                title: "Customize & Build",
                description:
                  "Add your business logic using our intuitive APIs and extensive documentation.",
              },
              {
                step: "03",
                title: "Deploy & Scale",
                description:
                  "Deploy to your preferred platform and scale with confidence.",
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="relative">
                  <div className="text-6xl font-bold text-primary-100 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-primary-200" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6}>
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 lg:p-16 text-center">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Ready to build something amazing?
                </h2>
                <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                  Join thousands of developers building the future of GitHub
                  automation.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-primary-600 hover:bg-gray-100"
                    asChild
                  >
                    <Link href="/signup">
                      Start Building Free
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <Link href="/pricing">View Pricing</Link>
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
