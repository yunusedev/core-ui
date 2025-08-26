import { Separator } from "../ui/Separator"

export const SeparatorDemo = ({width = "300px"}: {width?:string}) => {
    return(
        <div style={{width: width}} className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
            <span className="font-medium">Radix Primitives</span>
            <span className="text-muted text-sm">An open-source UI component library</span>
        </div>
        <Separator orientation="horizontal" />
        <div className="flex items-center gap-2 h-5">
            <span className="font-medium">Blog</span>
            <Separator orientation="vertical" />
            <span className="font-medium">Docs</span>
            <Separator orientation="vertical" />
            <span className="font-medium">Source</span>
        </div>
        </div>
    )
}

export const SeparatorDemoString = `export const SeparatorDemo = () => {
    return(
        <div className="flex flex-col gap-2 w-[300px]">
        <div className="flex flex-col gap-1">
            <span className="font-medium">Radix Primitives</span>
            <span className="text-muted text-sm">An open-source UI component library</span>
        </div>
        <Separator orientation="horizontal" />
        <div className="flex items-center gap-2 h-5">
            <span className="font-medium">Blog</span>
            <Separator orientation="vertical" />
            <span className="font-medium">Docs</span>
            <Separator orientation="vertical" />
            <span className="font-medium">Source</span>
        </div>
        </div>
    )
}`

export default {
    props: [],
    examples: []
}