import { Avatar } from "../ui/Avatar";

export const AvatarDemo = () => {
  return (
    <div className="flex items-center gap-2">
      <Avatar
        size="sm"
        src={"https://i.pravatar.cc/300?u=a042581f4e29026705a"}
      />
      <Avatar
        size="md"
        src={"https://i.pravatar.cc/300?u=a042581f4e29026705b"}
      />
      <Avatar
        size="lg"
        src={"https://i.pravatar.cc/300?u=a042581f4e29026705c"}
      />
      <Avatar size="xl" src={"none"} />
      <Avatar
        size="2xl"
        src={"https://i.pravatar.cc/300?u=a042581f4e29026705d"}
      />
      <Avatar
        size="3xl"
        src={"https://i.pravatar.cc/300?u=a042581f4e29026705e"}
      />
    </div>
  );
};

export const AvatarDemoString = `import { Avatar } from "../ui/Avatar"

export const AvatarDemo = () => {
    return(
        <div className="flex items-center gap-2"> 
            <Avatar size="sm" src={"https://i.pravatar.cc/300?u=a042581f4e29026705a"} />
            <Avatar size="md" src={"https://i.pravatar.cc/300?u=a042581f4e29026705b"} />
            <Avatar size="lg" src={"https://i.pravatar.cc/300?u=a042581f4e29026705c"} />
            <Avatar size="xl" src={"none"} />
            <Avatar size="2xl" src={"https://i.pravatar.cc/300?u=a042581f4e29026705d"} />
            <Avatar size="3xl" src={"https://i.pravatar.cc/300?u=a042581f4e29026705e"} />
        </div>
    )
}`;

export default {
  props: [
    {
      prop: "src",
      type: "string",
      default: null,
      required: false,
      description: "Image source link"
    },
    {
      prop: "size",
      type: "sm | md | lg | xl | 2xl | 3xl",
      default: "md",
      required: false,
      description: "Image size"
    },
    {
      prop: "fallback",
      type: "string",
      default: "UI",
      required: false,
      description: "If image is not loading or no image, It's block"
    }
  ]
}