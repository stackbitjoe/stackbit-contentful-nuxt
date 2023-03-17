function stackbit_process_cwd_shim() { return "/Users/jkeyes/Development/playground/contentful-nuxt-netlify" }
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.js
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_path = __toESM(require("path"));
var import_dotenv = __toESM(require("../../node_modules/dotenv/lib/main.js"));
var import_cms_contentful = require("../../node_modules/@stackbit/cms-contentful/dist/index.js");
import_dotenv.default.config({ path: import_path.default.resolve("/Users/jkeyes/Development/playground/contentful-nuxt-netlify", ".env") });
var stackbit_config_default = {
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "16",
  devCommand: "npm run dev -- -p {PORT}",
  experimental: {
    ssg: {
      name: "Nuxt3",
      logPatterns: {
        up: "Local:    http"
      },
      passthrough: ["/vite-hmr/**"]
    }
  },
  contentSources: [
    new import_cms_contentful.ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
    })
  ],
  modelExtensions: [
    {
      name: "blogPost",
      type: "page",
      urlPath: "/{slug}"
    }
  ]
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=stackbit.config.BKMMPIOC.cjs.map
