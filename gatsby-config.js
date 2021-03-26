require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `Coleman Traders`,
    description: `Coleman traders `,
    author: `@stephangriesel`,
    titleTemplate: `%s | Coleman Traders`,
    url: `https://www.colemantraders.co.za`,
    image: `mainBcg.png`,
    twitterUsername: `@stephangriesel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `500`, `700`],
          },
          {
            family: `Open Sans`,
          },
          {
            family: `Caveat`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Projects`,
            mapping: {
              image: `fileNode`
            }
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Customers`,
            mapping: {
              image: `fileNode`
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries: require('./src/constants/algolia'),
        chunkSize: 10000,
      }
    }
  ],
}
