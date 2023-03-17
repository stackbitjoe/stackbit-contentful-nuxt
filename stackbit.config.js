import path from "path";
import dotenv from "dotenv";
import { ContentfulContentSource } from "@stackbit/cms-contentful";

dotenv.config({ path: path.resolve(__dirname, ".env") });

export default {
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "16",
  devCommand: "npm run dev -- -p {PORT}",
  experimental: {
    ssg: {
      name: "Nuxt3",
      logPatterns: {
        up: "Listening on:",
      },
      passthrough: ["/vite-hmr/**"],
    },
  },
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    }),
  ],
  modelExtensions: [
    {
        name: 'blogPost',
        type: 'page',
        urlPath: '/{slug}'
    }
  ]
};
