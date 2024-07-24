import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  SiNextdotjs,
  SiReactquery,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
} from "react-icons/si";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <BentoGridItem
            title={item.title}
            description={item.description}
            header={
              <div className="relative">
                <Skeleton />
                <img
                  src={item.cover}
                  alt={item.title}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            }
            className={item.className}
            icon={
              <div className="flex space-x-2">
                {item.icons.map((Icon, idx) => (
                  <Icon key={idx} className="h-4 w-4 text-neutral-500" />
                ))}
              </div>
            }
          />
        </a>
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    title: "My-Portfolio 2024",
    description:
      "Using Next.js, React Query, Supabase, Tailwind CSS, TypeScript",
    className: "md:col-span-2",
    icons: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss, SiTypescript],
    link: "https://itsanvert.github.io/My-Portfolio-2024",
    cover: "/pp1.png",
    background: "bg-indigo-500",
  },
  {
    title: "My-Portfolio 2023",
    description: "Using Next.js, TypeScript, Tailwind CSS",
    className: "md:col-span-1",
    icons: [SiNextdotjs, SiTypescript, SiTailwindcss],
    link: "https://portfolio-nextjs-and-tailwind.vercel.app/",
    cover: "/pp2.png",
    background: "bg-green-500",
  },
  {
    title: "Web-Travel",
    description: "Using HTML5, CSS3, Bootstrap",
    className: "md:col-span-1",
    icons: [SiHtml5, SiCss3, SiBootstrap],
    link: "https://itsanvert.github.io/Travel-Website-Botstrap-5/",
    cover: "/pp3.png",
    background: "bg-indigo-500",
  },
  {
    title: "SBKU-Clone-Website",
    description: "Using HTML5, CSS3, JavaScript, Bootstrap",
    className: "md:col-span-2",
    icons: [SiHtml5, SiCss3, SiJavascript, SiBootstrap],
    link: "https://itsanvert.github.io/SBKU-Website-clone-Boostrapt-5/",
    cover: "/pp4.png",
    background: "bg-green-500",
  },
  {
    title: "SBKU-Website",
    description: "Using HTML5, CSS3, JavaScript, Bootstrap",
    className: "md:col-span-2",
    icons: [SiHtml5, SiCss3, SiJavascript, SiBootstrap],
    link: "https://itsanvert.github.io/Build-University-Website-Boostrapt-5/",
    cover: "/pp5.png",
    background: "bg-indigo-500",
  },
  {
    title: "E-Commerce-Website",
    description: "Using HTML5, CSS3, JavaScript",
    className: "md:col-span-1",
    icons: [SiHtml5, SiCss3, SiJavascript],
    link: "https://itsanvert.github.io/Ecommerce-Website-HTML-CSS/",
    cover: "/pp6.png",
    background: "bg-green-500",
  },
];
