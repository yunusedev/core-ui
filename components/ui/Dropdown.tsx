import React from "react";
import * as Helper from "@radix-ui/react-dropdown-menu";
import { Label } from "./Label";
import { cn } from "../libs/utils";

export const dropdownClasses = {
  content:"min-w-[220px] flex flex-col fade-in-0 data-[state=open]:fade-in-100 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[state=closed]:fade-out-0 data-[state=open]:animate-in rounded-lg bg-background-100 border border-secondary p-1",
  item: "flex items-center justify-between p-2 px-3 hover:bg-secondary outline-none rounded-md text-[15px] font-medium transition cursor-pointer",
  separator: "m-2 h-px bg-secondary",
  label: "text-sm text-muted m-2"
}

export const Dropdown = Helper.Root;
export const DropdownTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof Helper.Trigger>
>(({ ...props }, ref) => {
  return <Helper.Trigger asChild ref={ref} {...props} />;
});

export const DropdownBody = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof Helper.Content>
>(({ children, className, ...props }, ref) => {
  return (
    <Helper.Portal>
      <Helper.Content
        className={cn(dropdownClasses.content, className)}
        ref={ref}
        {...props}
      >
        {children}
        <Helper.Arrow className="fill-secondary" />
      </Helper.Content>
    </Helper.Portal>
  );
});

export const DropdownItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof Helper.Item>
>(({ ...props }, ref) => {
  return (
    <Helper.Item
      className={cn(dropdownClasses.item)}
      ref={ref}
      {...props}
    />
  );
});

export const DropdownSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof Helper.Separator>
>(({ ...props }, ref) => {
  return (
    <Helper.Separator className={cn(dropdownClasses.separator)} ref={ref} {...props} />
  );
});

export const DropdownChange = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof Helper.CheckboxItem>
>(({ children, ...props }, ref) => {
  return (
    <Helper.CheckboxItem
      className={dropdownClasses.item}
      {...props}
      ref={ref}
    >
      {children}
    </Helper.CheckboxItem>
  );
});
export const DropdownIndicator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof Helper.ItemIndicator>
>(({ ...props }, ref) => {
  return <Helper.ItemIndicator {...props} ref={ref} />;
});
export const DropdownLabel = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithRef<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(dropdownClasses.label, className)}
      ref={ref}
      {...props}
    />
  );
});
export const DropdownSub = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof Helper.Sub>
>(({ ...props }, ref) => {
  return <Helper.Sub {...props} />;
});
export const DropdownSubTrigger = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof Helper.SubTrigger>
>(({ ...props }, ref) => {
  return <Helper.SubTrigger asChild ref={ref} {...props} />;
});
export const DropdownSubBody = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof Helper.SubContent>
>(({ className, ...props }, ref) => {
  return (
    <Helper.Portal>
      <Helper.SubContent
        className={cn(dropdownClasses.content,className)}
        ref={ref}
        {...props}
      />
    </Helper.Portal>
  );
});
Dropdown.displayName = "CoreUIDropdown";
DropdownTrigger.displayName = "CoreUIDropdownTrigger";
DropdownBody.displayName = "CoreUIDropdownBody";
DropdownItem.displayName = "CoreUIDropdownItem";
DropdownSeparator.displayName = "CoreUIDropdownSeparator";
DropdownChange.displayName = "CoreUIDropdownCheckbox";
DropdownIndicator.displayName = "CoreUIDropdownCheckbox";
DropdownLabel.displayName = "CoreUIDropdownLabel";
DropdownSub.displayName = "CoreUIDropdownSub";
DropdownSubTrigger.displayName = "CoreUIDropdownSubTrigger";
