import { Button } from "../ui/Button"
import { Drawer, DrawerBody, DrawerClose, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, NestedDrawer } from "../ui/Drawer"

export const DrawerDemo = () => {
    return(
        <Drawer>
            <DrawerTrigger>
                <Button>Click me</Button>
            </DrawerTrigger>
            <DrawerBody>
                <DrawerHeader>
                    <DrawerTitle className="text-center">Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription className="text-center">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose><Button className="w-full" variant="ghost">Cancel</Button></DrawerClose>
                    <DrawerClose><Button className="w-full" color="foreground">Confirm</Button></DrawerClose>
                </DrawerFooter>
            </DrawerBody>
        </Drawer>
    )
}

export const DrawerDemoString = `import { Button } from "../ui/Button"
import { Drawer, DrawerBody, DrawerClose, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/Drawer"

export const DrawerDemo = () => {
    return(
        <Drawer>
            <DrawerTrigger>
                <Button>Click me</Button>
            </DrawerTrigger>
            <DrawerBody>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose><Button variant="ghost">Cancel</Button></DrawerClose>
                    <DrawerClose><Button color="foreground">Confirm</Button></DrawerClose>
                </DrawerFooter>
            </DrawerBody>
        </Drawer>
    )
}`

export default {
    examples: [
        {
            title: "Nested Drawers",
            description: "Creating nested drawers",
            component: () => (
                <Drawer>
                <DrawerTrigger>
                    <Button>Click Me</Button>
                </DrawerTrigger>
                <DrawerBody>
                    <DrawerHeader>
                        <DrawerTitle className="text-center">Nested Drawers</DrawerTitle>
                        <DrawerDescription className="text-center">For nested drawers, click the button</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                       <NestedDrawer>
                        <DrawerTrigger>
                             <Button className="w-full">Click Me</Button>
                        </DrawerTrigger>
                        <DrawerBody>
                            <DrawerHeader>
                                <DrawerTitle className="text-center">Are you absolutely sure?</DrawerTitle>
                                <DrawerDescription className="text-center"> This action cannot be undone. This will permanently delete your account and remove your data from our servers.</DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                                <DrawerClose><Button className="w-full" color="secondary" variant="ghost">Cancel</Button></DrawerClose>
                                <DrawerClose><Button className="w-full" color="foreground" variant="solid">Confirm</Button></DrawerClose>
                            </DrawerFooter>
                        </DrawerBody>
                       </NestedDrawer>
                    </DrawerFooter>
                </DrawerBody>
                </Drawer>
            ),
            componentString: `() => (
                <Drawer>
                <DrawerTrigger>
                    <Button>Click Me</Button>
                </DrawerTrigger>
                <DrawerBody>
                    <DrawerHeader>
                        <DrawerTitle className="text-center">Nested Drawers</DrawerTitle>
                        <DrawerDescription className="text-center">For nested drawers, click the button</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                       <NestedDrawer>
                        <DrawerTrigger>
                             <Button className="w-full">Click Me</Button>
                        </DrawerTrigger>
                        <DrawerBody>
                            <DrawerHeader>
                                <DrawerTitle className="text-center">Are you absolutely sure?</DrawerTitle>
                                <DrawerDescription className="text-center"> This action cannot be undone. This will permanently delete your account and remove your data from our servers.</DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                                <DrawerClose><Button className="w-full" color="secondary" variant="ghost">Cancel</Button></DrawerClose>
                                <DrawerClose><Button className="w-full" color="foreground" variant="solid">Confirm</Button></DrawerClose>
                            </DrawerFooter>
                        </DrawerBody>
                       </NestedDrawer>
                    </DrawerFooter>
                </DrawerBody>
                </Drawer>
            )`
        }
    ]
}