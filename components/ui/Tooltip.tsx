import * as Helper from "@radix-ui/react-tooltip"
import React from "react";
import { cn } from "../libs/utils";
export const TooltipProvider = Helper.Provider;
export const Tooltip = Helper.Tooltip;
export const TooltipTrigger = Helper.Trigger;
export const TooltipBody = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof Helper.Content>>(
    ({className, children, ...props}, ref) => {
        return(
            <Helper.Portal>
                <Helper.Content className={cn("bg-background-100 p-2 rounded-md border border-secondary-200", "animate-in data-[state=delayed-open]:fade-in-95 data-[state=delayed-open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out-0 data-[state=instant-open]:zoom-in-95 data-[state=instant-open]:fade-in-95 data-[side=top]:slide-in-from-bottom-1 data-[side=bottom]:slide-in-from-top-1 data-[side=right]:slide-in-from-left-1 data-[side=left]:slide-in-from-right-1", className)} ref={ref} {...props}>
                    {children}
                    <Helper.Arrow className="fill-secondary-200" />
                </Helper.Content>
            </Helper.Portal>
        )
    }
)

TooltipBody.displayName = "CoreUITooltipBody"