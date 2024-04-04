import { SiNodedotjs } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiCloudflare } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

type itemProps = {
  name: string;
  icon: React.ReactNode;
};

const items: itemProps[] = [
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-[40px] h-[40px]" color="#44883e" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-[40px] h-[40px]" color="#f0db4f" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-[40px] h-[40px]" color="#007acc" />,
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="w-[40px] h-[40px]" color="#264de4" />,
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="w-[40px] h-[40px]" color="#e34f26" />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className="w-[40px] h-[40px]" color="#e535ab" />,
  },
  {
    name: "Cloudflare",
    icon: <SiCloudflare className="w-[40px] h-[40px]" color="#f38020" />,
  },
  {
    name: "Vercel",
    icon: <SiVercel className="w-[40px] h-[40px]" color="#000" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-[40px] h-[40px]" color="#f5820b" />,
  },
  {
    name: "SQLite",
    icon: <SiSqlite className="w-[40px] h-[40px]" color="#003b57" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-[40px] h-[40px]" color="#336791" />,
  },
  {
    name: "React",
    icon: <SiReact className="w-[40px] h-[40px]" color="#61dafb" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-[40px] h-[40px]" color="#000" />,
  },
];

export function InLove() {
  return (
    <div id="love" className="w-full">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="pb-12 text-center">
              <h1 className="max-w-5xl text-xl font-bold leading-none tracking-tighter text-neutral-600 md:text-xl lg:text-3xl lg:max-w-7xl">
                In Love With
              </h1>
            </div>
          </div>
        </div>

        <div className="flex overflow-hidden space-x-16 group">
          <div
            className="flex space-x-16 animate-loop-scroll group-hover:paused"
            aria-hidden="true"
          >
            {items.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                {item.icon}
                <span className="text-lg font-bold tracking-tighter text-neutral-600">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          <div
            className="flex space-x-16 animate-loop-scroll group-hover:paused"
            aria-hidden="true"
          >
            {items.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                {item.icon}
                <span className="text-lg font-bold tracking-tighter text-neutral-600">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
