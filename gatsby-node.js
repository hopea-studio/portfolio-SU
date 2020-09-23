const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProjects {
      projects: allContentfulDesignProject {
        nodes {
          Slug
        }
      }
    }
  `)
  result.data.projects.nodes.forEach((project) => {
    createPage({
      path: `/portfolios/${project.Slug}`,
      component: path.resolve(`src/templates/project-template.js`),
      context: {
        Slug: project.Slug,
      },
    })
  })
}
