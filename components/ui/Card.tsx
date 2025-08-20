import React from "react";
import { cn } from "../libs/utils";

export const Card = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"section">
>(({ className, ...props }, ref) => {
  return (
    <section
      className={cn(
        "rounded-lg py-2 border border-secondary shadow-xs",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"header">
>(({ className, ...props }, ref) => {
  return <header className={cn("p-2.5", className)} ref={ref} {...props} />;
});

export const CardBody = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"div">
>(({ className, ...props }, ref) => {
  return <div className={cn("p-2.5", className)} ref={ref} {...props} />;
});

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"footer">
>(({ className, ...props }, ref) => {
  return <footer className={cn("p-2.5", className)} ref={ref} {...props} />;
});

export const CardSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("h-px w-full bg-secondary my-2", className)}
      ref={ref}
      {...props}
    />
  );
});

Card.displayName = "CoreUICard";
CardSeparator.displayName = "CoreUICardSeparator";
CardHeader.displayName = "CoreUICardHeader";
CardFooter.displayName = "CoreUICardFooter";
CardBody.displayName = "CoreUICardBody";
