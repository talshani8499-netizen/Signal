import React from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

export interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

export function InteractiveHoverButton({
  children,
  text,
  className,
  ...props
}: InteractiveHoverButtonProps) {
  return (
    <button
      className={cn(
        "group bg-warm-bg relative w-auto cursor-pointer overflow-hidden rounded-full border border-ink/20 p-2 px-8 text-center font-medium text-ink",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="bg-ink h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text || children}
        </span>
      </div>
      <div className="text-warm-bg absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </button>
  )
}
