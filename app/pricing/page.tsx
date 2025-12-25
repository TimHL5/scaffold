"use client";

import Link from "next/link";
import { Check, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Get started and validate your idea.",
    features: [
      "1 active roadmap",
      "3-month max timeline",
      "Weekly deliverables",
      "Basic AI feedback",
      "Community access",
    ],
    cta: "Start Free",
    href: "/#waitlist",
    popular: false,
    variant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Full power for serious builders.",
    features: [
      "Unlimited roadmaps",
      "Up to 12-month timelines",
      "Advanced AI feedback",
      "Roadmap adaptation",
      "Priority support",
      "Export & share your roadmap",
    ],
    cta: "Join Waitlist",
    href: "/#waitlist",
    popular: true,
    variant: "default" as const,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
                Simple pricing for serious builders.
              </h1>
              <p className="text-xl text-slate-600">
                Start free. Upgrade when you&apos;re ready.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card
                  className={`relative h-full flex flex-col ${
                    plan.popular
                      ? "border-2 border-steel-500 shadow-xl"
                      : "border border-slate-200"
                  }`}
                  hoverable={false}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="inline-flex items-center px-4 py-1 bg-amber-500 text-white text-sm font-semibold rounded-full">
                        <Zap className="w-4 h-4 mr-1" />
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-charcoal mb-2">
                        {plan.name}
                      </h3>
                      <div className="mb-2">
                        <span className="text-5xl font-bold text-charcoal">
                          {plan.price}
                        </span>
                        <span className="text-slate-600">{plan.period}</span>
                      </div>
                      <p className="text-slate-600">{plan.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full"
                    variant={plan.variant}
                    size="lg"
                    asChild
                  >
                    <Link href={plan.href}>{plan.cta}</Link>
                  </Button>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <p className="text-slate-600">
                Questions?{" "}
                <a
                  href="mailto:hello@scaffold.build"
                  className="text-steel-500 hover:text-steel-600 font-semibold"
                >
                  Reach out at hello@scaffold.build
                </a>
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
