import * as Helper from "@radix-ui/react-dialog";
import React from "react";
import { cn } from "../libs/utils";

export const DialogClasses = {
  overlay:
    "fixed inset-0 bg-foreground/50 data-[state=open]:fade-in-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 animate-in",
  content: [
    "fixed overflow-hidden left-1/2 top-1/2 p-8 flex flex-col gap-6 rounded-lg bg-background-100 max-h-[85vh] min-w-[80vw] max-w-[90vw] lg:min-w-[300px] lg:max-w-xl outline-none -translate-x-1/2 -translate-y-1/2 bg-background",
    "data-[state=open]:animate-in data-[state=open]:fade-in-100 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:slide-in-from-bottom-2 data-[state=closed]:slide-out-from-bottom-2",
  ],
  header: "space-y-2 flex flex-col items-center lg:items-start",
  title: "text-2xl font-semibold text-center lg:text-start",
  description: "text-muted text-center lg:text-start",
  footer: "flex flex-col gap-2 lg:flex-row lg:justify-end",
};

export const Dialog = Helper.Root;

export const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof Helper.Trigger>
>(({ ...props }, ref) => {
  return <Helper.Trigger asChild ref={ref} {...props} />;
});

export const DialogBody = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof Helper.Content> & {
    container?: Element | null | DocumentFragment | undefined;
  }
>(({ className, container, ...props }, ref) => {
  return (
    <Helper.Portal container={container}>
      <Helper.Overlay className={DialogClasses.overlay} />
      <Helper.Content
        className={cn(DialogClasses.content, className)}
        ref={ref}
        {...props}
      />
    </Helper.Portal>
  );
});

export const DialogHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"header">
>(({ className, ...props }, ref) => {
  return (
    <header
      className={cn(DialogClasses.header, className)}
      ref={ref}
      {...props}
    />
  );
});

export const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithRef<typeof Helper.Title>
>(({ className, ...props }, ref) => {
  return (
    <Helper.Title
      className={cn(DialogClasses.title, className)}
      ref={ref}
      {...props}
    />
  );
});
export const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithRef<typeof Helper.Description>
>(({ className, ...props }, ref) => {
  return (
    <Helper.Description
      className={cn(DialogClasses.description, className)}
      ref={ref}
      {...props}
    />
  );
});
export const DialogSection = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"section">
>(({ className, ...props }, ref) => {
  return (
    <section
      className={cn(DialogClasses.header, className)}
      ref={ref}
      {...props}
    />
  );
});
export const DialogFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"footer">
>(({ className, ...props }, ref) => {
  return (
    <footer
      className={cn(DialogClasses.footer, className)}
      ref={ref}
      {...props}
    />
  );
});
export const DialogClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof Helper.Close>
>(({ ...props }, ref) => {
  return <Helper.Close asChild ref={ref} {...props} />;
});
Dialog.displayName = "CoreUIDialog";
DialogFooter.displayName = "CoreUIDialogFooter";
DialogSection.displayName = "CoreUIDialogSection";
DialogDescription.displayName = "CoreUIDialogDescription";
DialogTitle.displayName = "CoreUIDialogTitle";
DialogHeader.displayName = "CoreUIDialogHeader";
DialogBody.displayName = "CoreUIDialogBody";
DialogTrigger.displayName = "CoreUIDialogTrigger";
