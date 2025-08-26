import { PlusIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/Button"
import { Tooltip } from "../ui/Tooltip"

export const TooltipDemo = () => {
    return(
        <Tooltip content="hello world">
            <Button isIconOnly><PlusIcon /></Button>
        </Tooltip>
    )
}
export const TooltipDemoString = `export const TooltipDemo = () => {
    return(
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button isIconOnly>
                        <PlusIcon />
                    </Button>
                </TooltipTrigger>
                <TooltipBody>
                    <span>hello world</span>
                </TooltipBody>
            </Tooltip>
        </TooltipProvider>
    )
}`

export default {
    props: [],
    examples: []
}