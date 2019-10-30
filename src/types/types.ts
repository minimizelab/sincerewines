export interface Wines {
  name: string;
  producer: string;
  year: string;
  grape: string;
  region: string;
  type: 'white' | 'red' | 'rose';
  price: string;
  food: string;
  alcohol: number;
  description: string;
}
