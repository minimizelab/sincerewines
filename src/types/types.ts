export interface Wine {
  name: string;
  producer: string;
  year: string;
  grape: string;
  district: string;
  type: 'white' | 'red' | 'rose';
  price: number;
  food: string;
  alcohol: number;
  systembolaget: boolean;
  link?: string;
  image: any;
  slug: string;
  reward: string;
  description: string;
  articleNr: string;
}
