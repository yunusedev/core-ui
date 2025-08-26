import { Heading } from "@/components/ui/Heading";
import { Paragraph, ParagraphStrong } from "@/components/ui/Paragraph";
export { PreviewDemo } from "./PreviewDemo"

export { AlertDialogDemo } from "../../demos"
export { AvatarDemo } from "../../demos/Avatar"
export { ButtonDemo } from "../../demos/Button"
export { DialogDemo } from "../../demos/Dialog"
export { DropdownDemo } from "../../demos/Dropdown"
export { DrawerDemo } from "../../demos/Drawer"
export { HeadingDemo } from "../../demos/Heading"
export { LabelDemo } from "../../demos/Label"
export { ParagraphDemo } from "../../demos/Paragraph"
export { SliderDemo } from "../../demos/Slider"
export { TextFieldDemo } from "../../demos/TextField"
export { CardDemo } from "../../demos/Card"
export { SwitchDemo } from "../../demos/Switch"
export { SpinnerDemo } from "../../demos/Spinner"
export { TextDemo } from "../../demos/Text"
export { TooltipDemo } from "../../demos/Tooltip"
export { SeparatorDemo } from "../../demos/Separator"
export { CollapsibleDemo } from "../../demos/Collapsible"
export { TabsDemo } from "../../demos/Tabs"
export { AccordionDemo } from "../../demos/Accordion"
export { ToggleDemo } from "../../demos/Toggle"
export { CheckboxDemo } from "../../demos/Checkbox"
export { ToggleGroupDemo } from "../../demos/ToggleGroup"
export { PropsTable } from "./PropsTable"
export { Examples } from "./Examples"
export { Customization } from "./Customization"
export {ThemingColor as ThemingColors} from "./ThemingColor"
export { AllComponents } from "./AllComponents"
export const h1 = ({ id, ...props }: any) => <h3 className="text-3xl font-bold mb-1 leading-none" {...props} />;
export const h2 = ({ id, ...props }: any) => <h4 className="text-2xl font-bold mb-1 leading-none" {...props} />;
export const h3 = ({ id, ...props }: any) => <h5 className="text-xl font-bold mb-1 leading-none" {...props} />;
export const p = ({ id, ...props }: any) => <Paragraph className="mb-4" {...props} />;
export const strong = ({ id, ...props }: any) => <ParagraphStrong {...props} />;
export const pre = ({id, ...props}:any) => <pre className="data-[line] p-5 rounded-lg dark:!bg-transparent dark:!border dark:!border-secondary !bg-foreground my-6" {...props}/>