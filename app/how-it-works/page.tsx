"use client";

import Link from "next/link";
import {
  Terminal,
  Code2,
  Rocket,
  Settings,
  Webhook,
  Lock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    icon: Terminal,
    title: "1. Install the CLI",
    description: "Get started by installing our command-line tool globally on your system.",
    code: "npm install -g create-scaffold-app",
    details: [
      "Works on macOS, Windows, and Linux",
      "Requires Node.js 18 or higher",
      "Automatic updates included",
    ],
  },
  {
    icon: Code2,
    title: "2. Create Your App",
    description: "Scaffold a new GitHub App with our interactive CLI wizard.",
    code: "npx create-scaffold-app my-app",
    details: [
      "Choose from multiple templates",
      "Automatic GitHub App registration",
      "Pre-configured webhooks and permissions",
    ],
  },
  {
    icon: Settings,
    title: "3. Configure & Customize",
    description: "Customize your app using our intuitive configuration and APIs.",
    code: "npm run dev",
    details: [
      "Hot reload during development",
      "Built-in testing utilities",
      "TypeScript support out of the box",
    ],
  },
  {
    icon: Rocket,
    title: "4. Deploy",
    description: "Deploy your app to production with a single command.",
    code: "npm run deploy",
    details: [
      "Deploy to Vercel, AWS, or custom servers",
      "Automatic SSL certificates",
      "Built-in monitoring and logging",
    ],
  },
];

const features = [
  {
    icon: Webhook,
    title: "Webhook Management",
    description: "Automatic webhook validation, routing, and error handling built-in.",
  },
  {
    icon: Lock,
    title: "Security First",
    description: "OAuth flows, JWT validation, and secure secret management included.",
  },
  {
    icon: Code2,
    title: "Developer Experience",
    description: "TypeScript support, hot reload, and excellent documentation.",
  },
];

const useCases = [
  {
    title: "CI/CD Automation",
    description: "Automate your build, test, and deployment pipelines with custom GitHub Apps.",
    examples: ["Automated testing", "Deployment workflows", "Code quality checks"],
  },
  {
    title: "Code Review Tools",
    description: "Build intelligent code review assistants that analyze PRs and provide feedback.",
    examples: ["Automated reviews", "Style enforcement", "Security scanning"],
  },
  {
    title: "Project Management",
    description: "Create apps that sync GitHub with your project management tools.",
    examples: ["Issue tracking", "Sprint planning", "Time tracking"],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                How Scaffold Works
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                From installation to deployment, learn how Scaffold makes building
                GitHub Apps incredibly simple.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Steps Section */}
      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="space-y-16">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                      <step.icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-gray-900 p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <pre className="text-green-400 text-sm md:text-base font-mono">
                        <code>$ {step.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <Container>
          <SectionHeader
            subtitle="Powerful Features"
            title="Built-in tools for common tasks"
            description="Everything you need to build production-ready GitHub Apps is included."
          />

          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Use Cases Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            subtitle="Use Cases"
            title="What you can build with Scaffold"
            description="Scaffold is flexible enough to power any type of GitHub automation."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to get started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Create your first GitHub App in the next 5 minutes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/signup">
                    Start Building Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
