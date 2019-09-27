module.exports = {
  siteMetadata: {
    title: "Alex Standfield Portfolio",
    author: "Alex Standfield",
    description: "I'm Alex Standfield and I'm a Full Stack Web Developer"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Alex Standfield Portfolio',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
