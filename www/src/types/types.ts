import { FluidObject, FixedObject } from 'gatsby-image';

export interface Wine {
  name: string;
  producer: Producer;
  _rawDesc: any;
  year: string;
  grapes: Array<Grape>;
  district: string;
  type: WineType;
  price: number;
  alc: number;
  id: string;
  link?: string;
  image: Image;
  path: Slug;
  articleNumber: string;
  packageRequirement: boolean;
}

export interface Producer {
  name: string;
  id: string;
  grapes: Array<Grape>;
  intro: string;
  makers: Array<Maker>;
  images: Array<Image>;
  _rawDesc: any;
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

export interface Slug {
  current: string;
}

export interface Image {
  asset: {
    id: string;
    fluid: FluidObject;
    fixed: FixedObject;
  };
}
