import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/Button";
import { Spinner } from "../ui/Spinner";

export const ButtonDemo = () => {
  return <Button color="foreground">button</Button>;
};

export const ButtonDemoString = `export const ButtonDemo = () => {
    return(
        <Button color="foreground">button</Button>
    )
}`;

export default {
  props: [
    {
      prop: "color",
      type: "primary | secondary | danger | foreground",
      default: "foreground",
      required: false,
      description: "The color of the button",
    },
    {
      prop: "radius",
      type: "sm | md | lg | xl | 2xl | full",
      default: "lg",
      required: false,
      description: "The corner radius of the button",
    },
    {
      prop: "variant",
      type: "solid | outline | ghost",
      default: "solid",
      required: false,
      description: "The variant of the button",
    },
    {
      prop: "size",
      type: "sm | md | lg",
      default: "md",
      required: false,
      description: "The size of the button",
    },
    {
      prop: "isIconOnly",
      type: "boolean",
      default: false,
      required: false,
      description: "The IconOnly properties of the button",
    },
  ],
  examples: [
    {
      title: "Colors",
      description: "The all colors on the button",
      component: () => (
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Button color="primary">primary</Button>
          <Button color="secondary">secondary</Button>
          <Button color="danger">danger</Button>
          <Button color="foreground">foreground</Button>
        </div>
      ),
      componentString: `() => (
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Button color="primary">primary</Button>
          <Button color="secondary">secondary</Button>
          <Button color="danger">danger</Button>
          <Button color="foreground">foreground</Button>
        </div>
      ),`
    },
    {
      title: "Variants",
      description: "The all variants on the button",
      component: () => (
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Button color="secondary">Solid</Button>
          <Button color="secondary" variant="outline">
            Outline
          </Button>
          <Button color="secondary" variant="ghost">
            Ghost
          </Button>
        </div>
      ),
      componentString: `() => (
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Button color="secondary">Solid</Button>
          <Button color="secondary" variant="outline">
            Outline
          </Button>
          <Button color="secondary" variant="ghost">
            Ghost
          </Button>
        </div>
      ),`
    },
    {
      title: "Radius",
      description: "The all corner radius on the button",
      component: () => (
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Button color="secondary" radius="sm">
            radius sm
          </Button>
          <Button color="secondary" radius="md">
            radius md
          </Button>
          <Button color="secondary" radius="lg">
            radius lg
          </Button>
          <Button color="secondary" radius="xl">
            radius xl
          </Button>
          <Button color="secondary" radius="2xl">
            radius 2xl
          </Button>
          <Button color="secondary" radius="full">
            radius full
          </Button>
        </div>
      ),
      componentString: `() => (
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Button color="secondary" radius="sm">
            radius sm
          </Button>
          <Button color="secondary" radius="md">
            radius md
          </Button>
          <Button color="secondary" radius="lg">
            radius lg
          </Button>
          <Button color="secondary" radius="xl">
            radius xl
          </Button>
          <Button color="secondary" radius="2xl">
            radius 2xl
          </Button>
          <Button color="secondary" radius="full">
            radius full
          </Button>
        </div>
      ),`
    },
    {
      title: "With Icon",
      description: "Button with icon",
      component: () => (
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Button>
            <PlusIcon />
            Add Tab
          </Button>
        </div>
      ),
      componentString: `() => (
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Button>
            <PlusIcon />
            Add Tab
          </Button>
        </div>
      ),`
    },
    {
      title: "Only Icon",
      description: "Button has only icon",
      component: () => (
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Button isIconOnly>
            <PlusIcon />
          </Button>
        </div>
      ),
      componentString: `() => (
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Button isIconOnly>
            <PlusIcon />
          </Button>
        </div>
      ),`
    },
    {
      title: "Loading",
      description: "Button with loading",
      component: () => (
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Button disabled>
            <Spinner size="sm" />
            Loading...
          </Button>
        </div>
      ),
      componentString: `() => (
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Button disabled>
            <Spinner size="sm" />
            Loading...
          </Button>
        </div>
      ),`
    },
  ],
};
