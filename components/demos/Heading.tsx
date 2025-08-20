import { Heading, HeadingProps } from "../ui/Heading"

export const HeadingDemo = () => {
    return(
        <div className="flex flex-col gap-1">
            {new Array(6).fill(0).map((_, i) => (
                <Heading key={i} htype={`h${i+1}` as HeadingProps["htype"]}>
                    Heading {i+1}
                </Heading>
            ))}
        </div>
    )
}

export const HeadingDemoString = `import { Heading, HeadingProps } from "../ui/Heading"

export const HeadingDemo = () => {
    return(
        <div className="flex flex-col gap-1">
            {new Array(5).fill(0).map((_, i) => (
                <Heading htype={"h"+i+1 as HeadingProps["htype"]}>
                    Heading {i+1}
                </Heading>
            ))}
        </div>
    )
}`