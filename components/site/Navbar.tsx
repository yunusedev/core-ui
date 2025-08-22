"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../libs/utils";
import allItems from "@/components/json/nav_docs.json";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [getItems, setGetItems] = useState<{ name: string; href: string }[]>(
    []
  );
  const pathname = usePathname();
  const getAllItems = () => {
    const getIsAny = allItems.find((item) => {
      const get = item.items.find((_) => pathname.slice(1).includes(_.href));
      return pathname.slice(1).includes(item.href) || get;
    });
    if (!getIsAny) return;
    setGetItems(getIsAny?.items);
  };
  useEffect(() => {
    getAllItems();
  }, []);
  return (
    <>
      <nav className="centerBoxMx hidden lg:flex pt-top flex flex-col overflow-y-auto max-h-[85vh] fixed gap-6 w-80">
        <div className="flex flex-col gap-px">
          {allItems.map((item, i) => (
            <Link
              key={i}
              className={cn(
                "group p-1 px-2 flex items-center gap-3 rounded-lg hover:text-foreground text-muted font-medium transition",
                {
                  "text-foreground":
                    pathname.split("/")[2] == item.href.split("/")[1] ||
                    item.items.find((_) => pathname.slice(1).includes(_.href)),
                }
              )}
              href={"/" + item.href}
            >
              <span
                className={cn(
                  "size-8 group-hover:bg-background-700 text-foreground rounded-md bg-secondary border border-secondary-200 flex items-center justify-center",
                  {
                    "bg-foreground border-none text-background group-hover:bg-foreground/85":
                      pathname.split("/")[2] == item.href.split("/")[1] ||
                      item.items.find((_) =>
                        pathname.slice(1).includes(_.href)
                      ),
                  }
                )}
              >
                <Icon icon={"solar:" + item.icon + "-outline"} />
              </span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-px">
          {getItems.map((item, i) => (
            <Link
              className={cn(
                "p-2 px-3 text-muted hover:bg-secondary font-medium hover:text-foreground rounded-lg transition",
                {
                  "bg-secondary text-foregound": pathname
                    .slice(1) == ("docs/"+item.href),
                }
              )}
              href={item.href}
              key={i}
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      <main className="lg:ml-[425px] 2xl:ml-[500px] ml-container-mobile mr-container-mobile 2xl:mr-container mt-12">
        {children}
      </main>
    </>
  );
};
