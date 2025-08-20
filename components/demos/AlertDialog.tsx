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
    <DialogClose><Button color="secondary" variant="ghost">Cancel</Button></DialogClose>
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

export default {
  props: [
    {
      prop: "trigger",
      type: "React.ReactNode",
      default: null,
      required: true,
      description: "Trigger of Alert Dialog"
    },
    {
      prop: "title",
      type: "string",
      default:null,
      required:true,
      description: "Title of an alert dialog"
    },
    {
      prop:"descriptipn",
      type:"string",
      default:null,
      required:false,
      description: "Description of an alert dialog"
    },
    {
      prop: "section",
      type:"React.ReactNode",
      default:null,
      required:false,
      description: "Section of an alert dialog"
    },
    {
      prop: "footer",
      type: "React.ReactNode",
      default:null,
      required:false,
      description: "Footer of an alert dialog"
    }
  ]
}