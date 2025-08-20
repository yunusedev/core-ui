import React from "react";
import { cn } from "../libs/utils";

export interface HeadingProps extends React.ComponentPropsWithRef<"hgroup"> {
  htype: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, htype, ...props }, ref) => {
    const Component = htype as React.ElementType;
    const headingTypeClasses = {
      h1: "text-5xl font-black",
      h2: "text-4xl font-black",
      h3: "text-3xl font-black",
      h4: "text-2xl font-extrabold",
      h5: "text-xl font-bold",
      h6: "text-lg font-bold",
    };
    return (
      <Component
        ref={ref}
        className={cn(
          "text-foreground",
          headingTypeClasses[htype as keyof typeof headingTypeClasses],
          className
        )}
        {...props}
      />
    );
  }
);
