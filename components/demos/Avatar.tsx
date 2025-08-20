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
