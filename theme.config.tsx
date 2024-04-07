import React from "react"
import { DocsThemeConfig, useConfig } from "nextra-theme-docs"
import { Footer } from "./components/footer"
import { useRouter } from "next/router"

const logo = (
  <div className="p-2 text-[20px] font-bold leading-none tracking-tighter text-neutral-600 uppercase">
    Tuval Simha
  </div>
)

const config: DocsThemeConfig = {
  docsRepositoryBase: "https://github.com/TuvalSimha/tuval-simha",
  project: {
    link: "https://github.com/TuvalSimha/tuval-simha",
  },
  nextThemes: {
    defaultTheme: "light",
    forcedTheme: "light",
    storageKey: "nextra-theme-docs",
  },
  logo: logo,
  head: function useHead() {
    const { frontMatter, title: pageTitle } = useConfig()
    const { asPath } = useRouter()

    const title = `${pageTitle}${asPath === "/" ? "" : " | Tuval Simha Portfolio"}`
    const { description, canonical } = frontMatter
    return (
      <>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tuval Simha Portfolio" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@SimhaTuval" />
        <meta name="twitter:creator" content="@SimhaTuval" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        {description && (
          <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
          </>
        )}
        {canonical && <link rel="canonical" href={canonical} />}
        <meta property="twitter:site" content="@SimhaTuval" />
      </>
    )
  },
  search: {
    placeholder: "Search blogs or projects",
  },
  darkMode: false,
  footer: {
    component: <Footer />,
  },
}

export default config
