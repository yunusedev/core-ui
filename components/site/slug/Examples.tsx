import * as Demos from "@/components/demos/";
import { cn } from "@/components/libs/utils";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { PreviewDemo } from "./PreviewDemo";
export const Examples = ({ displayName }: { displayName: string }) => {
  const getExamples = (Demos as any)[displayName + "Config"] as {
    examples: {
      title: string;
      description: string;
      component: React.ElementType;
      componentString: string;
    }[];
  };
  return (
    <section id="examples" className="flex flex-col gap-6">
      <Heading htype="h3">Examples</Heading>
      {getExamples.examples.map((item, i) => {
        const Component = item.component;
        return (
          <div className={cn("flex flex-col gap-3 pb-6", {
            "border-b border-b-secondary": getExamples.examples.length != i+1
          })} key={i}>
            <Heading htype="h4">{item.title}</Heading>
            <Paragraph>{item.description}</Paragraph>
            <PreviewDemo fileContent={item.componentString}>
              <Component />
            </PreviewDemo>
          </div>
        );
      })}
    </section>
  );
};
