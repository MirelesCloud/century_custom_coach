const fs = require("fs")
const dotenv = require('dotenv')
let env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`});

module.exports = {
  siteMetadata: {
    title: `Century Custom Coach`,
    url: `https://www.centurycustomcoach.com`,
    description: `Automotive mechanic, repair, paint and body shop`,
    image: `/src/images/Danny.jpg`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Century Custom Coach`,
        short_name: `CCC`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#c21605`,
        display: `standalone`,
        crossOrigin: `use-credentials`,

      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      }
    },
    `gatsby-transformer-remark`,
    {
   resolve: `gatsby-source-filesystem`,
   options: {
     name: `images`,
     path: `${__dirname}/src/images/`,

   }
  },
  {
 resolve: `gatsby-source-filesystem`,
 options: {
   name: `gallery`,
   path: `${__dirname}/src/images/gallery`,

  }
 },
    `gatsby-plugin-typography`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-133007457-1`,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source sans pro`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ]
      }
    }
  ]
}
