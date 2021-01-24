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

const addClassName = (classNames: string, newClassName: string): string =>
  classNames.length ? classNames.concat(' ', newClassName) : newClassName;

export const combineClasses = (
  classNames: Array<string | undefined | { [key: string]: boolean | undefined }>
): string => {
  let result = '';
  classNames.forEach((item) => {
    switch (typeof item) {
      case 'string':
        if (item.length > 0) result = addClassName(result, item);
        break;
      case 'object':
        Object.entries(item).forEach(([key, val]) => {
          if (val && key.length > 0) {
            result = addClassName(result, key);
          }
        });
        break;
      default:
        break;
    }
  });
  return result;
};
