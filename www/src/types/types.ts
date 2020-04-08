import { FluidObject, FixedObject } from 'gatsby-image';

export interface Wine {
  name: string;
  producer: Producer;
  _rawDesc: unknown;
  _type: string;
  year: string;
  grapes: Array<Grape>;
  district: District;
  type: WineType;
  price: number;
  alc: number;
  vol: number;
  id: string;
  link?: string;
  assortment: string;
  image: Image;
  path: Slug;
  articleNumber: string;
  packageRequirement: boolean;
}

export interface WineCase {
  name: string;
  _rawDesc: unknown;
  _type: string;
  caseWines: Array<CaseWines>;
  price: number;
  id: string;
  link?: string;
  assortment: string;
  image?: Image;
  path: Slug;
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
  _rawDesc: unknown;
  path: Slug;
  mainImg: Image;
}

export interface Post {
  title: string;
  id: string;
  date: string;
  intro: string;
  featureImage: Image;
  _rawContent: unknown;
  path: Slug;
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

export interface Slug {
  current: string;
}

export interface Link {
  title: string;
  link: string;
}

export interface Image {
  asset: {
    id: string;
    url: string;
    metadata: {
      dimensions: {
        aspectRatio: number;
      };
    };
    fluid: FluidObject;
    fixed: FixedObject;
  };
}

export interface SortBy {
  value: string;
  text: string;
}

export interface WineData {
  node: Wine | WineCase;
}
