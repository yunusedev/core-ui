import React from "react";
import { cn } from "../libs/utils";

export const Spinner = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"div"> & { size?: "sm" | "md" | "lg" }
>(({ className, size = "sm", ...props }, ref) => {
  const sizeClasses = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  };
  return (
    <div
      ref={ref}
      className={cn(
        "border-2 border-t-transparent animate-spin rounded-full",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
});

Spinner.displayName = "CoreUISpinner";
