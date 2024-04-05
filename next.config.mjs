import nextra from "nextra"

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
})

export default withNextra({
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  webpack: (config, { webpack }) => {
    config.externals["node:fs"] = "commonjs node:fs"
    config.externals["node:path"] = "commonjs node:path"

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
        resource.request = resource.request.replace(/^node:/, "")
      }),
    )

    return config
  },
})
