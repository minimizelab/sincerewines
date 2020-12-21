import groq from 'groq';
import { GetStaticProps } from 'next';
import H1 from '../../atoms/H1';
import Section from '../../atoms/Section';
import ProducerCard from '../../molecules/ProducerCard';
import Layout from '../../organisms/Layout';
import { client } from '../../services/sanity';
import { C, Producer } from '../../types/types';

interface Props {
  producers: Array<Producer>;
}

const Producenter: C<Props> = ({ producers }) => (
  <Layout title="Producenter" description="Våra vinproducenter">
    <Section className="flex-row justify-center mx-3 pt-3 mt-12 mb-6">
      <H1 className="text-center">Producenter</H1>
    </Section>
    <Section className="mb-6 flex-col items-center px-8">
      {producers.map((producer) => (
        <ProducerCard key={producer.id} producer={producer} />
      ))}
    </Section>
  </Layout>
);

export default Producenter;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const producersQuery = groq`*[_type == "producer"] {
    "id": _id,
    name,
    intro,
    grapes[]->,
    "image": mainImg.asset->,
    desc,
    "path": path.current,
    "makers": makers[]-> {
      "id": _id,
      name,
      "image": image.asset->
    },
    "images": images[].asset->
  }`;
  let props: Props;
  try {
    const producers = await client.fetch<Array<Producer>>(producersQuery);
    props = { producers };
  } catch (error) {
    throw Error(error);
  }
  return {
    props,
    revalidate: 120,
  };
};
