"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import {
  SiBootstrap,
  SiCsharp,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

export default function skills() {
  const skills = [
    {
      text: "ReactJS",
      Icon: SiReact,
    },
    {
      text: "Next.JS",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind CSS",
      Icon: SiTailwindcss, // Add your Tailwind CSS icon here
    },
    {
      text: "JavaScript",
      Icon: SiJavascript, // Add your JavaScript icon here
    },
    {
      text: "Node.JS",
      Icon: SiNodedotjs, // Add your HTML icon here
    },
    {
      text: "Bootstrap",
      Icon: SiBootstrap, // Add your HTML icon here
    },
    {
      text: "C#",
      Icon: SiCsharp, // Add your HTML icon here
    },
    {
      text: "Superbase",
      Icon: SiSupabase, // Add your HTML icon here
    },
    {
      text: "Git",
      Icon: SiGit, // Add your HTML icon here
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪 "
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
