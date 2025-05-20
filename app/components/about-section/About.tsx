/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        Coding my way into the future
      </AnimatedTitle>
      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Hi, I&apos;m Nikhil Jain — a passionate full-stack developer and soon-to-be Computer Science Graduate.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Since writing my first lines of code in late 2021, I&apos;ve been consistently 
            improving my development skills—diving deeper into full-stack web development 
            and tackling increasingly complex challenges to ensure continuous growth.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            Every project brings its own set of challenges, and I make it a point to learn and grow from each one. 
            I always strive to give my best and deliver solutions that users enjoy and find genuinely helpful. 
            Want to know more? 
            Here&apos;s <br className="hidden md:block" />
            <Link
              className="underline"
              href={
                "https://docs.google.com/document/d/1G2M117EpH3abjz7lgwsTpOrVdcfqzS85jSXScrsxAx0/edit?usp=sharing"
              }
            >
              my résumè
            </Link>
            .
          </AnimatedBody>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Languages
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Java, JavaScript, TypeScript, HTML5, CSS3/SCSS, SQL.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frameworks & Libraries 
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              React.js, Next.js, TailwindCSS, Chakra UI, Framer Motion, MongoDB.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Developer & Design Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Git/GitHub, VS Code, Figma, UI Design, Prototyping.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
