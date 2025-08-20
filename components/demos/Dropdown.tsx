import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../ui/Button";
import {
  Dropdown,
  DropdownBody,
  DropdownChange,
  DropdownIndicator,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownSub,
  DropdownSubBody,
  DropdownSubTrigger,
  DropdownTrigger,
} from "../ui/Dropdown";
import { useState } from "react";

export const DropdownDemo = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button>Click me</Button>
      </DropdownTrigger>
      <DropdownBody>
        <DropdownItem>
          <span>New Tab</span>
          <span className="text-xs text-muted">⌘ + T</span>
        </DropdownItem>
        <DropdownItem>
          <span>New Window</span>
          <span className="text-xs text-muted">⌘ + N</span>
        </DropdownItem>
        <DropdownSub>
          <DropdownSubTrigger>
            <DropdownItem>
              <span>More Tools</span>{" "}
              <Icon icon={"solar:alt-arrow-right-outline"} />
            </DropdownItem>
          </DropdownSubTrigger>
          <DropdownSubBody>
            <DropdownItem>
              <span>Save Page As</span>
              <span className="text-xs text-muted">⌘ + S</span>
            </DropdownItem>
            <DropdownItem>
              <span>Create shortcut</span>
            </DropdownItem>
            <DropdownItem>
              <span>Name Windows</span>
            </DropdownItem>
            <DropdownSeparator />
            <DropdownItem>
              <span>Developer Tools</span>
            </DropdownItem>
          </DropdownSubBody>
        </DropdownSub>
        <DropdownSeparator />
        <DropdownLabel>People</DropdownLabel>
        <DropdownChange checked={checked} onCheckedChange={setChecked}>
          John Doe
          <DropdownIndicator>
            <div className="size-2.5 bg-black rounded-full" />
          </DropdownIndicator>
        </DropdownChange>
      </DropdownBody>
    </Dropdown>
  );
};

export const DropdownDemoString = `import { Icon } from "@iconify/react/dist/iconify.js"
import { Button } from "../ui/Button"
import { Dropdown, DropdownBody, DropdownChange, DropdownIndicator, DropdownItem, DropdownLabel, DropdownSeparator, DropdownSub, DropdownSubBody, DropdownSubTrigger, DropdownTrigger } from "../ui/Dropdown"

export const DropdownDemo = () => {
    return(
        <Dropdown>
            <DropdownTrigger>
                <Button>Click me</Button>
            </DropdownTrigger>
            <DropdownBody>
                <DropdownItem>
                    <span>New Tab</span>
                    <span className="text-xs text-muted">⌘ + T</span>
                </DropdownItem>
                <DropdownItem>
                    <span>New Window</span>
                    <span className="text-xs text-muted">⌘ + N</span>
                </DropdownItem>
                <DropdownSub>
                    <DropdownSubTrigger><DropdownItem><span>More Tools</span> <Icon icon={"solar:alt-arrow-right-outline"} /></DropdownItem></DropdownSubTrigger>
                    <DropdownSubBody>
                        <DropdownItem>
                            <span>Save Page As</span>
                            <span className="text-xs text-muted">⌘ + S</span>
                        </DropdownItem>
                        <DropdownItem>
                            <span>Create shortcut</span>
                        </DropdownItem>
                        <DropdownItem>
                            <span>Name Windows</span>
                        </DropdownItem>
                        <DropdownSeparator />
                        <DropdownItem>
                            <span>Developer Tools</span>
                        </DropdownItem>
                    </DropdownSubBody>
                </DropdownSub>
                <DropdownSeparator />
                <DropdownLabel>People</DropdownLabel>
                <DropdownChange>
                    <DropdownIndicator>
                        <div className="size-2.5 bg-black rounded-full" />
                    </DropdownIndicator>
                    John Doe
                </DropdownChange>
            </DropdownBody>
        </Dropdown>
    )
}`;
