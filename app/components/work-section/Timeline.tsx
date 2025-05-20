"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import EducationTimelineItem from "./EducationTimelineItem";

const syne = Syne({ subsets: ["latin"] });

const EducationData = [
  {
      schoolLogo: "/university-logo.png", // Replace with your actual logo path
      degree: "B.Tech in CSE – IoT & Cyber Security",
      schoolName: "Lakshmi Narain College of Technology (LNCT)",
      studyType: "Full-Time",
      duration: "2021 – 2025",
      highlights: [
        "Pursuing B.Tech in CSE – IoT & Cyber Security with a current CGPA of 8.39.",
        "Built impactful full-stack projects like Glorify (AI image editor) and InfiDocs (real-time doc editor).",
        "Gained hands-on experience in web technologies including React, Next.js, TailwindCSS, and MongoDB.",
        "Completed certifications from Infosys (Frontend Dev) and Salesforce (Virtual Internship)."
      ],
    },
    {
      schoolLogo: "/genius-logo.png", // Replace with your actual logo path
      degree: "Higher Secondary Certificate (Class XII)",
      schoolName: "Genius H.S. School",
      studyType: "Science",
      duration: "2019 – 2021",
      highlights: [
        "Graduated with 81% aggregate in the Science stream.",
        "Excelled in Mathematics and Science.",
        "Built a strong foundation in logical reasoning and problem-solving."
      ],

    },
    {
      schoolLogo: "/stmarys-logo.png", // Replace with your actual logo path
      degree: "Secondary School Certificate (Class X)",
      schoolName: "St. Mary’s School",
      studyType: "CBSE",
      duration: "– 2019",
      highlights: [
        "Scored 80% aggregate in CBSE board exams.",
        "Demonstrated consistent academic performance and discipline.",
        "Active participant in extracurriculars like badminton and photography."
      ],
    },
  ];

export default function EducationTimeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title>Education</Title>

      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {EducationData.map((item, index) => (
            <EducationTimelineItem
              key={index}
              schoolLogo={item.schoolLogo}
              degree={item.degree}
              schoolName={item.schoolName}
              studyType={item.studyType}
              duration={item.duration}
              highlights={item.highlights}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
