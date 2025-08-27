import { AccordionDemo } from "@/components/demos/Accordion";
import { CheckboxDemo } from "@/components/demos/Checkbox";
import { CollapsibleDemo } from "@/components/demos/Collapsible";
import { SeparatorDemo } from "@/components/demos/Separator";
import { TabsDemo } from "@/components/demos/Tabs";
import { ToggleDemo } from "@/components/demos/Toggle";
import { ToggleGroupDemo } from "@/components/demos/ToggleGroup";
import { CodeBlock } from "@/components/site/slug/CodeBlock";
import { Button } from "@/components/ui/Button";
import { Tooltip } from "@/components/ui/Tooltip";

export default function Page() {
    return(
        <div className="flex h-screen w-full items-center justify-center">
           <AccordionDemo />
        </div>
    )
}