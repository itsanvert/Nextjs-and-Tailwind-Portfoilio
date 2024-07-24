import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
  FaAddressBook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaVoicemail,
} from "react-icons/fa";
import { SiFacebook, SiTelegram, SiYoutube } from "react-icons/si";

function Navbar({ className }: { className?: string }) {
  const socials = [
    { name: "Github", icon: FaGithub, link: "https://github.com/itsanvert" },
    {
      name: "Linkedin",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/san-vert-081472310/",
    },
    {
      name: "Youtube",
      icon: SiYoutube,
      link: "https://www.youtube.com/channel/UCrZF5f--7XzBNuMZnNkwjQA",
    },
    {
      name: "Telegram",
      icon: SiTelegram,
      link: "https://t.me/itsanvert",
    },
    {
      name: "Facebook",
      icon: SiFacebook,
      link: "https://web.facebook.com/sanvertit/",
    },
  ];

  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        San Vert 👨🏻‍💻
      </h1>
      <div className="flex items-center gap-5 ">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link href={social.link} key={index} aria-label={social.name}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
