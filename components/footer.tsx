import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRss } from "react-icons/fa";

type FooterItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

const items: FooterItem[] = [
  {
    href: "https://twitter.com/tuvalsimha",
    title: "Twitter",
    icon: <FaTwitter className="w-[24px] h-[24px] hover:fill-[#1DA1F2]" />,
  },
  {
    href: "https://github.com/TuvalSimha",
    title: "GitHub",
    icon: <FaGithub className="w-[24px] h-[24px] hover:fill-[#333]" />,
  },
  {
    href: "https://www.linkedin.com/in/tuvalsimha/",
    title: "LinkedIn",
    icon: <FaLinkedin className="w-[24px] h-[24px] hover:fill-[#0A66C2]" />,
  },
  {
    href: "https://www.facebook.com/TuvalSimha",
    title: "Facebook",
    icon: <FaFacebook className="w-[24px] h-[24px] hover:fill-[#1877F2]" />,
  },
  {
    href: "/feed.xml",
    title: "RSS",
    icon: <FaRss className="w-[24px] h-[24px] hover:fill-[#FFA500]" />,
  },
];

export function Footer() {
  const thisYear = new Date().getFullYear();
  return (
    <footer>
      <div>
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Tuval Simha</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © {thisYear} Tuval Simha —
            <a
              href="https://twitter.com/tuvalsimha"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @SimhaTuval
            </a>
          </p>
          <span className="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-500">
                {item.icon}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
