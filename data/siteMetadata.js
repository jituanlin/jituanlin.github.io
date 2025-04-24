/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: "jituanlin's blog",
  author: 'jituanlin',
  headerTitle: "jituanlin's blog",
  description: 'My Journey With Code',
  language: 'en',
  theme: 'system', // system, dark or light
  siteUrl: 'https://jituanlin.github.io',
  siteRepo: 'https://github.com/jituanlin/jituanlin.github.io',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'jituanlin@gmail.com',
  github: 'https://github.com/jituanlin',
  locale: 'en',
  multiauthors: false,
  analytics: {}, // Empty since analytics are disabled
  newsletter: {
    provider: '', // Disabled as per your request
  },
  iscomments: false, // Disabled as per your request
  comments: {
    provider: '', // Disabled as per your request
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
  formspree: false,
  iswaline: false,
  walineServer: '',
}

module.exports = siteMetadata
