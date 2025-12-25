"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps {
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", children, asChild, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebula-500 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      default: "bg-gradient-to-r from-nebula-600 to-cosmic-600 text-white hover:from-nebula-500 hover:to-cosmic-500 shadow-lg hover:shadow-2xl hover:shadow-nebula-500/50",
      ghost: "text-slate-300 hover:bg-white/10 hover:text-white",
      outline: "border-2 border-nebula-500/50 text-nebula-400 hover:bg-nebula-500/10 hover:border-nebula-400",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    if (asChild) {
      return (
        <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
          {children}
        </span>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
