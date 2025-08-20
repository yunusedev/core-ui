import { useMDXComponent } from "next-contentlayer2/hooks";
import * as MDXProvider from "./MDX-Provider";

export const MDXContent = ({code, ...props}: {code:string;}) => {
    const Component = useMDXComponent(code)
    return(
        <div className="flex flex-col gap-2">
        {Component && <Component components={MDXProvider} {...props}/>}
        </div>
    )
}