module.exports = {
  siteMetadata: {
    title: `adelaida.design`,
    description: `Hi, nice to meet you! My name is Adelaida. I am graphic designer in all verticals`,
    author: `@adelaida_design`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-eslint`,
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
        name: `Adelaida - Graphic Designer`,
        short_name: `Adelaida`,
        start_url: `/`,
        background_color: `#cf011b`,
        theme_color: `#cf011b`,
        display: `standalone`,
        icon: `src/images/adelaida-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
