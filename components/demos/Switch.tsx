import { Switch } from "../ui/Switch"

export const SwitchDemo = () => {
    return(
        <div className="flex flex-col gap-1">
            <Switch size="sm" />
            <Switch size="md" />
            <Switch size="lg" />
        </div>
    )
}

export const SwitchDemoString = `import { Switch } from "../ui/Switch"

export const SwitchDemo = () => {
    return(
        <Switch />
    )
}`