import { Cards } from "./cards"
import { Hero } from "./hero"
import { InLove } from "./in-love"
import { RevealOnScroll } from "./reveal-on-scroll"

export function IndexPage() {
  return (
    <>
      <Hero />
      <InLove />
      <RevealOnScroll>
        <Cards />
      </RevealOnScroll>
    </>
  )
}
