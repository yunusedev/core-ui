import React from "react";
import { cn } from "../libs/utils";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  color?: "primary" | "secondary" | "danger" | "foreground";
  isIconOnly?: boolean;
  variant?: "outline" | "ghost" | "solid";
  size?: "sm" | "md" | "lg";
  radius?: "sm"|"md"|"lg"|"xl"|"2xl"|"full"
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      radius = "lg",
      variant = "solid",
      size = "md",
      color = "foreground",
      isIconOnly = false,
      ...props
    },
    ref
  ) => {
    const colorClasses = {
      solid: {
        primary: "bg-primary text-background hover:brightness-95",
        secondary: "bg-secondary hover:bg-secondary-100",
        danger: "bg-warning text-background",
        foreground: "bg-foreground text-background hover:bg-foreground/80",
      },
      ghost: {
        primary: "hover:bg-primary hover:text-background",
        secondary: "hover:bg-secondary",
        danger: "hover:bg-warning hover:text-background",
        foreground: "hover:bg-foreground hover:text-background",
      },
      outline: {
        primary: "bg-primary text-background hover:brightness-95",
        secondary: "bg-secondary text-muted hover:bg-secondary-100",
        danger: "bg-warning text-background",
        foreground: "bg-foreground text-background hover:bg-foreground/80",
      },
    };
    const sizeClasses = {
      normal: {
        sm: "p-1.5 px-3 text-sm",
        md: "p-2.5 px-4",
        lg: "p-3 text-[16px] px-5",
      },
      isIconOnly: {
        sm: "size-10 text-[15px] p-0 px-0",
        md: "size-12 p-0 px-0",
        lg: "size-14 text-lg p-0 px-0",
      },
    };
    const radiusClasses = {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full",
    }
    return (
      <button
        className={cn(
          "rounded-lg flex justify-center items-center gap-2 w-fit outline-none cursor-pointer font-semibold disabled:opacity-50 transition-all",
          colorClasses[variant][color],
          sizeClasses[`${isIconOnly ? "isIconOnly" : "normal"}`][size],
          radiusClasses[radius as keyof typeof radiusClasses],
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "CoreUIButton";
