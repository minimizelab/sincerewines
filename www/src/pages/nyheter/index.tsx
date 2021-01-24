import Layout from '../../organisms/Layout';
import Section from '../../atoms/Section';
import H1 from '../../atoms/H1';
import H3 from '../../atoms/H3';
import TextLarge from '../../atoms/TextLarge';
import BigLink from '../../molecules/BigLink';
import PostCard from '../../molecules/PostCard';
import { Post, C } from '../../types/types';
import { GetStaticProps } from 'next';
import groq from 'groq';
import { client } from '../../services/sanity';

interface Props {
  posts: Array<Post>;
}

const News: C<Props> = ({ posts }) => (
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
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </Section>
  </Layout>
);

export default News;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const postsQuery = groq`*[_type == "post"] {
    "id": _id,
    title,
    date,
    intro,
    "path": path.current,
    content,
    "image": featureImage.asset->,
  } | order(date desc)`;
  let props: Props;
  try {
    const posts = await client.fetch<Array<Post>>(postsQuery);
    props = { posts };
  } catch (error) {
    throw Error(error);
  }
  return {
    props,
    revalidate: 120,
  };
};
