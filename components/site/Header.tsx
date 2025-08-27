"use client";
import { Icon } from "@iconify/react";
import { Heading } from "../ui/Heading";
import nav from "@/components/json/nav_homepage.json";
import Link from "next/link";
import { Button } from "../ui/Button";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/Drawer";
import { cn } from "../libs/utils";
import { dropdownClasses } from "../ui/Dropdown";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  DialogSection,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import { allDocs, Docs } from "@/.contentlayer/generated";
import allItems from "@/components/json/nav_docs.json";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "../ui/Accordion";
import { Separator } from "../ui/Separator";
export const Header = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Docs[]>([]);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (search.length < 2) {
      setResults([]);
      return;
    }
    const getComponents = allDocs.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setResults(getComponents);
  }, [search]);
  return (
    <header
      ref={headerRef}
      className={cn(
        "centerBox py-top sticky top-0 z-[10] flex items-center justify-between",
        { "bg-background/50 backdrop-blur-md": isScrolled }
      )}
    >
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
      <div className="flex items-center gap-2">
        <Drawer>
          <DrawerTrigger>
            <Button color="secondary" className="flex lg:hidden" isIconOnly>
              <Icon className="text-lg" icon={"solar:hamburger-menu-outline"} />
            </Button>
          </DrawerTrigger>
          <DrawerBody>
            <DrawerTitle />
            <div className="flex flex-col gap-2">
              {Object.values(allItems).map((value, i) => (
                <Accordion type="multiple" className="w-full" key={i}>
                  <AccordionItem value={i.toString()}>
                    <AccordionTrigger>
                      <p
                        className={cn(
                          "flex items-center rounded-lg transition gap-2 p-1"
                        )}
                        key={i}
                      >
                        <span className="size-8 rounded-md bg-secondary border border-secondary-200 flex items-center justify-center">
                          <Icon icon={"solar:" + value.icon + "-outline"} />
                        </span>
                        <span className="font-medium">{value.name}</span>
                      </p>
                    </AccordionTrigger>
                    <AccordionContent className="overflow-auto">
                      <div className="flex flex-col gap-0 w-full">
                        {value.items.map((item, i) => (
                          <Link
                            className="w-full flex justify-between items-center hover:bg-secondary transition rounded-lg p-3"
                            key={i}
                            href={"/docs/" + item.href}
                          >
                            <span className="text-foreground font-medium">
                              {item.name}
                            </span>
                            {item.new == true && (
                              <span className="p-1.5 px-2 text-xs text-muted bg-primary/15 rounded-full">
                                NEW
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </DrawerBody>
        </Drawer>
        <Dialog>
          <DialogTrigger>
            <Button isIconOnly color="secondary">
              <Icon icon={"solar:magnifer-outline"} />
            </Button>
          </DialogTrigger>
          <DialogTitle className="hidden" />
          <DialogBody className="lg:w-lg p-0 px-0 gap-0">
            <DialogHeader className="flex flex-row p-2.5 pb-0 gap-3">
              <div className="flex items-center gap-2 w-full">
                <Icon icon={"solar:magnifer-outline"} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-none"
                type="text"
                placeholder="Enter text..."
              />
              </div>
            </DialogHeader>
            <Separator orientation="horizontal" className="my-2.5" />
              <DialogSection className="flex w-full items-center justify-center flex-col p-2">
                {results.length ? (
                results.map((item, i) => (
                    <Link
                    key={i}
                      className="p-5 w-full hover:bg-secondary group flex items-center justify-between rounded-lg transition-all"
                      href={"/docs/" + item._raw.flattenedPath.split("/")[1]}
                    >
                      <div className="flex items-center gap-3">
                        <span className="size-10 rounded-lg text-muted group-hover:bg-secondary-200 transition items-center bg-secondary justify-center flex">
                          <Icon icon={"solar:file-outline"} />
                        </span>
                        <div className="flex flex-col leading-none gap-1">
                          <span className="font-medium text-foreground">
                            {item.title}
                          </span>
                          <span className="text-muted text-sm">
                            {item.description.slice(0, 40)}...
                          </span>
                        </div>
                      </div>
                      <div>
                        <Icon icon={"solar:alt-arrow-right-outline"} />
                      </div>
                    </Link>
                ))
              ) : (
                <p className="text-center text-muted">Not results found.</p>
              )}
              </DialogSection>
            <div className="h-px w-full my-2.5 bg-secondary" />
            <footer className="p-2.5 flex justify-end text-muted text-sm">
              yunusedev &copy; 2025
            </footer>
          </DialogBody>
        </Dialog>
        <Link
          target="_blank"
          className="hidden lg:flex"
          href={"https://github.com/yunusedev"}
        >
          <Button color="secondary" isIconOnly>
            <Icon
              className="text-base dark:invert"
              icon={"logos:github-icon"}
            />
          </Button>
        </Link>
        <Button
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          color="secondary"
          className="hidden lg:flex items-center justify-center flex"
          isIconOnly
        >
          <Icon
            className="text-base"
            icon={`solar:${theme == "dark" ? "moon" : "sun"}-outline`}
          />
        </Button>
      </div>
    </header>
  );
};
