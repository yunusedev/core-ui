import React from "react";
import * as Helper from "@radix-ui/react-avatar";
import { cn } from "../libs/utils";
export const Avatar = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithRef<typeof Helper.Image> & {
    fallback?: string;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  }
>(({ className, src, alt, size = "md", fallback = "UI", ...props }, ref) => {
  return (
    <Helper.Root
      className={cn(
        "inline-flex size-8 select-none items-center justify-center overflow-hidden rounded-full align-middle",
        {
          "size-8": size == "sm",
          "size-10": size == "md",
          "size-12": size == "lg",
          "size-14": size == "xl",
          "size-16": size == "2xl",
          "size-20": size == "3xl",
        }, className
      )}
    >
      <Helper.Image
        className="size-full rounded-[inherit] object-cover"
        ref={ref}
        src={src}
        alt={alt}
        {...props}
      />
      <Helper.Fallback
        className="size-full flex items-center justify-center bg-secondary text-[15px] font-medium"
        delayMs={500}
      >
        {fallback}
      </Helper.Fallback>
    </Helper.Root>
  );
});

Avatar.displayName = "CoreUIAvatar";
