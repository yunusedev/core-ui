import { Checkbox } from "../ui/Checkbox";
import { Label } from "../ui/Label";

export const CheckboxDemo = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox size="sm" />
        <Label>Accept terms</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox size="md" />
        <Label>Accept terms</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox size="lg" />
        <Label>Accept terms</Label>
      </div>
    </div>
  );
};


export const CheckboxDemoString = `import { Checkbox } from "../ui/Checkbox";
import { Label } from "../ui/Label";

export const CheckboxDemo = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox size="sm" />
        <Label>Accept terms</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox size="md" />
        <Label>Accept terms</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox size="lg" />
        <Label>Accept terms</Label>
      </div>
    </div>
  );
};
`

export default {
    props: [
        {
            prop: "size",
            default: "md",
            type: "sm | md | lg",
            required:false,
            description: "Size of checkbox"
        }
    ]
}