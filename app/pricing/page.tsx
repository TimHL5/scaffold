"use client";

import Link from "next/link";
import { Check, ArrowRight, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for side projects and learning",
    features: [
      "Up to 3 GitHub Apps",
      "1,000 webhook events/month",
      "Community support",
      "Basic templates",
      "GitHub OAuth",
      "Standard documentation",
    ],
    cta: "Get Started",
    href: "/signup",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For professional developers and small teams",
    features: [
      "Unlimited GitHub Apps",
      "100,000 webhook events/month",
      "Priority email support",
      "Premium templates",
      "Advanced security features",
      "Custom domains",
      "Team collaboration (up to 5)",
      "Analytics dashboard",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams and organizations",
    features: [
      "Everything in Pro",
      "Unlimited webhook events",
      "Dedicated support",
      "SLA guarantees",
      "Custom integrations",
      "Unlimited team members",
      "Advanced analytics",
      "On-premise deployment option",
      "Custom training",
    ],
    cta: "Contact Sales",
    href: "/contact",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I change plans later?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
  },
  {
    question: "What happens if I exceed my webhook limit?",
    answer: "We'll notify you when you approach your limit. You can upgrade your plan or purchase additional events as needed.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for all paid plans. No questions asked.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. You'll retain access until the end of your billing period.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! Pro plan includes a 14-day free trial. No credit card required to start.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Choose the plan that&apos;s right for you. All plans include our core
                features.
              </p>
              <p className="text-sm text-gray-500">
                No hidden fees. Cancel anytime.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card
                  className={`relative ${
                    plan.popular
                      ? "border-2 border-primary-600 shadow-xl"
                      : "border border-gray-200"
                  }`}
                  hoverable={false}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="inline-flex items-center px-4 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-semibold rounded-full">
                        <Zap className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-gray-600">/month</span>
                      )}
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href={plan.href}>
                      {plan.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <Container>
          <SectionHeader
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Have questions? We've got answers."
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <Card hoverable={false}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Still have questions?
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Support</Link>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to start building?
                </h2>
                <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                  Join thousands of developers using Scaffold to build amazing
                  GitHub Apps.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-gray-100"
                  asChild
                >
                  <Link href="/signup">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
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
