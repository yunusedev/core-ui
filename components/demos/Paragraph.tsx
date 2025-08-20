import { Paragraph, ParagraphAnchor, ParagraphStrong } from "../ui/Paragraph"

export const ParagraphDemo = () => {
    return(
        <div className="flex justify-center items-center">
            <Paragraph className="max-w-sm">Lorem ipsum, dolor sit amet consectetur adipisicing <ParagraphStrong>elit</ParagraphStrong>. Possimus assumenda animi eveniet eos consequuntur? Cupiditate explicabo beatae <ParagraphAnchor href={"#"}>quidem</ParagraphAnchor>, neque facere veritatis necessitatibus a eum, quibusdam iste aliquid unde placeat non.</Paragraph>
        </div>
    )
}

export const ParagraphDemoString = `import { Paragraph, ParagraphAnchor, ParagraphStrong } from "../ui/Paragraph"

export const ParagraphDemo = () => {
    return(
        <div className="">
            <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing <ParagraphStrong>elit</ParagraphStrong>. Possimus assumenda animi eveniet eos consequuntur? Cupiditate explicabo beatae <ParagraphAnchor href={"#"}>quidem</ParagraphAnchor>, neque facere veritatis necessitatibus a eum, quibusdam iste aliquid unde placeat non.</Paragraph>
        </div>
    )
}`