export interface Wine {
  name: string;
  producer: string;
  year: string;
  grape: string;
  region: string;
  slug: string;
  type: 'white' | 'red' | 'rose';
  price: string;
  food: string;
  alcohol: number;
  image: any,
  description: string;
}
