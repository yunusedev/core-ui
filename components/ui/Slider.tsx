import * as Helper from "@radix-ui/react-slider";
import React from "react";
import { cn } from "../libs/utils";

export const Slider = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof Helper.Root> & {
    size?: "sm" | "md" | "lg";
  }
>(({ className, size = "lg", defaultValue, ...props }, ref) => {
  return (
    <Helper.Root
      ref={ref}
      className={cn(
        "relative flex h-5 w-[200px] touch-none select-none items-center",
        className
      )}
      defaultValue={defaultValue}
      {...props}
    >
      <Helper.Track
        className={cn("relative h-2 grow rounded-full bg-secondary", {
          "h-1": size == "sm",
          "h-2": size == "md",
          "h-2.5": size == "lg",
        })}
      >
        <Helper.Range className="absolute h-full rounded-full bg-foreground" />
      </Helper.Track>
      {Array.isArray(defaultValue) ? (
        defaultValue.map((_, _i) => <Thumb key={_i} size={size} />)
      ) : (
        <Thumb size={size} />
      )}
    </Helper.Root>
  );
});

const Thumb = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <Helper.Thumb
      className={cn(
        "block size-5 rounded-full bg-background-100 ring-1 ring-secondary-100 outline-none focus:ring-foreground focus:ring-2",
        {
          "size-4": size == "sm",
          "size-5": size == "md",
          "size-6": size == "lg",
        }
      )}
    />
  );
};

Slider.displayName = "CoreUISlider";
