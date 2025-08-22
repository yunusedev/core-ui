"use client";
import { Header } from "@/components/site/Header";
import { Navbar } from "@/components/site/Navbar";
import { allDocs, Docs } from "@/.contentlayer/generated";
import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Card, CardBody } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { MDXContent } from "@/components/site/slug/MDXContent";
import { TableOfContents } from "@/components/site/slug/TableOfContents";
import allItems from "@/components/json/nav_docs.json";
export default function Page() {
  const { slug } = useParams();
  const pathname = usePathname();
  const [docs, setDocs] = useState<Docs>();
  const [indexedDocs, setIndexedDocs] = useState<
    { name: string; href: string }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    const getDocs = () => {
      const getDoc = allDocs
        .find((item) => item._raw.flattenedPath.split("/")[1] == slug);
      const getIsAny = allItems.find((item) => {
        const get = item.items.find(
          (_) => pathname.slice(1) == "docs/" + _.href
        );
        return pathname.slice(1).includes(item.href) || get;
      });
      const getIndex = getIsAny?.items.findIndex((item) => item.href == slug);
      if (!getIsAny) return;
      if (!getIsAny.items.length) return;
      if (getIndex === -1 || getIndex == null || getIndex == undefined) return;
      setIndexedDocs(getIsAny.items);
      setCurrentIndex(getIndex);
      setDocs(getDoc);
    };
    getDocs();
  }, [slug, pathname]);
  if (!docs) return null;

  return (
    <>
      <Header />
      <Navbar>
        <section className="grid grid-col xl:grid-cols-4 grid-col-reverse gap-8">
          <section className="col-span-3 flex flex-col gap-8 mb-8">
            <header className="flex flex-col gap-3">
              <Heading htype="h2">{docs.title}</Heading>
              <Paragraph>{docs.description}</Paragraph>
              {docs.api && (
                <Link target="_blank" href={docs.api}>
                  <Button
                    className="font-medium"
                    color="secondary"
                    size="sm"
                    radius="md"
                  >
                    <Icon icon={"solar:magnet-outline"} />
                    API Reference
                  </Button>
                </Link>
              )}
            </header>
            <MDXContent code={docs.body.code} />
            <footer className="grid grid-col lg:grid-cols-2 gap-4">
              {indexedDocs[currentIndex - 1] && (
                <Link
                  href={`${indexedDocs[currentIndex - 1]?.href}`}
                >
                  <Card className="shadow-none hover:bg-background-100 transition-all">
                    <CardBody className="flex px-3 items-center flex-row-reverse justify-between">
                      <Text type="semiboldLg">
                        {indexedDocs[currentIndex - 1]?.name as string}
                      </Text>
                      <Icon icon={"solar:alt-arrow-left-outline"} />
                    </CardBody>
                  </Card>
                </Link>
              )}

              {indexedDocs[currentIndex + 1] && (
                <Link href={`${indexedDocs[currentIndex + 1].href}`}>
                  <Card className="shadow-none hover:bg-background-100 transition-all">
                    <CardBody className="flex px-3 items-center justify-between">
                      <Text type="semiboldLg">
                        {indexedDocs[currentIndex + 1]?.name as string}
                      </Text>
                      <Icon icon={"solar:alt-arrow-right-outline"} />
                    </CardBody>
                  </Card>
                </Link>
              )}
            </footer>
          </section>
          <section className="hidden xl:flex">
            <TableOfContents title={docs.title as string} />
          </section>
        </section>
      </Navbar>
    </>
  );
}
