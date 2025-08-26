"use client"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Toggle } from "../ui/Toggle"

export const ToggleDemo = () => {
    return(
        <>
        <Toggle>
            <Icon icon={"solar:text-italic-outline"} />
        </Toggle>
        </>
    )
}

export const ToggleDemoString = `"use client"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Toggle } from "../ui/Toggle"

export const ToggleDemo = () => {
    return(
        <>
        <Toggle>
            <Icon icon={"solar:text-italic-outline"} />
        </Toggle>
        </>
    )
}`

export default {
    props: [
        {
            prop: "size",
            required:false,
            default:"md",
            type: "sm | md | lg",
            description: "Size of toggle button."
        }
    ]
}