import * as Demos from "@/components/demos/";
import { cn } from "@/components/libs/utils";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
export const Examples = ({ displayName }: { displayName: string }) => {
  const getExamples = (Demos as any)[displayName + "Config"] as {
    examples: {
      title: string;
      description: string;
      component: React.ElementType;
      import: string;
    }[];
  };
  return (
    <section className="flex flex-col gap-6">
      <Heading htype="h3">Examples</Heading>
      {getExamples.examples.map((item, i) => {
        const Component = item.component;
        return (
          <div className={cn("flex flex-col gap-3 pb-6", {
            "border-b border-b-secondary": getExamples.examples.length != i+1
          })} key={i}>
            <Heading htype="h4">{item.title}</Heading>
            <Paragraph>{item.description}</Paragraph>
            <div className="w-full h-96 px-2 rounded-lg flex items-center justify-center border border-secondary">
              <Component />
            </div>
          </div>
        );
      })}
    </section>
  );
};
