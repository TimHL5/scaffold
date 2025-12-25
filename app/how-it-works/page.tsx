"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Input your idea",
    description:
      "Start with whatever you have. It could be a sentence: 'I want to help college students find better housing.' It could be more detailed. Either way, you also tell us your timeline (3-12 months) and your end goal—launch a prototype, pitch to investors, or generate first revenue. We take it from there.",
  },
  {
    number: "02",
    title: "AI generates your roadmap",
    description:
      "Based on your idea, timeline, and goal, Scaffold creates a complete week-by-week roadmap. Not a generic template—a plan tailored to what you're actually building. A marketplace app gets a different roadmap than a B2B SaaS. A 3-month sprint looks different than a 12-month build.",
  },
  {
    number: "03",
    title: "Weekly deliverables appear",
    description:
      "Each week, you see exactly what to do. Not vague advice like 'do customer discovery'—specific tasks like 'Interview 5 potential users, document their responses, and identify 2 recurring pain points.' You know what to produce, how to submit it, and how you'll be evaluated.",
  },
  {
    number: "04",
    title: "Submit and get feedback",
    description:
      "When you complete your deliverable, you submit it through Scaffold. Our AI evaluates your work against the week's success criteria and gives you specific feedback—what was strong, what was weak, and what to dig deeper on. This isn't generic praise. It's real critique.",
  },
  {
    number: "05",
    title: "Your roadmap adapts",
    description:
      "If you're ahead of schedule, we'll compress your timeline and accelerate your milestones. If you're falling behind, we'll adjust—breaking tasks into smaller pieces or extending your runway. The roadmap isn't static. It responds to you.",
  },
  {
    number: "06",
    title: "Complete and extend",
    description:
      "When you hit your end goal, you'll have something real: a prototype, a pitch deck, revenue. Then you can set new goals—your own OKRs—and Scaffold generates a fresh roadmap for your next phase. You've graduated from first-time founder to early-stage operator.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
                The complete process, step by step.
              </h1>
              <p className="text-xl text-slate-600 mb-10">
                Here&apos;s exactly how Scaffold takes you from rough idea to
                launched product.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Six Detailed Steps */}
      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 lg:p-12 shadow-sm border border-slate-200">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-steel-500 rounded-xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                        {step.title}
                      </h2>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Ready to get started?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Create your first roadmap in the next 5 minutes.
              </p>
              <Button size="lg" asChild>
                <Link href="/#waitlist">
                  Join the Waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
