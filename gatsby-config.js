// The manifest requires a literal color. This is Workbench dark's --surface-primary.
const workbenchDarkSurface = `#1f2b3b`;

module.exports = {
  siteMetadata: {
    title: `Carlos Contreras`,
    description: `Portfolio, résumé, projects, and writing by Carlos Contreras.`,
    author: `Carlos Contreras`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
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
};
