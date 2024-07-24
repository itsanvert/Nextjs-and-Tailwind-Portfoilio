import React from "react";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { text } from "stream/consumers";
import { Globe } from "./ui/globe";
import ThreeGlobe from "three-globe";
import { BentoGridSecondDemo } from "./ui/FeaturesSectionDemo";
import { LayoutGridDemo } from "./ui/LayoutGridDemo";
import { ParallaxScrollDemo } from "./ui/ParallaxScrollDemo";

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
    tech: [SiReact, SiNextdotjs, SiTypescript, SiTailwindcss],
    link: "https://portfolio-nextjs-and-tailwind.vercel.app/",
    cover: "/pp2.png",
    background: "bg-pink-500",
  },
  {
    title: "Web-Travel",
    tech: [SiHtml5, SiCss3, SiBootstrap],
    link: "https://itsanvert.github.io/Travel-Website-Botstrap-5/",
    cover: "/pp3.png",
    background: "bg-red-500",
  },
  {
    title: "SBKU-Clone-Website",
    tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap],
    link: "https://itsanvert.github.io/SBKU-Website-clone-Boostrapt-5/",
    cover: "/pp4.png",
    background: "bg-yellow-500",
  },
  {
    title: "SBKU-Website",
    tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap],
    link: "https://itsanvert.github.io/Build-University-Website-Boostrapt-5/",
    cover: "/pp5.png",
    background: "bg-purple-500",
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
    // <div className="py-10 px-5 sm:px-0">
    //   <Title
    //     text="Projects 🎨"
    //     className="flex flex-col p-10 items-center justify-center -rotate-6 "
    //   />
    //   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    //     {projects.map((project, index) => (
    //       <Link key={index} href={project.link} passHref>
    //         <div className={cn("p-5 rounded-md", project.background)}>
    //           <DirectionAwareHover
    //             imageUrl={project.cover}
    //             className="w-full cursor-pointer"
    //           >
    //             <div className="flex flex-col items-center justify-center h-full space-y-5">
    //               <h1 className="text-2xl font-bold">{project.title}</h1>
    //               <div className="flex items-center gap-3">
    //                 {project.tech.map((TechIcon, techIndex) => (
    //                   <TechIcon className="w-8 h-8" key={techIndex} />
    //                 ))}
    //               </div>
    //             </div>
    //           </DirectionAwareHover>
    //         </div>
    //       </Link>
    //     ))}
    //   </div>
    // </div>

    <div className="py-10 px-5 sm:px-0">
      <Title
        text="Projects Web Developer🎨"
        className="flex flex-col p-10 items-center justify-center rotate-6 "
      />
      <BentoGridSecondDemo />
      <Title
        text="Projects Designer🎨"
        className="flex flex-col p-10 items-center justify-center -rotate-6 "
      />
      <ParallaxScrollDemo />
    </div>
  );
}
