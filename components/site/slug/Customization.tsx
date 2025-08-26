"use client";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Label } from "@/components/ui/Label";
import { Paragraph, ParagraphAnchor } from "@/components/ui/Paragraph";
import { Slider } from "@/components/ui/Slider";
import { Switch } from "@/components/ui/Switch";
import { TextField } from "@/components/ui/TextField";
import { useState } from "react";
import {
  CheckboxDemo,
  CollapsibleDemo,
  SeparatorDemo,
  TabsDemo,
} from "./MDX-Provider";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/Separator";

export const Customization = () => {
  const [slider, setSlider] = useState<number[]>([0.625]);
  return (
    <div className="grid grid-col xl:grid-cols-2 gap-4">
      <div className="space-y-4">
        <div className="border border-secondary rounded-lg h-48 flex items-center justify-center gap-2 flex-wrap">
          <Button>Solid</Button>
          <Button variant="outline" color="secondary">
            Outline
          </Button>
          <Button variant="ghost" color="secondary">
            Ghost
          </Button>
        </div>
        <div className="flex flex-col gap-5 border border-secondary p-8 rounded-lg">
          <header>
            <Heading htype="h6">Sign In</Heading>
          </header>
          <section className="flex flex-col gap-4">
            <TextField label="Email" />
            <TextField label="Password" />
          </section>
          <section className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Switch />
              <Label>Accept terms</Label>
            </div>
            <Paragraph>
              <ParagraphAnchor
                className="text-foreground font-medium"
                href={"#"}
              >
                Forgot password?
              </ParagraphAnchor>
            </Paragraph>
          </section>
          <footer>
            <Button className="w-full">Sign In</Button>
          </footer>
        </div>
        <Card className="">
          <CardHeader className="flex items-start justify-between">
            <div className="flex flex-col gap-4">
              <Avatar
                size="xl"
                src={"https://i.pravatar.cc/150?u=a042581f4e29026704d"}
              />
              <div className="flex flex-col gap-1 leading-none">
                <span className="font-medium">Robin Morgan</span>
                <span className="text-muted">@robinmorgan</span>
              </div>
            </div>
            <Button radius="full">Follow</Button>
          </CardHeader>
          <CardBody>
            <Paragraph>
              Hello! My name is Robin. I am the engineer. I always playing
              volleyball and sing a song.
            </Paragraph>
          </CardBody>
          <CardFooter className="flex items-center gap-2">
            <span className="text-muted">
              <span className="text-foreground font-medium">1.124</span>{" "}
              Followers
            </span>
            <span className="text-muted">
              <span className="text-foreground font-medium">102</span> Following
            </span>
          </CardFooter>
        </Card>
      </div>
      <div className="space-y-4">
        <div className="h-56 border border-secondary rounded-lg flex flex-col items-center gap-2 justify-center">
          <Slider
            value={slider}
            onValueChange={setSlider}
            defaultValue={[0.625]}
            max={1}
            step={0.125}
          />
          <span className="text-muted">Value: {slider}</span>
        </div>
        <CollapsibleDemo />
        <div className="h-56 p-8 rounded-lg border border-secondary flex-wrap flex items-center justify-center gap-2">
          <SeparatorDemo width="100%" />
        </div>
        <div className="flex flex-col gap-4 py-5 px-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar
                className="ring ring-offset-2 ring-muted"
                src={"https://i.pravatar.cc/150?u=a042581f4e29026704d"}
              />
              <div className="flex flex-col leading-none gap-1">
                <span className="font-semibold text-foreground">
                  Robin Morgan
                </span>
                <span className="text-muted">@robinmorgan</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 px-2 rounded-md text-sm bg-secondary text-muted">
                Admin
              </span>
              <Button variant="ghost" isIconOnly size="sm" color="secondary">
                <DotsVerticalIcon />
              </Button>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar
                className="ring ring-offset-2 ring-muted"
                src={"https://i.pravatar.cc/150?u=a342581f4e19026704d"}
              />
              <div className="flex flex-col leading-none gap-1">
                <span className="font-semibold text-foreground">John Doe</span>
                <span className="text-muted">@johndoe3</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 px-2 rounded-md text-sm bg-secondary text-muted">
                User
              </span>
              <Button variant="ghost" isIconOnly size="sm" color="secondary">
                <DotsVerticalIcon />
              </Button>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar
                className="ring ring-offset-2 ring-muted"
                src={"https://i.pravatar.cc/150?u=a042581f4e29021704d"}
              />
              <div className="flex flex-col leading-none gap-1">
                <span className="font-semibold text-foreground">
                  Kotlin Java
                </span>
                <span className="text-muted">@kotlinjava</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 px-2 rounded-md text-sm bg-secondary text-muted">
                CEO
              </span>
              <Button variant="ghost" isIconOnly size="sm" color="secondary">
                <DotsVerticalIcon />
              </Button>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar
                className="ring ring-offset-2 ring-muted"
                src={"https://i.pravatar.cc/150?u=a042581e4e29026704d"}
              />
              <div className="flex flex-col leading-none gap-1">
                <span className="font-semibold text-foreground">
                  React Totti
                </span>
                <span className="text-muted">@reacttotti</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 px-2 rounded-md text-sm bg-secondary text-muted">
                Founder
              </span>
              <Button variant="ghost" isIconOnly size="sm" color="secondary">
                <DotsVerticalIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
