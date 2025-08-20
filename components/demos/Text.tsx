import { Text } from "../ui/Text"

export const TextDemo = () => {
    return(
        <div className="flex flex-col gap-1">
            <Text type="bold">Full Name</Text>
            <Text type="boldSmall">Full Name</Text>
            <Text type="semibold">Full Name</Text>
            <Text type="semiboldLg">Full Name</Text>
            <Text type="muted">@yunusedev21</Text>
            <Text type="mutedSmall">@yunusedev21</Text>
        </div> 
    )
}

export const TextDemoString = `import { Text } from "../ui/Text"

export const TextDemo = () => {
    return(
        <div className="flex flex-col gap-1">
            <Text type="bold">Full Name</Text>
            <Text type="boldSmall">Full Name</Text>
            <Text type="semibold">Full Name</Text>
            <Text type="semiboldLg">Full Name</Text>
            <Text type="muted">@yunusedev21</Text>
            <Text type="mutedSmall">@yunusedev21</Text>
        </div> 
    )
}`