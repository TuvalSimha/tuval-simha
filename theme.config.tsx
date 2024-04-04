import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Footer } from "./components/footer";

const config: DocsThemeConfig = {
  logo: (
    <div className="p-2 text-[20px] font-bold leading-none tracking-tighter text-neutral-600 uppercase">
      Tuval Simha
    </div>
  ),
  search: {
    placeholder: "Search blogs or projects",
  },
  footer: {
    component: <Footer />,
  },
};

export default config;
