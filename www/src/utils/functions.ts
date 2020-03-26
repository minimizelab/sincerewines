import { WineType } from '../types/types';

export const wineType = (type: WineType): string | null => {
  if (type === 'Red') return 'RÖDA VINER';
  if (type === 'White') return 'VITA VINER';
  if (type === 'Rose') return 'ROSÉVINER';
  return null;
};

export const createArrayString = (array: Array<string>): string => {
  if (array.length <= 1) {
    return array[0];
  } else {
    let names = '';
    array.forEach((item, i, arr) => {
      if (arr.length - 1 === i) {
        names = names + item;
      } else {
        names = names + item + ', ';
      }
    });
    return names;
  }
};
