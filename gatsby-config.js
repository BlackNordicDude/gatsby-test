const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Поддоны в Санкт-Петербурге',
    description: 'Покупка паллетов и смежных изделий в Санкт-Петербурге',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cards`,
        path: path.join(__dirname, `src`, `store`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ВВЭС`,
        short_name: `ВВЭС`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'src/images/icons/logo.svg'
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `jkfscoa6rpxx`,
        accessToken: 'u5IXcK9jcyFFDrfSqW4VDNM7iVZeyXW2I9DVw2sLP64',
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: 90794811,
        webvisor: true,
        trackHash: true,
        afterBody: true,
        defer: false,
        useCDN: true,
      },
    },
  ],
}
