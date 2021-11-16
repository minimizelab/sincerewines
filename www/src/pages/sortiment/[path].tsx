import groq from 'groq';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getClient } from '../../lib/sanity.server';
import WineTemplate from '../../templates/Wine';
import WineCaseTemplate from '../../templates/WineCase';
import { C, WineItem } from '../../types/types';

interface Props {
  item: WineItem;
}

const ItemPage: C<Props> = ({ item }) =>
  item._type === 'wine' ? (
    <WineTemplate wine={item} />
  ) : (
    <WineCaseTemplate wineCase={item} />
  );

export default ItemPage;

type ItemParams = {
  path: string;
};

export const getStaticProps: GetStaticProps<Props, ItemParams> = async ({
  params,
}) => {
  if (!params) throw Error('Missing params');
  const client = getClient();
  const itemQuery = groq`*[_type in ["wine", "wineCase"] && path.current == $path ] {
    _id,
    _type,
    name,
    year,
    type,
    caseWines[]{"wine": wine-> {producer->, grapes[]->}, quantity},
    "path": path.current,
    grapes[]->,
    district->,
    desc,
    "image": image.asset->,
    producer->,
    articleNumber,
    vol,
    packageRequirement,
    alc,
    assortment,
    price,
    link,
  }[0]`;
  let props: Props;
  try {
    const item = await client.fetch<WineItem>(itemQuery, params);
    props = { item };
  } catch (_) {
    throw Error('Failed to fetch wine item: ' + params.path);
  }
  return {
    props,
    revalidate: 120,
  };
};

export const getStaticPaths: GetStaticPaths<ItemParams> = async () => {
  const client = getClient();
  const itemsQuery = groq`*[_type in ["wine", "wineCase"]] {
    "path": path.current,
  }`;
  let paths: Array<{ params: ItemParams }>;
  try {
    const items = await client.fetch<Array<ItemParams>>(itemsQuery);
    paths = items.map((item: ItemParams) => ({ params: item }));
  } catch (_) {
    throw Error('Failed to fetch wine items');
  }

  return { paths, fallback: false };
};
