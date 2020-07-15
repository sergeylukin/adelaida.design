module.exports = {
  siteMetadata: {
    title: `Adelaida - Graphic Designer`,
    description: `Hi, nice to meet you! My name is Adelaida. I am graphic designer in all verticals`,
    author: `@adelaida_design`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `adelaida.design`,
        short_name: `Adelaida`,
        start_url: `/`,
        background_color: `#cf011b`,
        theme_color: `#cf011b`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Yanone+Kaffeesatz\:200,300`,
        ],
        display: 'swap'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
