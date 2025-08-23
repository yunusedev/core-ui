import { CollapsibleDemo } from "@/components/demos/Collapsible";
import { SeparatorDemo } from "@/components/demos/Separator";
import { TabsDemo } from "@/components/demos/Tabs";
import { CodeBlock } from "@/components/site/slug/CodeBlock";
import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipBody, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";

export default function Page() {
    return(
        <div className="flex h-screen w-full items-center justify-center">
           <TabsDemo />
        </div>
    )
}