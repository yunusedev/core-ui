import React from "react";
import * as Helper from "@radix-ui/react-separator"
import { cn } from "../libs/utils";
export const Separator = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof Helper.Root>>(
    ({className, ...props}, ref) => {
        return(
            <Helper.Root className={cn("data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:h-full bg-secondary", className)} ref={ref} {...props} />
        )
    }
)

Separator.displayName = "CoreUISeparator"