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
  image: any;
  slug: string;
  reward: string;
  description: string;
}
