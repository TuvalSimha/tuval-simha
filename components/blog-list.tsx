import fs from "node:fs"
import path from "node:path"
import { ReactElement } from "react"
import type { GetStaticProps } from "next"
import Link from "next/link"
import matter from "gray-matter"
import { clsx } from "clsx"
import { Title } from "./title"
import { RevealOnScroll } from "./reveal-on-scroll"
import { TheGuild } from "./icons/the-guild"
import { TheGuildLogo } from "./icons/the-guild-logo"

type Blog = {
  title: string
  date: string
  description: string
  route: string
  references?: string
}

function BlogsTeaser(props: Blog) {
  return (
    <div
      className={clsx(
        " mb-5 text-current no-underline flex border-[1px]",
        "hover:!border-primary hover:shadow-2xl hover:shadow-primary/10 hover:relative group",
        "relative after:content-['_↗'] after:font-sans after:absolute after:right-4 after:top-4",
      )}
    >
      <div>
        <Link href={props.route}>
          <div className="p-4">
            <h2 className="text-lg font-bold">{props.title}</h2>
            <p className="text-sm">{props.description}</p>
          </div>
        </Link>
        <div className="p-4">
          <div className="flex flex-col md:flex-row w-full items-center justify-start gap-3">
            <time dateTime={props.date} className="text-xs text-neutral-600">
              {new Date(props.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {props.references && (
              <a
                href={props.references}
                className="ml-2 gap-2 text-xs text-neutral-500 flex flex-row items-center "
              >
                Original published on{" "}
                <TheGuild className="w-[24px] h-[24px] fill-black" />{" "}
                <TheGuildLogo className="w-[24px] h-[24px] fill-black" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export const BlogsUpdates = (props: { blogs: Blog[] }): ReactElement => {
  return (
    <>
      <Title
        title="Blogs"
        description="I write about web development, programming, and software engineering."
      />
      <ol className="relative px-4 md:px-6">
        {props.blogs.map((item) => (
          <RevealOnScroll>
            <BlogsTeaser key={item.route} {...item} />
          </RevealOnScroll>
        ))}
      </ol>
    </>
  )
}

export const getStaticProps: GetStaticProps<{
  ssg: { blogs: Blog[] }
}> = async () => {
  const blogsDirectory = path.join(process.cwd(), "pages", "blog")
  const filenames = fs.readdirSync(blogsDirectory)
  const blogs: Blog[] = []

  for (const filename of filenames) {
    if (
      filename.endsWith(".json") ||
      filename.endsWith("index.mdx") ||
      filename.endsWith(".ts")
    ) {
      continue
    }

    const { data } = matter(
      fs.readFileSync(path.join(blogsDirectory, filename), "utf8"),
      {},
    )

    if (data.title && data.description && data.date) {
      blogs.push({
        date: data.date.toISOString(),
        title: data.title,
        description: data.description,
        route: `/blog/${filename.replace(/\.mdx$/, "")}`,
        references: data.references ? data.references : null,
      })
    }
  }

  blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return {
    props: {
      ssg: { blogs },
    },
  }
}
