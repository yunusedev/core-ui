import React from "react";
import * as Helper from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "../libs/utils";
export const Checkbox = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof Helper.Root> &
  {size?: "sm"|"md"|"lg"}
>(
    ({className, size = "md", ...props}, ref) => {
        return(
            <Helper.Root className={cn("flex relative data-[state=checked]:border-foreground overflow-hidden size-6 border border-secondary rounded", {
                "size-5": size == "sm",
                "size-7 ": size == "lg",
            }, className)} ref={ref} {...props}>
                <Helper.Indicator className="absolute inset-0 opacity-0 data-[state=checked]:opacity-100 flex items-center justify-center bg-foreground text-background transition-all">
                    <CheckIcon className={cn({
                        "size-4": size == "sm",
                        "size-5": size == "md",
                        "size-6": size == "lg",
                    })} />
                </Helper.Indicator>
            </Helper.Root>
        )
    }
)