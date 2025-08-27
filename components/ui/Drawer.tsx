import React from "react";
import { Drawer as Vaul } from "vaul";
import { cn } from "../libs/utils";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

export const Drawer = Vaul.Root;

export const DrawerTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof Vaul.Trigger>
>(({ ...props }, ref) => {
  return <Vaul.Trigger asChild ref={ref} {...props} />;
});

export const DrawerBody = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof Vaul.Content>
>(({ children, ...props }, ref) => {
  return (
    <Vaul.Portal>
      <Vaul.Overlay className="z-[99] fixed inset-0 bg-foreground/40 dark:bg-background/60" />
      <Vaul.Content
        className="z-[100] overflow-auto max-h-screen dark:border dark:border-secondary bg-background rounded-lg after:hidden fixed bottom-2 left-2 right-2 outline-none"
        ref={ref}
        {...props}
      >
        <Vaul.Handle className="m-5 mb-8 !w-20" />
        <main className="p-2 px-4">{children}</main>
      </Vaul.Content>
    </Vaul.Portal>
  );
});

export const DrawerHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"header">
>(({ className, ...props }, ref) => {
  return <header className={cn("flex flex-col gap-2 items-center text-center", className)} ref={ref} {...props} />;
});
export const DrawerTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithRef<"h2">
>(({ className, ...props }, ref) => {
  return (
    <Vaul.Title
      className={cn("font-semibold text-2xl", className)}
      ref={ref}
      {...props}
    />
  );
});
export const DrawerDescription = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithRef<"p">
>(({ className, ...props }, ref) => {
  return (
    <Vaul.Description
      className={cn("text-muted", className)}
      ref={ref}
      {...props}
    />
  );
});
export const DrawerFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"footer">
>(({ className, children, ...props }, ref) => {
  return (
    <footer
      className={cn("flex flex-col gap-2 my-4", className)}
      ref={ref}
      {...props}
    >
      <div className="h-px mx-4  bg-secondary" />
      {children}
    </footer>
  );
});
export const DrawerSection = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"section">
>(({ className, ...props }, ref) => {
  return (
    <section className={cn("space-y-3 pt-8", className)} ref={ref} {...props} />
  );
});

export const NestedDrawer: React.FC<
  React.ComponentPropsWithoutRef<typeof Vaul.NestedRoot>
> = ({ ...props }) => {
  return <Vaul.NestedRoot {...props} />;
};
export const DrawerClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof Vaul.Close>
>(({ ...props }, ref) => {
  return <Vaul.Close asChild ref={ref} {...props} />;
});

DrawerBody.displayName = "CoreUIDrawerBody";
DrawerTrigger.displayName = "CoreUIDrawerTrigger";
DrawerHeader.displayName = "CoreUIDrawerHeader";
DrawerTitle.displayName = "CoreUIDrawerTitle";
DrawerDescription.displayName = "CoreUIDrawerDescription";
DrawerSection.displayName = "CoreUIDrawerSection";
DrawerFooter.displayName = "CoreUIDrawerFooter";
NestedDrawer.displayName = "CoreUINestedDrawer";
DrawerClose.displayName = "CoreUIDrawerClose";
