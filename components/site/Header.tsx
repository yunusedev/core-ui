"use client";
import { Icon } from "@iconify/react";
import { Heading } from "../ui/Heading";
import nav from "@/components/json/nav_homepage.json";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Drawer, DrawerBody, DrawerTitle, DrawerTrigger } from "../ui/Drawer";
import { cn } from "../libs/utils";
import { dropdownClasses } from "../ui/Dropdown";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Dialog, DialogBody, DialogTitle, DialogTrigger } from "../ui/Dialog";
import { allDocs, Docs } from "@/.contentlayer/generated";
import allItems from "@/components/json/nav_docs.json"
import { usePathname } from "next/navigation";
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
      <div className="flex items-center gap-1.5">
        <Drawer>
          <DrawerTrigger>
            <Button
              color="secondary"
              className="flex lg:hidden"
              size="sm"
              isIconOnly
            >
              <Icon className="text-lg" icon={"solar:hamburger-menu-outline"} />
            </Button>
          </DrawerTrigger>
          <DrawerBody>
            <DrawerTitle />
            <div className="flex flex-col gap-px">
              {Object.values(allItems).map((value, i) => (
              <Link className={cn("flex items-center hover:bg-secondary rounded-lg transition gap-2 p-3", {
                "bg-secondary": pathname.slice(1) == value.href
              })} key={i} href={"/"+value.href}>
                <span className="size-8 rounded-md bg-secondary border border-secondary-200 flex items-center justify-center"><Icon icon={"solar:"+value.icon+"-outline"} /></span>
                <span className="font-medium">{value.name}</span>
              </Link>
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
          <DialogBody className="lg:w-[450px] p-0 px-0 gap-0">
            <header className="flex p-2.5 pb-0 items-center justify-center gap-3">
              <Icon icon={"solar:magnifer-outline"} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-none"
                type="text"
                placeholder="Enter text..."
              />
            </header>
            <div className="h-px w-full my-2.5 bg-secondary" />
            <section className="flex flex-col gap-0 p-2.5">
              {results.length ? (
                results.map((item, i) => (
                  <Link
                    className="p-5 hover:bg-secondary group flex items-center justify-between rounded-lg transition-all"
                    key={i}
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
            </section>
            <div className="h-px w-full my-2.5 bg-secondary" />
            <footer className="p-2.5 flex justify-end text-muted text-sm">
              yunusedev &copy; 2025
            </footer>
          </DialogBody>
        </Dialog>
        <Link target="_blank" className="hidden lg:flex" href={"https://github.com/yunusedev"}>
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
