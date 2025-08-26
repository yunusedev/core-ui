import { useState } from "react";
import { TextField } from "../ui/TextField";

export const TextFieldDemo = () => {
  return <TextField className="w-80" />;
};

export const TextFieldDemoString = `import { TextField } from "../ui/TextField"

export const TextFieldDemo = () => {
    return(
        <TextField />
    )
}`;

export default {
  props: [
    {
      prop: "inputsize",
      default: "md",
      required: false,
      type: "sm | md | lg",
      description: "The size of input",
    },
    {
      prop: "label",
      default: null,
      required: false,
      type: "string",
      description: "The label of input",
    },
    {
      prop: "description",
      default: null,
      required: false,
      type: "string",
      description: "The description of input",
    },
    {
      prop: "errorLabel",
      default: null,
      required: false,
      type: "string",
      description: "The Error Label of input",
    },
    {
      prop: "errorDescription",
      default: null,
      required: false,
      type: "string",
      description: "The Error Description of input",
    },
  ],
  examples: [
    {
      title: "With Label",
      description: "Input with label",
      component: () => (
        <TextField className="w-80" label="Full Name" placeholder="Full Name" />
      ),
      componentString: `() => (
        <TextField className="w-80" label="Full Name" placeholder="Full Name" />
      ),`
    },
    {
      title: "With Label And Description",
      description: "Input with label and description",
      component: () => (
        <TextField
          className="w-80"
          description="Enter your full name"
          label="Full Name"
          placeholder="Full Name"
        />
      ),
      componentString: `() => (
        <TextField
          className="w-80"
          description="Enter your full name"
          label="Full Name"
          placeholder="Full Name"
        />
      ),`
    },
    {
      title: "Error Text Field",
      description: "The error text field",
      component: () => {
        const [value, setValue] = useState<string>("");
        return (
          <TextField
            value={value}
            onChange={e => setValue(e.target.value)}
            errorLabel={value.length > 10 ? "Error Text" : null}
            errorDescription={value.length > 10 ? "Error description" : null}
            className="w-80"
            description="Length > 10 = error"
            label="Full Name"
            placeholder="Full Name"
          />
        );
      },
      componentString: `() => {
        const [value, setValue] = useState<string>("");
        return (
          <TextField
            value={value}
            onChange={e => setValue(e.target.value)}
            errorLabel={value.length > 10 ? "Error Text" : null}
            errorDescription={value.length > 10 ? "Error description" : null}
            className="w-80"
            description="Length > 10 = error"
            label="Full Name"
            placeholder="Full Name"
          />
        );
      },`
    },
  ],
};
