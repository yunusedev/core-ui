"use client"
import { useTheme } from "next-themes";
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const Highlighter = ({children}:{children:React.ReactNode}) => {
    const { theme } = useTheme()
    return(
        <SyntaxHighlighter language="typescript" wrapLines wrapLongLines customStyle={{borderRadius: "1.25rem !important", padding: "1.25rem"}} style={theme == "dark" ? atomOneDark : atomOneLight}>{children}</SyntaxHighlighter>
    )
};  