/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'TF 151',
    siteUrl: 'https://arsfest.tf.fi',
    description: 'TF:s Årsfest'
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: '@vtex/gatsby-plugin-nginx',
      options: {
        serverOptions:[['include', '/etc/nginx/api_nginx.conf']]
      }
    },
  ],
}
