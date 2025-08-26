"use client"
import { Icon } from "@iconify/react/dist/iconify.js"
import { ToggleGroup, ToggleGroupItem } from "../ui/ToggleGroup"

export const ToggleGroupDemo = () => {
    return(
        <ToggleGroup type="single">
            <ToggleGroupItem value="italic"><Icon icon={"solar:text-italic-outline"} /></ToggleGroupItem>
            <ToggleGroupItem value="bold"><Icon icon={"solar:text-bold-outline"} /></ToggleGroupItem>
            <ToggleGroupItem value="underline"><Icon icon={"solar:text-underline-outline"} /></ToggleGroupItem>
        </ToggleGroup>
    )
}

export const ToggleGroupDemoString = `"use client"
import { Icon } from "@iconify/react/dist/iconify.js"
import { ToggleGroup, ToggleGroupItem } from "../ui/ToggleGroup"

export const ToggleGroupDemo = () => {
    return(
        <ToggleGroup type="single">
            <ToggleGroupItem value="italic"><Icon icon={"solar:text-italic-outline"} /></ToggleGroupItem>
            <ToggleGroupItem value="bold"><Icon icon={"solar:text-bold-outline"} /></ToggleGroupItem>
            <ToggleGroupItem value="underline"><Icon icon={"solar:text-underline-outline"} /></ToggleGroupItem>
        </ToggleGroup>
    )
}`

export default {}