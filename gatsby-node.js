/* eslint-disable @typescript-eslint/explicit-function-return-type */
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const winesQueryResult = await graphql(`
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

  if (winesQueryResult.errors) {
    throw new Error(winesQueryResult.errors);
  }

  winesQueryResult.data.allFile.edges.forEach(({ node }) => {
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
};
