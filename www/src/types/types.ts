import { ReactElement } from 'react';

export interface Wine {
  name: string;
  producer: Producer;
  desc: unknown;
  _type: 'wine';
  year: string;
  grapes: Array<Grape>;
  district: District;
  type: WineType;
  price?: number;
  alc: number;
  vol: number;
  _id: string;
  link?: string;
  assortment: string;
  image: Image;
  path: string;
  articleNumber: string;
  packageRequirement: boolean;
}

export interface WineCase {
  name: string;
  desc: unknown;
  _type: 'wineCase';
  caseWines: Array<CaseWines>;
  price: number;
  _id: string;
  link?: string;
  assortment: string;
  image?: Image;
  path: string;
  articleNumber?: string;
}

interface CaseWines {
  quantity: number;
  wine: Wine;
}

export interface Producer {
  name: string;
  id: string;
  grapes: Array<Grape>;
  intro: string;
  makers: Array<Maker>;
  images: Array<Image>;
  desc: unknown;
  path: string;
  image: Image;
}

export interface Post {
  title: string;
  id: string;
  date: string;
  intro: string;
  image: Image;
  content: unknown;
  path: string;
}

export interface Maker {
  name: string;
  id: string;
  image: Image;
}

export type WineType = 'White' | 'Red' | 'Rose';

export interface Producer {
  name: string;
}

export interface Grape {
  name: string;
}
export interface District {
  name: string;
  country: string;
}

export interface Link {
  title: string;
  link: string;
}

export interface Image {
  _id: string;
  url: string;
  metadata: {
    dimensions: {
      aspectRatio: number;
      height: number;
      width: number;
    };
  };
}

export interface SortBy {
  value: string;
  text: string;
}

export type WineItem = Wine | WineCase;

export interface WineListItem {
  id: string;
  quantity: number;
}

export type C<Props = undefined> = Props extends undefined
  ? () => ReactElement | null
  : (props: Props) => ReactElement | null;
