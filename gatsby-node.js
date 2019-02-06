const path = require("path")

exports.createPages = ({ actions, graphql }) => {

  const { createPage } = actions
  const servicePageTemplate = path.resolve(`src/templates/serviceTemplate.js`)
  const contactPageTemplate = path.resolve(`src/templates/contactTemplate.js`)

  return graphql(`
    {
      services: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }

      contact: allMarkdownRemark {
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


  })
}
