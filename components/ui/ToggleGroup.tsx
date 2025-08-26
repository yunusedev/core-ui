import * as Helper from "@radix-ui/react-toggle-group"
import { cn } from "../libs/utils"
import React from "react"
import { ToggleClasses } from "./Toggle"

export const ToggleGroup = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof Helper.Root>>(
    ({className, ...props}, ref) => {
        return(
            <Helper.Root className={cn("p-0 border border-secondary rounded-md flex items-center justify-center gap-0", className)} ref={ref} {...props}/>
        )
    }
)
export const ToggleGroupItem = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithRef<typeof Helper.Item> & { size?: "sm"|"md"|"lg" }>(
    ({className, size = "md", ...props}, ref) => {
        return(
            <Helper.Item className={cn(ToggleClasses.toggle, "rounded-none bg-background hover:bg-secondary", "first:rounded-l-md border-r last:border-r-0 border-r-secondary last:rounded-r-md" , ToggleClasses.sizeClasses[size as keyof typeof ToggleClasses.sizeClasses] )} ref={ref} {...props} />
        )
    }
)
ToggleGroup.displayName = "CoreUIToggleGroup"