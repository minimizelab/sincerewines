import { FluidObject, FixedObject } from 'gatsby-image';

export interface Wine {
  name: string;
  producer: Producer;
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
    fluid: FluidObject;
    fixed: FixedObject;
  };
}
