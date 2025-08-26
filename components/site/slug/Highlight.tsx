"use client";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Highlighter = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const [hasScroll, setHasScroll] = useState<boolean>(false)
  const itemRef = useRef<HTMLPreElement>(null)
  useEffect(() => {
    if(itemRef.current) {
       const hasVerticalScroll = itemRef.current.scrollHeight > itemRef.current.clientHeight;
       if(hasVerticalScroll) {
        setHasScroll(true)
       };
        };
  }, [])
  const darkTheme = {
    ...atomOneDark,
    hljs: { ...atomOneDark.hljs, background: "none" },
  };
  const lightTheme = {
    ...atomOneLight,
    hljs: { ...atomOneLight.hljs, background: "none" },
  };
  return (
    <div className="relative overflow-hidden">
    <SyntaxHighlighter
    ref={itemRef}
      language="tsx"
      wrapLines
      wrapLongLines
      customStyle={{
        maxHeight: "600px",
        fontSize: "14px",
        backgroundColor: "hsla(var(--background))",
        borderRadius: "1.75rem",
        padding: "1.25rem",
        border: "1px solid hsla(var(--secondary))"
      }}
      style={theme == "dark" ? darkTheme : lightTheme}
    >
      {children}
    </SyntaxHighlighter>
    </div>
  );
};
