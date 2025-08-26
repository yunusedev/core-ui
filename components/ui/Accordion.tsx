import * as Helper from "@radix-ui/react-accordion";
import React from "react";
import { cn } from "../libs/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Accordion = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof Helper.Root>>(
    ({className, ...props}, forwardedRef) => {
        return(
            <Helper.Root className={cn("w-full flex flex-col gap-2", className)} ref={forwardedRef} {...props} />
        )
    }
)
const AccordionItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof Helper.Item>>(
	({ children, className, ...props }, forwardedRef) => (
		<Helper.Item
			className={cn(
				"border rounded-lg border-secondary",
				className,
			)}
			{...props}
			ref={forwardedRef}
		>
			{children}
		</Helper.Item>
	),
);

const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithRef<typeof Helper.Trigger>>(
	({ children, className, ...props }, forwardedRef) => (
		<Helper.Header className="flex">
			<Helper.Trigger
				className={cn(
					"font-medium group border-secondary text-foreground flex justify-between items-center p-4 w-full",
					className,
				)}
				{...props}
				ref={forwardedRef}
			>
				{children}
				<ChevronDownIcon
					className="transition group-data-[state=open]:rotate-180"
					aria-hidden
				/>
			</Helper.Trigger>
		</Helper.Header>
	),
);

const AccordionContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof Helper.Content>>(
	({ children, className, ...props }, forwardedRef) => (
		<Helper.Content
			className={cn(
				"overflow-hidden bg-background-100 border-t border-t-secondary rounded-b-lg text-sm text-muted data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
				className,
			)}
			{...props}
			ref={forwardedRef}
		>
			<div className="px-5 py-4">{children}</div>
		</Helper.Content>
	),
);

export {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
}