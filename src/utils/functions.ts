import { Grape, WineType } from '../types/types';

export const wineType = (type: WineType): string | null => {
  if (type === 'red') return 'RÖDA VINER';
  if (type === 'white') return 'VITA VINER';
  if (type === 'rose') return 'ROSÉVINER';
  return null;
};

export const createGrapeString = (array: Array<Grape>): string => {
  return array.length > 1 ? array[0].name : '';
};
