import { Highlighter } from "./Highlight"

export const CodeBlock = ({children}: {children: React.ReactNode}) => {
return(
    <>
    <Highlighter>
        {children}
    </Highlighter>
    </>
)
}