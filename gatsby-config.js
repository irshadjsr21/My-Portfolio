const config = {
  siteMetadata: {
    title:
      "Md. Irshad Ansari - A web developer / designer / programmer based near Bangalore",
    description:
      "Hi! I'm Mohammad Irshad Ansari, a self taught web developer / designer / programmer based near Bangalore, India. Wanna hire? Wanna collab on a side project? Need a website for a new business / startup? Contact me at irshadjsr21@gmail.com",
    url: "https://imirshad.com",
    image: "https://imirshad.com/favicon.png",
    twitterUsername: "@irshadansari7",
    keywords:
      "web developer, mohammad irshad ansari, web developer bangalore, web developer jamshedpur, web designer jamshedpur, web designer jamshedpur, mohammad irshad ansari web developer, mohammad irshad ansari web designer, affordable website design, affordable web design, affordable website development, cheap website design, cheap website development, imirshad",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/favicon.png",
        appName: "irshad-ansari-portfolio", // Inferred with your package.json
        appDescription: null,
        developerName: "Irshad Ansari",
        developerURL: null,
        dir: "auto",
        lang: "en-US",
        background: "#fff",
        theme_color: "#fff",
        display: "standalone",
        orientation: "any",
        start_url: "/?homescreen=1",
        version: "1.0",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
}

if (process.env.CONTEXT === "production") {
  const googleAnalyticsCfg = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "UA-139804245-1",
    },
  }
  config.plugins.push(googleAnalyticsCfg)
}

module.exports = config
