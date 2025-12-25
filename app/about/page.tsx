"use client";

import Link from "next/link";
import { Target, Users, Lightbulb, Heart, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

const values = [
  {
    icon: Target,
    title: "Developer-First",
    description: "We build tools that we'd want to use ourselves. Every decision is made with the developer experience in mind.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We&apos;re constantly pushing the boundaries of what&apos;s possible with GitHub Apps and automation.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "We believe in giving back to the open-source community that has given us so much.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great software is built by teams. We foster collaboration and knowledge sharing.",
  },
];

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Co-Founder",
    bio: "Former GitHub engineer with 10+ years of experience building developer tools.",
  },
  {
    name: "Sarah Chen",
    role: "CTO & Co-Founder",
    bio: "Open-source enthusiast and architect of Scaffold's core infrastructure.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Product",
    bio: "Product leader focused on creating delightful developer experiences.",
  },
  {
    name: "Emily Watson",
    role: "Head of Engineering",
    bio: "Engineering leader passionate about scalable systems and clean code.",
  },
];

const milestones = [
  {
    year: "2022",
    title: "Founded",
    description: "Scaffold was born from a simple idea: building GitHub Apps should be easy.",
  },
  {
    year: "2023",
    title: "First 1,000 Users",
    description: "Reached our first major milestone with developers from over 50 countries.",
  },
  {
    year: "2024",
    title: "Series A",
    description: "Raised $10M to expand our team and build more amazing features.",
  },
  {
    year: "2025",
    title: "50,000+ Developers",
    description: "Joined by an incredible community building the future of automation.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Building the Future of{" "}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  GitHub Automation
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                We&apos;re on a mission to make building GitHub Apps accessible to every
                developer, regardless of their experience level.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  We believe that every developer should have the power to automate
                  their workflow and build tools that make their lives easier.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  GitHub Apps are incredibly powerful, but they&apos;ve traditionally been
                  complex to build and maintain. We&apos;re changing that.
                </p>
                <p className="text-lg text-gray-600">
                  Scaffold provides the infrastructure, tooling, and best practices
                  you need to go from idea to production in minutes, not weeks.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 p-12 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-4">50k+</div>
                    <div className="text-xl">Developers Trust Scaffold</div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-200 rounded-full opacity-50 blur-3xl" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-200 rounded-full opacity-50 blur-3xl" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <Container>
          <SectionHeader
            subtitle="Our Values"
            title="What drives us"
            description="These principles guide everything we do at Scaffold."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            subtitle="Our Journey"
            title="Milestones"
            description="From a small idea to a thriving platform."
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-primary-100 rounded-xl flex items-center justify-center">
                        <span className="text-primary-600 font-bold text-lg">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <Container>
          <SectionHeader
            subtitle="Our Team"
            title="Meet the people behind Scaffold"
            description="We&apos;re a diverse team of engineers, designers, and product people passionate about developer tools."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card hoverable={false}>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full mx-auto mb-4" />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 lg:p-16 text-center">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Join us on our mission
                </h2>
                <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                  We&apos;re always looking for talented people who share our passion for
                  building great developer tools.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-primary-600 hover:bg-gray-100"
                    asChild
                  >
                    <Link href="/careers">
                      View Open Positions
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href="/signup">Start Building</Link>
                  </Button>
                </div>
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
