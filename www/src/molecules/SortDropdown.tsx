import React, { FunctionComponent } from 'react';
import { SortBy } from '../types/types';

interface Props {
  sortByList: SortBy[];
  setSortBy: (value: string) => void;
}

const SortDropdown: FunctionComponent<Props> = ({ sortByList, setSortBy }) => {
  return (
    <div className="relative flex flex-row items-center">
      <label htmlFor="sort-select" className="text-sincere-green">
        Sortera på
      </label>
      <select
        className="block cursor-pointer appearance-none rounded-none bg-transparent pl-1 pr-4 py-1 leading-tight focus:outline-none text-sincere-green"
        onChange={(event) => {
          return setSortBy(event.target.value);
        }}
        name="sort"
        id="sort-select"
      >
        {sortByList.map((item: SortBy) => (
          <option className="uppercase" key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-sincere-green">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default SortDropdown;
