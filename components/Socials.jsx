import Link from "next/link";

import {
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterXLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Twitter",
    link: "https://x.com/Sudipkoirala44",
    Icon: RiTwitterXLine,
  },
  {
    name: "Instagram", 
    link: "https://www.instagram.com/",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    Icon: RiFacebookLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sudip-koirala-887aa3274/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/sudipkoirala",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
