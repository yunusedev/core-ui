"use client";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/Collapsible";
import { Button } from "../ui/Button";
import { Cross2Icon, RowSpacingIcon } from "@radix-ui/react-icons";

export const CollapsibleDemo = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Collapsible className="w-full flex flex-col gap-2" open={open} onOpenChange={setOpen}>
      <div className="flex items-center justify-between">
        <span className="text-muted">@pedruarte starred 3 repositories</span>
        <CollapsibleTrigger asChild>
          <Button isIconOnly size="sm" variant="ghost" color="secondary">
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="p-4 border rounded-lg border-secondary">
        <span className="font-medium">@radix-ui/primitives</span>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
            <div className="p-4 border rounded-lg border-secondary">
        <span className="font-medium">@radix-ui/colors</span>
      </div>
            <div className="p-4 border rounded-lg border-secondary">
        <span className="font-medium">@radix-ui/themes</span>
      </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export const CollapsibleDemoString = `"use client";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/Collapsible";
import { Button } from "../ui/Button";
import { Cross2Icon, RowSpacingIcon } from "@radix-ui/react-icons";

export const CollapsibleDemo = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Collapsible className="w-[300px] flex flex-col gap-2" open={open} onOpenChange={setOpen}>
      <div className="flex items-center justify-between">
        <span className="text-muted">@pedruarte starred 3 repositories</span>
        <CollapsibleTrigger asChild>
          <Button isIconOnly size="sm" variant="ghost" color="secondary">
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="p-4 border rounded-lg border-secondary">
        <span className="font-medium">@radix-ui/primitives</span>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
            <div className="p-4 border rounded-lg border-secondary">
        <span className="font-medium">@radix-ui/colors</span>
      </div>
            <div className="p-4 border rounded-lg border-secondary">
        <span className="font-medium">@radix-ui/themes</span>
      </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
`

export default {}