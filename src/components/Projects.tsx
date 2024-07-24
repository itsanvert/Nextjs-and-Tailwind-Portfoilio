import React from "react";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReactquery,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

const projects = [
  {
    title: "My-Portfolio 2024",
    tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss, SiTypescript],
    link: "https://itsanvert.github.io/My-Portfolio-2024",
    cover: "/pp1.png",
    background: "bg-indigo-500",
  },
  {
    title: "My-Portfolio 2023",
    tech: [SiNextdotjs, SiTypescript, SiTailwindcss],
    link: "https://portfolio-nextjs-and-tailwind.vercel.app/",
    cover: "/pp2.png",
    background: "bg-green-500",
  },
  {
    title: "Web-Travel",
    tech: [SiHtml5, SiCss3, SiBootstrap],
    link: "https://itsanvert.github.io/Travel-Website-Botstrap-5/",
    cover: "/pp3.png",
    background: "bg-indigo-500",
  },
  {
    title: "SBKU-Clone-Website",
    tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap],
    link: "https://itsanvert.github.io/SBKU-Website-clone-Boostrapt-5/",
    cover: "/pp4.png",
    background: "bg-green-500",
  },
  {
    title: "SBKU-Website",
    tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap],
    link: "https://itsanvert.github.io/Build-University-Website-Boostrapt-5/",
    cover: "/pp5.png",
    background: "bg-indigo-500",
  },
  {
    title: "E-Commerce-Website",
    tech: [SiHtml5, SiCss3, SiJavascript],
    link: "https://itsanvert.github.io/Ecommerce-Website-HTML-CSS/",
    cover: "/pp6.png",
    background: "bg-green-500",
  },
];

export default function Projects() {
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => (
          <Link key={index} href={project.link}>
            <div className={cn("p-5 rounded-md", project.background)}>
              <DirectionAwareHover
                imageUrl={project.cover}
                className="w-full space-y-5 cursor-pointer"
              >
                <div className="space-y-5">
                  <h1 className="text-2xl font-bold">{project.title}</h1>
                  <div className="flex items-center gap-5">
                    {project.tech.map((Icon, index) => (
                      <Icon key={index} />
                    ))}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
