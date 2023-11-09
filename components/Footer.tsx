import Image from "next/image";

import zoonkLogo from "@/images/logo_zoonk.svg";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandThreads,
  IconBrandX,
} from "@tabler/icons-react";

const socialLinks = [
  { link: "https://github.com/zoonk", icon: IconBrandGithub },
  { link: "https://x.com/zoonkeducation", icon: IconBrandX },
  { link: "https://linkedin.com/company/zoonk", icon: IconBrandLinkedin },
  { link: "https://instagram.com/zoonkeducation", icon: IconBrandInstagram },
  { link: "https://threads.net/zoonkeducation", icon: IconBrandThreads },
  { link: "https://facebook.com/zoonkeducation", icon: IconBrandFacebook },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center border-t border-slate-400/10 mt-20 py-10 sm:flex-row-reverse sm:justify-between">
      <div className="flex gap-x-6">
        {socialLinks.map(({ link, icon: Icon }) => (
          <a
            key={link}
            href={link}
            className="text-slate-500 hover:text-slate-600 transition-colors"
          >
            <Icon size={24} />
          </a>
        ))}
      </div>

      <p className="flex mt-6 items-center gap-1 text-sm text-slate-500 sm:mt-0">
        Powered by
        <a
          href="https://zoonk.org"
          className="hover:opacity-80 transition-opacity"
        >
          <Image src={zoonkLogo} height={16} alt="Zoonk logo" unoptimized />
        </a>
      </p>
    </footer>
  );
}
