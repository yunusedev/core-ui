import { AlertDialog } from "../ui/AlertDialog";
import { Button } from "../ui/Button";
import { DialogClose } from "../ui/Dialog";
import {PlusIcon} from "@radix-ui/react-icons"
export const AlertDialogDemo = () => {
  return (
    <AlertDialog
    trigger={<Button isIconOnly><PlusIcon /></Button>}
    title="Are you absolutely sure?"
    description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
    footer={<>
    <DialogClose><Button variant="ghost">Cancel</Button></DialogClose>
    <DialogClose><Button variant="solid" color="foreground">Confirm</Button></DialogClose>
    </>}
    />
  );
};

export const AlertDialogDemoString = `import { AlertDialog } from "../ui/AlertDialog";
import { Button } from "../ui/Button";
import { DialogClose } from "../ui/Dialog";
import {PlusIcon} from "@radix-ui/react-icons"
export const AlertDialogDemo = () => {
  return (
    <AlertDialog
    trigger={<Button isIconOnly><PlusIcon /></Button>}
    title="Are you absolutely sure?"
    description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
    footer={<>
    <DialogClose><Button variant="ghost">Cancel</Button></DialogClose>
    <DialogClose><Button variant="solid" color="foreground">Confirm</Button></DialogClose>
    </>}
    />
  );
};`;
