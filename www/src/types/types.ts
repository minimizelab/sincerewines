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
  caseWines: Array<Wine>;
  price: number;
  id: string;
  link?: string;
  assortment: string;
  image?: Image;
  path: Slug;
  articleNumber?: string;
}
export interface Page {
  title: string;
  path: Slug;
  _rawContent: unknown;
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

export interface Maker {
  name: string;
  id: string;
  image: Image;
}

export type WineType = 'white' | 'red' | 'rose';

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
