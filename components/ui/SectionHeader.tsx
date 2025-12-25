"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  className,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        "mb-12 lg:mb-16",
        centered && "text-center max-w-3xl mx-auto",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {subtitle && (
        <p className="text-nebula-400 font-semibold mb-4 uppercase tracking-wide text-sm">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-slate-300 text-balance leading-relaxed max-w-3xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
}
