/* eslint-disable @typescript-eslint/explicit-function-return-type */
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const winesQuery = await graphql(`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "json" }
          relativePath: { eq: "wines.json" }
        }
      ) {
        edges {
          node {
            childrenWinesJson {
              slug
            }
          }
        }
      }
    }
  `);

  if (winesQuery.errors) {
    throw new Error(winesQuery.errors);
  }

  winesQuery.data.allFile.edges.forEach(({ node }) => {
    node.childrenWinesJson.forEach(({ slug }) => {
      createPage({
        path: slug,
        component: path.resolve('src/templates/Wine.tsx'),
        context: {
          slug,
        },
      });
    });
  });

  const producersQuery = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "producers" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    }
  `);

  if (producersQuery.errors) {
    throw new Error(producersQuery.errors);
  }

  producersQuery.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.childMarkdownRemark.frontmatter.slug,
      component: path.resolve('src/templates/Producer.tsx'),
      context: {
        slug: node.childMarkdownRemark.frontmatter.slug,
      },
    });
  });
};
