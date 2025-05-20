"use client";
import Image from "next/image";
import React from "react";
import styles from "./TimelineItem.module.css";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";

export default function EducationTimelineItem({
  schoolLogo,
  degree,
  schoolName,
  studyType,
  duration,
  highlights,
}: {
  schoolLogo: string;
  degree: string;
  schoolName: string;
  studyType: string;
  duration: string;
  highlights: string[];
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-60px 0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 relative duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <Image
        src="/position-icon.svg"
        width={24}
        height={24}
        alt="timeline-icon"
        className="absolute -translate-x-[29px] sm:-translate-x-8 left-0"
      />

      <div className="grid grid-cols-5 sm:flex items-start gap-4 pl-4">
        <Image
          src={schoolLogo}
          width={70}
          height={70}
          alt="school-logo"
          className="col-span-1"
        />

        {/* TEXT CONTENT */}
        <div className={`${styles.timeline} col-span-4`}>
          <div className="leading-tight">
            <h1 className="text-2xl sm:text-[2rem] font-bold">{degree}</h1>
            <p className="text-base sm:text-lg font-bold my-2 sm:my-3">
              {schoolName} | {studyType}
            </p>
          </div>
          <p className="text-base sm:text-lg text-white/60 my-3">{duration}</p>

          <ul>
            {highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
