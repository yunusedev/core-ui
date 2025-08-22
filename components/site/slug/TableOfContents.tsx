"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const TableOfContents = ({title}:{title:string}) => {
  const [contents, setContents] = useState<
    { title: string; id: string; depth: string }[]
  >([]);
  const getHeadings = () => {
    if (!document || !document.body) null;
    const headers = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"));
    if (!headers.length) return;
    const getContents = headers.map((item) => ({
      title: item.textContent,
      depth: parseInt(item.tagName[1]),
      id: item.id,
    })).filter(item => item.title != "@core/ui" && item.title != title);
    setContents(getContents as any);
  };

  useEffect(() => {
    getHeadings()
  }, [])
  if(contents.length == 0) return;
  return(
    <div className="flex flex-col gap-3">
    <span className="text-muted">On This Page</span>
    <div className="flex flex-col gap-0.5 px-2">
        {contents.map((item, id) => (
        <Link className="text-muted font-medium hover:text-foreground" key={id} href={"#"+item.id}>{item.title}</Link>
    ))}
    </div>
    </div>
  )
};
