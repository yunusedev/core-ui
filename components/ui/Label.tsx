import React from "react";
import { cn } from "../libs/utils";

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithRef<"label">
>(({ className, ...props }, ref) => {
  return (
    <label
      className={cn("text-foreground font-medium", className)}
      ref={ref}
      {...props}
    />
  );
});
Label.displayName = "CoreUILabel";
