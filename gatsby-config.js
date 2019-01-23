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
        name: `MirelesCloud Gatsby Starter`,
        start_url: `/`,
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
 {
   resolve: `gatsby-source-graphql`,
   options: {
     typeName: `YELP`,
     fieldName: `yelp`,
     url: `https://api.yelp.com/v3/graphql`,
     headers: {
       Authorization: `bearer ${process.env.API_KEY}`
     },
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
