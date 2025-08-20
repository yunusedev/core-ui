"use client";
import { Header } from "@/components/site/Header";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="flex flex-col items-center centerBox">
        {/* HeroSection */}
        <div className="flex flex-col gap-5 text-center lg:w-xl pt-32">
          <Heading className="" htype="h2">
            Speed up your UI development with CoreUI's modular components.
          </Heading>
          <Paragraph>
            CoreUI's modular components help you build responsive, scalable UI's
            faster, with reusable elements designed for consistency and
            performance.
          </Paragraph>
          <div className="flex justify-center">
            <Link href={"/docs/button"}>
              <Button
                color="foreground"
                className="w-full lg:w-fit"
                radius="full"
                size="md"
              >
                Components
                <span>-&gt;</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
