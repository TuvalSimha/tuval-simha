import { ReactElement } from "react"
import type { GetStaticProps } from "next"
import Link from "next/link"
import { clsx } from "clsx"
import { Title } from "./title"
import { FaStar } from "react-icons/fa6"
import { RevealOnScroll } from "./reveal-on-scroll"

type Project = {
  title: string
  stars: number
  description: string
  href: string
}

function ProjectsTeaser(props: Project) {
  return (
    <div
      className={clsx(
        " mb-5 text-current no-underline flex border-[1px]",
        "hover:!border-primary hover:shadow-2xl hover:shadow-primary/10 hover:relative group",
        "relative after:content-['_↗'] after:font-sans after:absolute after:right-4 after:top-4",
      )}
    >
      <div>
        <Link href={props.href} target="_blank">
          <div className="p-4">
            <h2 className="text-lg font-bold">{props.title}</h2>
            <p className="text-sm">{props.description}</p>
          </div>
        </Link>
        <div className="p-4">
          <p className="text-xs flex flex-row items-center gap-3 text-neutral-600 dark:text-neutral-400">
            <FaStar className="fill-yellow-500" />
            {props.stars} stars
          </p>
        </div>
      </div>
    </div>
  )
}

export const ProjectsUpdates = (props: {
  projects: Project[]
}): ReactElement => {
  return (
    <>
      <Title
        title="Projects"
        description="I build projects to learn and to help others learn."
      />
      <ol className="relative px-4 md:px-6">
        {props.projects.map((item) => (
          <RevealOnScroll>
            <ProjectsTeaser key={item.href} {...item} />
          </RevealOnScroll>
        ))}
      </ol>
    </>
  )
}

type ProjectUrl = {
  url: string
}

const projectsList: ProjectUrl[] = [
  {
    url: "https://api.github.com/repos/TuvalSimha/pikud-haoref-api-graphql",
  },
  {
    url: "https://api.github.com/repos/TuvalSimha/yoga-cloudflare-workers-template",
  },
  {
    url: "https://api.github.com/repos/TuvalSimha/happy-animation",
  },
  {
    url: "https://api.github.com/repos/TuvalSimha/fets-giphy-app",
  },
  {
    url: "https://api.github.com/repos/TuvalSimha/slide-show-project",
  },
]
export const getStaticProps: GetStaticProps<{
  ssg: { projects: Project[] }
}> = async () => {
  const projects: Project[] = []

  try {
    for (const project of projectsList) {
      const response = await fetch(project.url, {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      })

      if (!response.ok) {
        console.error(`Failed to fetch ${project.url}: ${response.status}`)
        continue
      }

      const data = await response.json()

      projects.push({
        title: data.name,
        stars: data.stargazers_count,
        href: data.html_url,
        description: data.description,
      })
    }
  } catch (error) {
    console.error("Error fetching projects:", error)
  }

  return {
    props: {
      ssg: { projects },
    },
  }
}
