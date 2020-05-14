const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date(locale: "pt-br", formatString: "DD[/]MM[/]YYYY")
              description
              image
              slug
              title
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });
  });
};