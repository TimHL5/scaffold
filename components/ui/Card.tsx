"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className, hoverable = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        "bg-white rounded-xl border border-gray-200 p-6 transition-shadow",
        hoverable && "hover:shadow-xl",
        className
      )}
      whileHover={hoverable ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
