import { Button } from "../ui/Button"
import { Dialog, DialogBody, DialogDescription, DialogFooter, DialogHeader, DialogSection, DialogTitle, DialogTrigger } from "../ui/Dialog"
import { TextField } from "../ui/TextField"

export const DialogDemo = () => {
    return(
        <Dialog>
            <DialogTrigger>
                <Button>Click Me</Button>
            </DialogTrigger>
            <DialogBody>
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <DialogSection>
                    <TextField label="Full Name" placeholder="Full Name" className="w-full" />
                </DialogSection>
                <DialogFooter>
                    <Button className="w-full lg:w-fit" color="foreground">Make changes</Button>
                </DialogFooter>
            </DialogBody>
        </Dialog>
    )
}

export const DialogDemoString = `import { Button } from "../ui/Button"
import { Dialog, DialogBody, DialogDescription, DialogFooter, DialogHeader, DialogSection, DialogTitle, DialogTrigger } from "../ui/Dialog"
import { TextField } from "../ui/TextField"

export const DialogDemo = () => {
    return(
        <Dialog>
            <DialogTrigger>
                <Button>Click Me</Button>
            </DialogTrigger>
            <DialogBody>
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <DialogSection>
                    <TextField className="w-full" />
                </DialogSection>
                <DialogFooter>
                    <Button className="w-full lg:w-fit" color="foreground">Make changes</Button>
                </DialogFooter>
            </DialogBody>
        </Dialog>
    )
}`