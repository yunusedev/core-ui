import * as Helper from "@radix-ui/react-dialog";
import React from "react";
import { cn } from "../libs/utils";
import { useMediaQuery } from "react-responsive";
import {
  Drawer as VaulDrawer,
  DrawerBody as VaulDrawerBody,
  DrawerClose as VaulDrawerClose,
  DrawerDescription as VaulDrawerDescription,
  DrawerFooter as VaulDrawerFooter,
  DrawerHeader as VaulDrawerHeader,
  DrawerSection as VaulDrawerSection,
  DrawerTitle as VaulDrawerTitle,
  DrawerTrigger as VaulDrawerTrigger,
} from "./Drawer";

export const DialogClasses = {
  overlay: [
    "fixed inset-0 bg-foreground/60 z-[99] dark:bg-background/60 animate-in data-[state=closed]:animate-out",
    "data-[state=open]:fade-in-95 data-[state=closed]:fade-out-0",
  ],
  content: [
    "z-[100] fixed border border-secondary overflow-hidden left-1/2 top-1/2 p-8 flex flex-col gap-6 rounded-lg bg-background max-h-[85vh] min-w-[90vw] max-w-[95vw] lg:min-w-[300px] lg:max-w-xl outline-none -translate-x-1/2 -translate-y-1/2",
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-95 data-[state=open]:zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:slide-in-from-bottom-2",
  ],
  header: "space-y-2 flex flex-col items-center lg:items-start",
  title: "text-2xl font-semibold text-center lg:text-start",
  description: "text-muted text-center lg:text-start",
  footer: "flex flex-col gap-2 pt-6 lg:flex-row lg:justify-end",
};

export const Dialog: React.FC<
  React.ComponentPropsWithoutRef<typeof Helper.Root>
> = ({ ...props }) => {
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  return (
    <>{isMobile ? <VaulDrawer {...props} /> : <Helper.Root {...props} />}</>
  );
};

export const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof Helper.Trigger>
>(({ ...props }, ref) => {
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  return isMobile ? (
    <VaulDrawerTrigger asChild {...props} />
  ) : (
    <Helper.Trigger asChild ref={ref} {...props} />
  );
});

export const DialogBody = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof Helper.Content> & {
    container?: Element | null | DocumentFragment;
  }
>(({ className, container, ...props }, ref) => {
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });

  return isMobile ? (
    <VaulDrawerBody {...props} />
  ) : (
    <Helper.Portal container={container}>
      <Helper.Overlay className={cn(DialogClasses.overlay)} />
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
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  return isMobile ? (
    <VaulDrawerHeader ref={ref} {...props} />
  ) : (
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
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  return isMobile ? (
    <VaulDrawerTitle ref={ref} {...props} />
  ) : (
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
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  return isMobile ? (
    <VaulDrawerDescription ref={ref} {...props} />
  ) : (
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
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  return isMobile ? (
    <VaulDrawerSection ref={ref} {...props} />
  ) : (
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
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  return isMobile ? (
    <VaulDrawerFooter ref={ref} {...props} />
  ) : (
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
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  return isMobile ? (
    <VaulDrawerClose ref={ref} {...props} />
  ) : (
    <Helper.Close asChild ref={ref} {...props} />
  );
});

Dialog.displayName = "CoreUIDialog";
DialogTrigger.displayName = "CoreUIDialogTrigger";
DialogBody.displayName = "CoreUIDialogBody";
DialogHeader.displayName = "CoreUIDialogHeader";
DialogTitle.displayName = "CoreUIDialogTitle";
DialogDescription.displayName = "CoreUIDialogDescription";
DialogSection.displayName = "CoreUIDialogSection";
DialogFooter.displayName = "CoreUIDialogFooter";
DialogClose.displayName = "CoreUIDialogClose";
