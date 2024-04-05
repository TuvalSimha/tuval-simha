import { useRouter } from "next/router"
import { Button } from "./button"

export function Hero() {
  const router = useRouter()

  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                Web Developer <br className="block" />
                Creating Beautiful and Functional Websites
              </h1>
              <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-20">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <Button
                    type="default"
                    onClick={() => {
                      router.push("/projects")
                    }}
                  >
                    Projects
                  </Button>
                </div>
                <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                  <Button
                    type="outline"
                    onClick={() => {
                      router.push("/blog")
                    }}
                  >
                    Read Blogs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
