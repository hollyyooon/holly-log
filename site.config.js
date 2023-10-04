const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Holly",
    image: "/hello.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Growth Analyst",
    bio: "My Life Goal is breaking down the barrier of growth through data",
    email: "imhollyday@kakao.com",
    linkedin: "hoonyoungyoon",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: `(beta)바쁜 사람들`,
      href: "https://seoinhyeok96-busypeople-streamlit-home-q44zlc.streamlit.app/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "hollyisyoon",
    description: "Hello, I'm Holly!",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://hollyisyoon.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["훈영", "hollyyoon", "데이터분석가"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "hollyyooon/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
