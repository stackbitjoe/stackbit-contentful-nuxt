import dotenv from "dotenv";
dotenv.config();

const contentful = require("contentful");

const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined;

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: isDev ? process.env.CONTENTFUL_PREVIEW_TOKEN : process.env.CONTENTFUL_DELIVERY_TOKEN,
  host: isDev ? 'preview.contentful.com' : 'cdn.contentful.com'
});

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Molle:400i|Baloo+Paaji+2:400,500&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/css/main.scss"],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      }
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/contentful", "~/plugins/posts"],
  /*
   ** Environment variables
   */
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESSTOKEN: isDev ? process.env.CONTENTFUL_PREVIEW_TOKEN : process.env.CONTENTFUL_DELIVERY_TOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  },
  modules: ["@nuxtjs/markdownit"],
  markdownit: {
    injected: true
  },
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: "blogPost"
        })
      ]).then(([blogEntries]) => {
        return [...blogEntries.items.map(entry => entry.fields.slug)];
      });
    }
  }
};
