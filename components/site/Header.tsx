"use client";
import { Icon } from "@iconify/react";
import { Heading } from "../ui/Heading";
import nav from "@/components/json/nav_homepage.json";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Drawer, DrawerBody, DrawerTitle, DrawerTrigger } from "../ui/Drawer";
import { cn } from "../libs/utils";
import { dropdownClasses } from "../ui/Dropdown";
export const Header = () => {
  return (
    <header className="centerBox py-top sticky top-0 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href={"/"} className="flex items-center gap-2">
          <Icon className="text-2xl" icon={"solar:box-minimalistic-outline"} />
          <Heading htype="h5" className="font-black">
            @core/ui
          </Heading>
        </Link>
        <nav className="flex items-center gap-6 hidden lg:flex">
          {nav.map(({ name, href, soon }, i) => (
            <Link
              key={i}
              className="font-medium group flex items-center gap-2 text-muted hover:text-foreground transition"
              href={href}
            >
              <span>{name}</span>
              {soon && (
                <span className="text-xs bg-secondary rounded-md group-hover:bg-secondary-100 transition p-1 px-2 text-muted font-semibold">
                    SOON
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <Drawer>
          <DrawerTrigger>
        <Button className="flex lg:hidden" size="sm" isIconOnly><Icon className="text-lg" icon={"solar:hamburger-menu-outline"} /></Button>
          </DrawerTrigger>
          <DrawerBody>
            <DrawerTitle />
            <Link href={"/docs/introduction"} className={cn(dropdownClasses.item)}><span>Docs</span></Link>
            <Link href={"/docs/button"} className={cn(dropdownClasses.item)}><span>Components</span></Link>
            <Link href={"#"} className={cn(dropdownClasses.item)}><span>Customization</span> <span className="text-xs p-1.5 bg-secondary rounded-full px-3 text-muted font-medium">SOON</span></Link>
          </DrawerBody>
        </Drawer>
        <Link className="hidden lg:flex" href={"https://github.com/yunusedev"}>
          <Button isIconOnly size="sm">
            <Icon className="text-base" icon={"logos:github-icon"} />
          </Button>
        </Link>
        <Button className="hidden lg:flex items-center justify-center flex" isIconOnly size="sm">
          <Icon className="text-base" icon={"solar:moon-outline"} />
        </Button>
      </div>
    </header>
  );
};
