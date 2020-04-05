/* eslint-disable @typescript-eslint/explicit-function-return-type */
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const winesQuery = await graphql(`
    {
      allSanityWine {
        edges {
          node {
            path {
              current
            }
          }
        }
      }
    }
  `);

  if (winesQuery.errors) {
    throw new Error(winesQuery.errors);
  }

  winesQuery.data.allSanityWine.edges.forEach(({ node }) => {
    createPage({
      path: `/sortiment/${node.path.current}`,
      component: path.resolve('src/templates/Wine.tsx'),
      context: {
        slug: node.path.current,
      },
    });
  });

  const wineCasesQuery = await graphql(`
    {
      allSanityWineCase {
        edges {
          node {
            path {
              current
            }
          }
        }
      }
    }
  `);

  if (wineCasesQuery.errors) {
    throw new Error(wineCasesQuery.errors);
  }

  wineCasesQuery.data.allSanityWineCase.edges.forEach(({ node }) => {
    createPage({
      path: `/sortiment/${node.path.current}`,
      component: path.resolve('src/templates/WineCase.tsx'),
      context: {
        slug: node.path.current,
      },
    });
  });

  const producersQuery = await graphql(`
    {
      allSanityProducer {
        edges {
          node {
            path {
              current
            }
          }
        }
      }
    }
  `);

  if (producersQuery.errors) {
    throw new Error(producersQuery.errors);
  }

  producersQuery.data.allSanityProducer.edges.forEach(({ node }) => {
    createPage({
      path: `/producenter/${node.path.current}`,
      component: path.resolve('src/templates/Producer.tsx'),
      context: {
        slug: node.path.current,
      },
    });
  });

  const postsQuery = await graphql(`
    {
      allSanityPost {
        edges {
          node {
            path {
              current
            }
          }
        }
      }
    }
  `);

  if (postsQuery.errors) {
    throw new Error(postsQuery.errors);
  }

  postsQuery.data.allSanityPost.edges.forEach(({ node }) => {
    createPage({
      path: `/posts/${node.path.current}`,
      component: path.resolve('src/templates/Post.tsx'),
      context: {
        slug: node.path.current,
      },
    });
  });
};
