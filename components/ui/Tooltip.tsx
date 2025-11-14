import * as Helper from "@radix-ui/react-tooltip";
import React from "react";
import { cn } from "../libs/utils";
import {useMediaQuery} from "react-responsive"
import { Drawer, DrawerBody, DrawerTitle, DrawerTrigger } from "./Drawer";
export const Tooltip = React.forwardRef<HTMLDivElement, {
children: React.ReactNode;
content: React.ReactNode | string;
className?:string;
}>(
    ({children, className, content}, ref) => {
        const isMobile = useMediaQuery({query: "(max-width:1025px)"})
        return(
            <>
            {isMobile ? (
                <Drawer>
                    <DrawerTrigger asChild>{children}</DrawerTrigger>
                    <DrawerBody>
                        <DrawerTitle className="hidden" />
                        <span className="text-muted">{content}</span>
                    </DrawerBody>
                </Drawer>
            ) : (
                <Helper.Provider>
                <Helper.Tooltip>
                    <Helper.Trigger asChild>
                        {children}
                    </Helper.Trigger>
                    <Helper.Portal>
                        <Helper.Content className={cn("p-2 px-3 animate-in data-[state=delayed-open]:zoom-in-95 data-[state=delayed-open]:fade-in-95 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out-0 border border-secondary bg-background rounded-md text-muted", className)}>
                            {content}
                            <Helper.Arrow className="fill-secondary-100" />
                        </Helper.Content>
                    </Helper.Portal>
                </Helper.Tooltip>
            </Helper.Provider>
            )}
            </>
        )
    } 
)

Tooltip.displayName = "CoreUITooltip"
