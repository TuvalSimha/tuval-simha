import { ReactElement } from "react"
import { AppProps } from "next/app"
import "../styles/globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Layout } from "../components/layout"
import Head from "next/head"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Layout>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </Layout>
  )
}
