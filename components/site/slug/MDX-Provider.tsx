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
export { PropsTable } from "./PropsTable"
export { Examples } from "./Examples"
export const h1 = ({ id, ...props }: any) => <Heading htype="h3" className="mb-3" {...props} />;
export const h2 = ({ id, ...props }: any) => <Heading htype="h4" className="mb-3" {...props} />;
export const h3 = ({ id, ...props }: any) => <Heading htype="h5" className="mb-3" {...props} />;
export const p = ({ id, ...props }: any) => <Paragraph {...props} />;
export const strong = ({ id, ...props }: any) => <ParagraphStrong {...props} />;
