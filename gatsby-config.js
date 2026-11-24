// The manifest requires a literal color. This is Workbench dark's --surface-primary.
const workbenchDarkSurface = `#1f2b3b`;

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-MC5T86W5`,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Carlos Contreras`,
        short_name: `Carlos`,
        start_url: `/`,
        background_color: workbenchDarkSurface,
        theme_color: workbenchDarkSurface,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
      },
    },
  ],
}
