/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({actions, graphql}) => {
  const {createPage} = actions
  const {data:{allMdx:{edges:posts}}} = await graphql(`
    {
      allMdx{
        edges{
        	node{
          	frontmatter{
              slug
            }
          }
        }
      }
    }
  `)

  posts.forEach(({node}) => {
    const {slug} = node.frontmatter
    createPage({
      path: slug,
      component: require.resolve('./src/templates/post-template.js'),
      context: {slug: slug}
    })
  })
}
