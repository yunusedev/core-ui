"use client";
import * as Demos from "@/components/demos/";
import { TabsList, Tabs, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { useState } from "react";
import { CodeBlock } from "./CodeBlock";

export const PreviewDemo = ({
  children,
  displayName,
  fileContent
}: {
  children: React.ReactNode;
  displayName?: string;
  fileContent?:string;
}) => {
  const [value, setValue] = useState<string>("preview");
  const fileCode = (Demos as any)[displayName + "String"];
  return (
    <>
      <Tabs value={value} onValueChange={setValue}>
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="w-full min-h-96 rounded-lg mb-6 border border-secondary flex justify-center items-center p-4">
            {children}
          </div>
        </TabsContent>
        <TabsContent value="code" className="mb-6">
          <CodeBlock>{displayName ? fileCode : fileContent}</CodeBlock>
        </TabsContent>
      </Tabs>
    </>
  );
};
