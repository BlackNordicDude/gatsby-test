const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Паллеты в Санкт-Петербурге',
    description: 'Покупка паллетов и смежных изделий в Санкт-Петербурге',
    image: '/favicon.png',
    siteUrl: `https://www.yourdomain.tld`,
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
  ],
}
