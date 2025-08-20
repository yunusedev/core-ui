import React from "react";
import { cn } from "../libs/utils";

export const Text = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithRef<"span"> & {
    type: "bold" | "muted" | "mutedSmall" | "boldSmall"|"semibold"|"semiboldLg";
  }
>(({ className, type, ...props }, ref) => {
  const typeClasses = {
    bold: "font-bold text-foreground",
    semibold: "font-semibold text-foreground",
    semiboldLg: "font-semibold text-lg text-foreground",
    boldSmall: "font-bold text-foreground text-sm",
    muted: "text-muted",
    mutedSmall: "text-muted text-sm",
  };
  return (
    <span
      className={cn(
        "leading-none",
        typeClasses[type as keyof typeof typeClasses],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Text.displayName = "CoreUIText";
