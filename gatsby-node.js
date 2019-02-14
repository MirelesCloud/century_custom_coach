const path = require("path")

exports.createPages = ({ actions, graphql }) => {

  const { createPage } = actions
  const servicePageTemplate = path.resolve(`src/templates/serviceTemplate.js`)
  const contactPageTemplate = path.resolve(`src/templates/contactTemplate.js`)
  const galleryPageTemplate = path.resolve(`src/templates/galleryTemplate.js`)
  const homePageTemplate = path.resolve(`src/templates/homeTemplate.js`)
  const servicesHome = path.resolve(`src/templates/servicesHomeTemplate.js`)
  const aboutPageTemplate = path.resolve(`src/templates/aboutTemplate.js`)
  const reviewsPageTemplate = path.resolve(`src/templates/reviewsTemplate.js`)


  return graphql(`
    {
      home: allMarkdownRemark(
        filter: {fileAbsolutePath: { glob: "**/src/pages/home/*md"}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }

      serviceHome: allMarkdownRemark(
        filter: {fileAbsolutePath: { glob: "**/src/pages/home/services.md"}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }

      about: allMarkdownRemark(
        filter: {fileAbsolutePath: { glob: "**/src/pages/home/about.md"}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }

      services: allMarkdownRemark(
        filter: {fileAbsolutePath: { glob: "**/src/pages/services/*.md"}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }

      contact: allMarkdownRemark(
        filter: {fileAbsolutePath: { glob: "**/src/pages/contact/*.md"}}
      ) {
        edges {
          node {
            frontmatter
            {
              path
            }
          }
        }
      }

      gallery: allMarkdownRemark(
        filter: {fileAbsolutePath: { glob: "**/src/pages/gallery/*.md"}}
      ) {
        edges {
          node {
            frontmatter
            {
              path
            }
          }
        }
      }

      reviews: allMarkdownRemark(
        filter: {fileAbsolutePath: { glob: "**/src/pages/reviews/*.md"}}
      ) {
        edges {
          node {
            frontmatter
            {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.home.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: homePageTemplate,
        contect: {},
      })
    })

    result.data.serviceHome.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: servicesHome,
        context: {},
      })
    })

    result.data.about.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: aboutPageTemplate,
        context: {},
      })
    })

    result.data.services.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: servicePageTemplate,
        context: {},
      })
    })

    result.data.contact.edges.forEach(({ node }) => {
      createPage({
        path:node.frontmatter.path,
        component:  contactPageTemplate,
        context: {},
      })
    })

    result.data.gallery.edges.forEach(({ node }) => {
      createPage({
        path:node.frontmatter.path,
        component: galleryPageTemplate,
        context: {},
      })
    })

    result.data.reviews.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: reviewsPageTemplate,
        context: {},
      })
    })
  })
}
