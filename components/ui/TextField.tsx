import React from "react";
import { cn } from "../libs/utils";
import { Label } from "./Label";
import { Paragraph } from "./Paragraph";

export interface TextFieldProps extends React.ComponentPropsWithRef<"input"> {
  inputsize?: "sm" | "md" | "lg";
  label?: string;
  description?: string;
  errorLabel?: string | null;
  errorDescription?: string | null;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      inputsize = "md",
      label,
      description,
      errorLabel,
      errorDescription,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "p-1.5 px-2",
      md: "p-2",
      lg: "p-2.5",
    };
    return (
      <div className={cn("flex flex-col gap-1.5 w-full", className)}>
        {label && (
          <Label className={cn("", { "text-warning": errorLabel })}>
            {errorLabel ? errorLabel : label}
          </Label>
        )}
        <input
          className={cn(
            "ring-1 ring-secondary-100 font-medium placeholder:text-muted/70 bg-background-100 focus:ring-2 focus:ring-foreground transition outline-none rounded-lg",
            sizeClasses[inputsize  as keyof typeof sizeClasses],
          )}
          type="text"
          ref={ref}
          {...props}
        />
        {description && (
          <Paragraph
            className={cn("text-sm", { "text-warning": errorDescription })}
          >
            {errorDescription ? errorDescription : description}
          </Paragraph>
        )}
      </div>
    );
  }
);

TextField.displayName = "CoreUITextField";
