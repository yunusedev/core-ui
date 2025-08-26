import * as Helper from "@radix-ui/react-switch";
import React from "react";
import { cn } from "../libs/utils";

export interface SwitchProps
  extends React.ComponentPropsWithRef<typeof Helper.Root> {
  size?: "sm" | "md" | "lg";
}
export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <Helper.Root
        ref={ref}
        className={cn(
          "data-[state=checked]:bg-foreground transition-all relative h-6 w-10 bg-secondary rounded-full",
          {
            "h-7 w-13": size == "md",
            "h-8 w-14": size == "lg",
          },
          className
        )}
        {...props}
      >
        <Helper.Thumb
          className={cn(
            "size-4 rounded-full dark:data-[state=checked]:bg-background  bg-background dark:bg-foreground block transition-all translate-x-1 data-[state=checked]:translate-x-5 shadow-xs",
            {
              "size-5 data-[state=checked]:translate-x-7": size == "md",
              "size-6 data-[state=checked]:translate-x-7": size == "lg",
            }
          )}
        />
      </Helper.Root>
    );
  }
);

Switch.displayName = "CoreUISwitch";
