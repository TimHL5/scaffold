"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";

const values = [
  {
    title: "Clarity over complexity",
    description: "Simple beats sophisticated. If you have to explain it, it's too complicated.",
  },
  {
    title: "Progress over perfection",
    description: "A shipped MVP beats a perfect pitch deck. Move forward.",
  },
  {
    title: "Structure enables creativity",
    description: "Constraints aren't limiting. They're liberating.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
                We&apos;re building the syllabus that should exist.
              </h1>
              <p className="text-xl text-slate-600">
                Scaffold started because we were tired of watching good ideas die
                from inaction.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                The problem we&apos;re solving
              </h2>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Every year, thousands of college students have startup ideas.
                  They&apos;re smart, ambitious, and capable. But most of those
                  ideas never become anything—not because the ideas were bad, but
                  because there was no clear path forward.
                </p>

                <p>
                  The tools that exist assume you already know how to be a
                  founder. ChatGPT gives you a wall of text. Notion gives you a
                  blank page. Neither tells you what to do on Monday morning.
                </p>

                <p>
                  We built Scaffold to be the structure those ideas need. A
                  clear, week-by-week framework that tells you exactly what to do
                  next—and holds you accountable when you don&apos;t do it.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                What we believe
              </h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card hoverable={false} className="text-center h-full">
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
