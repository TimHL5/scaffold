"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
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
        <p className="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 text-balance">{description}</p>
      )}
    </motion.div>
  );
}
