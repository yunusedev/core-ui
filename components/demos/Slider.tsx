import { Slider } from "../ui/Slider"

export const SliderDemo = () => {
    return(
        <Slider defaultValue={[25]} step={1} max={100} />
    )
}

export const SliderDemoString = `import { Slider } from "../ui/Slider"

export const SliderDemo = () => {
    return(
        <Slider defaultValue={[25]} step={1} max={100} />
    )
}`

export default {
    examples: [
        {
            title: "Slider with multiple ranges",
            description: "Slider with multiple ranges",
            component: () => (
                <Slider
                defaultValue={[10, 50]}
                step={1}
                max={100}
                />
            ),
            componentString: `() => (
                <Slider
                defaultValue={[10, 50]}
                step={1}
                max={100}
                />
            )`
        }
    ]
}