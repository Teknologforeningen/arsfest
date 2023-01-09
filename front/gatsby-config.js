/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `TF Årsfest`,
    siteUrl: `https://arsfest.tf.fi`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: '@vtex/gatsby-plugin-nginx',
      options: {
        serverOptions:[['include', '/etc/nginx/api_nginx.conf']]
      }
    },
  ],
}
