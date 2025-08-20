import React, { forwardRef } from "react";
import { cn } from "../libs/utils";
import Link from "next/link";

export const Paragraph = forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithRef<"p">
>(({ className, ...props }, ref) => {
  return <p className={cn("text-muted", className)} ref={ref} {...props} />;
});
export const ParagraphStrong = forwardRef<
  HTMLElement,
  React.ComponentPropsWithRef<"strong">
>(({ className, ...props }, ref) => {
  return (
    <strong className={cn("text-foreground", className)} ref={ref} {...props} />
  );
});
export const ParagraphAnchor = forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithRef<typeof Link>
>(({ className, href, ...props }, ref) => {
  return (
    <Link
      className={cn("text-primary font-bold hover:underline", className)}
      href={href}
      ref={ref}
      {...props}
    />
  );
});
Paragraph.displayName = "CoreUIParagraph";
ParagraphStrong.displayName = "CoreUIParagraphStrong";
ParagraphAnchor.displayName = "CoreUIParagraphAnchor";
