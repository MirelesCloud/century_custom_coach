const path = require("path")

exports.createPages = ({ actions, graphql }) => {

  const { createPage } = actions
  const servicePageTemplate = path.resolve(`src/templates/serviceTemplate.js`)
  const contactPageTemplate = path.resolve(`src/templates/contactTemplate.js`)
  const galleryPageTemplate = path.resolve(`src/templates/galleryTemplate.js`)

  return graphql(`
    {
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
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

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
  })
}
