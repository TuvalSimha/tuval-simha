type Card = {
  title: string
  description: string
  href: string
  backgroundColor: string
}

const cards: Card[] = [
  {
    title: "Projects",
    description: "I build projects to learn and to help others learn.",
    href: "/projects",
    backgroundColor: "bg-neutral-400",
  },
  {
    title: "Blog",
    description:
      "I write about web development, programming, and software engineering.",
    href: "/blog",
    backgroundColor: "bg-neutral-500",
  },
  {
    title: "Hire Me",
    description: "I am available for hire. Let's work together.",
    href: "/hire-me",
    backgroundColor: "bg-neutral-600",
  },
]

export function Cards() {
  return (
    <div className="flex gap-8 flex-wrap justify-center mb-[100px] mt-[100px]">
      {cards.map((card) => (
        <a
          href={card.href}
          key={card.href}
          className={` ${card.backgroundColor} cursor-pointer transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 shadow-xl transition duration-300 hover:scale-105`}
        >
          <div className="flex h-full justify-center items-center">
            <span className="font-bold text-white text-xl">{card.title}</span>
          </div>
        </a>
      ))}
    </div>
  )
}
