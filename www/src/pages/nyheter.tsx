import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import H3 from '../atoms/H3';
import TextLarge from '../atoms/TextLarge';
import BigLink from '../molecules/BigLink';
import { useStaticQuery, graphql } from 'gatsby';
import PostCard from '../molecules/PostCard';
import { Post } from '../types/types';

const Nyheter: FunctionComponent = () => {
  const data: {
    allSanityPost: {
      edges: Array<{ node: Post }>;
    };
  } = useStaticQuery(graphql`
    query postsQuery {
      allSanityPost {
        edges {
          node {
            ...Post
            featureImage {
              asset {
                fluid(maxWidth: 720, maxHeight: 400) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Layout title="Nyheter">
      <Section className="flex-row justify-center mx-3 pt-3 mt-12 mb-6">
        <H1 className="text-center">Nyheter</H1>
      </Section>
      <Section className="flex mb-6 flex-col items-center px-8">
        <div>
          <H3>Nyhetsbrev</H3>
          <TextLarge>
            Vill du hålla dig uppdaterad på vad som händer kring Sincere Wines?
          </TextLarge>
          <TextLarge className="my-4">
            Skicka ett email med dina kontaktuppgifter till:
          </TextLarge>
          <BigLink
            to="mailto:info@sincerewines.com"
            title="info@sincerewines.com"
          />
          <H3 className="mt-12">Inlägg</H3>
          <PostCard content={data.allSanityPost.edges} />
        </div>
      </Section>
    </Layout>
  );
};

export default Nyheter;
