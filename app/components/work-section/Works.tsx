import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Glorify",
      gitLink: "https://github.com/nikhiljain37/Glorify",
      liveLink: "https://glorify-mu.vercel.app/",
      about: 
        "Engineered a full-stack web application that leverages AI to enhance and manipulate images with features like background removal, object recoloring, generative fill, and restoration. ",      
      stack: ["next.js", "typescript", "shadcn ui", "tailwindcss"],
      img: "/glorify.png",
      owner: "Nikhil Jain",
    },
    {
      title: "InfiDocs",
      gitLink: "https://github.com/nikhiljain37/InfiDocs",
      liveLink: "https://docsclone-one.vercel.app",
      about:
        "Developed a collaborative document editor for real-time team editing and content sharing. Features include rich text formatting, live sync, and PDF export, all wrapped in a responsive and intuitive interface.",
      stack: ["react.js", "socket.io", "Quill.js", "javascript"],
      img: "/infidocs.png",
      owner: "Nikhil",
    },
    {
      title: "Shortly",
      liveLink: "https://lnk-shortener.netlify.app/",
      about:
        "A link shortener for a fictional company that effectively shortens links and stores them. No matter how many links you shorten, you can revisit the site anytime to view and manage your previously shortened links.",
      stack: ["next.js", "typescript", "tailwindcss"],
      img: "/shortly.png",
      owner: "N"
    },
    {
      title: "SignEase",
      gitLink: "https://github.com/nikhiljain37/SignEase",
      liveLink: "https://signature-gold.vercel.app",
      about:
        "Formulated a user-friendly online tool for digitally signing documents and streamlining business processes. Included features like customizable signature styles and quick retrieval of saved signatures to enhance efficiency and user convenience.",
      stack: ["html", "css", "javascript"],
      img: "/signease.png",
    }
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
          owner={work.owner}
        />
      ))}

      <Timeline />
    </section>
  );
}
