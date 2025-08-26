import { Avatar } from "../ui/Avatar"
import { Button } from "../ui/Button"
import { Card, CardBody, CardFooter, CardHeader, CardSeparator } from "../ui/Card"
import { Text } from "../ui/Text"

export const CardDemo = () => {
    return(
        <Card>
            <CardBody>
                Make beatiful websites with CoreUI component library.
            </CardBody>
        </Card>
    )
}

export const CardDemoString = `import { Card, CardBody } from "../ui/Card"

export const CardDemo = () => {
    return(
        <Card>
            <CardBody>
                Make beatiful websites with CoreUI component library.
            </CardBody>
        </Card>
    )
}`

export default {
    props: [null],
    examples: [
        {
            title: "With Header And Footer",
            description: "Creating card with header and footer components",
            component: () => (
                <Card className="w-80">
                    <CardHeader className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Avatar className="ring-2 ring-secondary ring-offset-2" size="md" src={"https://i.pravatar.cc/300?u=a042581f4e29026705u"} />
                            <div className="flex flex-col">
                                <Text type="bold">John Doe</Text>
                                <Text type="mutedSmall">@johndoe12</Text>
                            </div>
                        </div>
                        <Button size="sm">Follow</Button>
                    </CardHeader>
                    <CardSeparator />
                    <CardBody>
                        Make beautiful websites with CoreUI library component.
                    </CardBody>
                    <CardSeparator />
                    <CardFooter className="flex items-center gap-5">
                        <p className="text-muted"><Text type="semibold">12</Text> Following</p>
                        <p className="text-muted"><Text type="semibold">42</Text> Followers</p>
                    </CardFooter>
                </Card>
            ),
            componentString: `() => (
                <Card className="w-80">
                    <CardHeader className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Avatar className="ring-2 ring-secondary ring-offset-2" size="md" src={"https://i.pravatar.cc/300?u=a042581f4e29026705u"} />
                            <div className="flex flex-col">
                                <Text type="bold">John Doe</Text>
                                <Text type="mutedSmall">@johndoe12</Text>
                            </div>
                        </div>
                        <Button size="sm">Follow</Button>
                    </CardHeader>
                    <CardSeparator />
                    <CardBody>
                        Make beautiful websites with CoreUI library component.
                    </CardBody>
                    <CardSeparator />
                    <CardFooter className="flex items-center gap-5">
                        <p className="text-muted"><Text type="semibold">12</Text> Following</p>
                        <p className="text-muted"><Text type="semibold">42</Text> Followers</p>
                    </CardFooter>
                </Card>
            )`
        }
    ]
}