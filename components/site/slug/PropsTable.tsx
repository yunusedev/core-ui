import { Heading } from "@/components/ui/Heading";
import * as Props from "@/components/demos";
import { cn } from "@/components/libs/utils";
import { Icon } from "@iconify/react/dist/iconify.js";

export const PropsTable = ({ displayName }: { displayName: string }) => {
    const getProps = (Props as any)[displayName + "Config"] as { props: {prop: string, type: string, default: any, required: boolean, description: string}[] };

  return (
    <section className="flex flex-col gap-4 mb-6">
      <Heading htype="h3">API Reference</Heading>
      <div className="border rounded-lg border-secondary">
        <table className="w-full table-fixed m-0">
        <thead>
            <tr className="border-b border-b-secondary">
            <th className="p-3 px-3 text-left font-semibold">Prop</th>
            <th className="p-3 px-3 text-left font-semibold">Type</th>
            <th className="p-3 px-3 text-left font-semibold">Default</th>
            </tr>
        </thead>
        <tbody>
            {getProps.props.map((item, i) => (
                <tr className={cn("", {
                    "bg-background-200": i % 2 == 0,
                })} key={i}>
                    <td className={cn("p-2.5 px-3 text-muted", {"rounded-bl-lg": getProps.props.length == i+1})}>
                        <span className="flex items-center gap-2">{item.prop} <span className="hover:bg-secondary-100 size-7 flex items-center justify-center transition rounded-md"><Icon icon={"solar:info-circle-outline"} /></span></span>
                    </td>
                    <td className="flex p-2.5 max-h-32 flex flex-wrap items-center gap-1">
                        {item.type.split(" | ").map((item, i) => (
                            <span className="p-0.5 px-2 text-[14px] text-foreground bg-secondary rounded-lg" key={i}>{item}</span>
                        ))}
                    </td>
                    <td className={cn("p-2.5 px-3 text-muted", {"rounded-br-lg": getProps.props.length == i+1})}><span className="p-0.5 px-2 text-[14px] text-foreground bg-secondary rounded-lg">{`${item.default}`}</span></td>
                </tr>
            ))}
        </tbody>
      </table>
      </div>
    </section>
  );
};
