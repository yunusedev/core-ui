import React from "react";
import * as Helper from "@radix-ui/react-toggle";
import { cn } from "../libs/utils";

export const ToggleClasses = {
    toggle: "flex items-center justify-center text-lg rounded-lg text-muted hover:bg-secondary-100 hover:text-foreground transition-all data-[state=on]:bg-secondary-100 data-[state=on]:text-foreground cursor-pointer bg-secondary",
    sizeClasses: {
            sm: "size-8 text-base rounded-md",
            md:"size-10",
            lg:"size-12"
    }
}
export const Toggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof Helper.Root> &
 {size?: "sm"|"md"|"lg"} 
>(
    ({className, size = "md", ...props}, ref) => {
        return(
            <Helper.Root className={cn(ToggleClasses.toggle, ToggleClasses["sizeClasses"][size] ,className)} ref={ref} {...props} />
        )
    }
)

Toggle.displayName = "CoreUIDisplay"