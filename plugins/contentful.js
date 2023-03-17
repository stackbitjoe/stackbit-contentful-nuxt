const contentful = require("contentful");

const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined;

module.exports = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken:  isDev ? process.env.CONTENTFUL_PREVIEW_TOKEN : process.env.CONTENTFUL_DELIVERY_TOKEN,
  host: isDev ? 'preview.contentful.com' : 'cdn.contentful.com'
});
