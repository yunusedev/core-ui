import * as Helper from "@radix-ui/react-tabs"
import React from "react";
import { cn } from "../libs/utils";

export const Tabs = Helper.Root;
export const TabsContent = Helper.Content;
export const TabsList = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof Helper.List>>(
    ({className, ...props}, ref) => {
        return(
            <Helper.List className={cn("flex bg-secondary p-1 w-fit rounded-lg items-center gap-px mb-2", className)} ref={ref} {...props}/>
        )
    }
)
export const TabsTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithRef<typeof Helper.Trigger>>(
    ({className, ...props}, ref) => {
        return(
            <Helper.Trigger className={cn("font-medium transition-all p-2 px-3 data-[state=active]:shadow data-[state=active]:bg-background data-[state=active]:dark:bg-foreground data-[state=active]:dark:text-background rounded-lg", className)} ref={ref} {...props}/>
        )
    }
)
TabsTrigger.displayName = "CoreUITabsTrigger";