"use client";
import { Header } from "@/components/site/Header";
import { Navbar } from "@/components/site/Navbar";
import { allDocs, Docs } from "@/.contentlayer/generated";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Card, CardBody } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { MDXContent } from "@/components/site/slug/MDXContent";

export default function Page() {
  const { slug } = useParams();
  const [docs, setDocs] = useState<Docs>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    const getDocs = async () => {
      const getDoc = allDocs
        .map((item) => item)
        .find((item) => item._raw.flattenedPath.split("/")[1] == slug);
      const getIndex = allDocs.findIndex(
        (item) => item._raw.flattenedPath.split("/")[1] == slug
      );
      setCurrentIndex(getIndex);
      setDocs(getDoc);
    };
    getDocs();
  }, []);
  if (!docs) return null;

  return (
    <>
      <Header />
      <Navbar>
        <section className="flex flex-col gap-8">
          <header className="flex flex-col gap-4">
            <Heading htype="h3">{docs.title}</Heading>
            <Paragraph>{docs.description}</Paragraph>
            {docs.api && (
              <Link target="_blank" href={docs.api}>
                <Button size="sm" radius="md">
                  <Icon icon={"solar:code-file-outline"} />
                  Documentation
                </Button>
              </Link>
            )}
          </header>
          <MDXContent code={docs.body.code} />
          <footer className="grid grid-col lg:grid-cols-2 gap-4">
            {allDocs[currentIndex - 1] && (
              <Link
                href={`${
                  allDocs[currentIndex - 1]?._raw.flattenedPath.split("/")[1]
                }`}
              >
                <Card className="shadow-none hover:bg-background-100 transition-all">
                  <CardBody className="flex px-3 items-center flex-row-reverse justify-between">
                    <Text type="semiboldLg">
                      {allDocs[currentIndex - 1]?.title as any}
                    </Text>
                    <Icon icon={"solar:alt-arrow-left-outline"} />
                  </CardBody>
                </Card>
              </Link>
            )}

            {allDocs[currentIndex + 1] && (
              <Link
                href={`${
                  allDocs[currentIndex + 1]._raw.flattenedPath.split("/")[1]
                }`}
              >
                <Card className="shadow-none hover:bg-background-100 transition-all">
                  <CardBody className="flex px-3 items-center justify-between">
                    <Text type="semiboldLg">
                      {allDocs[currentIndex + 1]?.title as any}
                    </Text>
                    <Icon icon={"solar:alt-arrow-right-outline"} />
                  </CardBody>
                </Card>
              </Link>
            )}
          </footer>
        </section>
      </Navbar>
    </>
  );
}
