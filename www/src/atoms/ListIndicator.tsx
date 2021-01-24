import React, { FunctionComponent } from 'react';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import { combineClasses } from '../utils/functions';

interface Props {
  className?: string;
  inList: boolean;
  addToList?: () => void;
  deleteFromList: () => void;
}

const ListIndicator: FunctionComponent<Props> = ({
  className,
  inList,
  deleteFromList,
  addToList,
}) => {
  const handleOnClick = (event: any): void => {
    event.stopPropagation();
    if (inList) {
      deleteFromList();
    } else {
      addToList && addToList();
    }
  };
  return (
    <button
      className={combineClasses([
        'flex rounded-full focus:outline-none w-6 h-6 text-xl border border-sincere-green justify-center items-center print:invisible',
        inList
          ? 'bg-sincere-green text-white'
          : 'bg-white border-sincere-green hover:bg-sincere-green',
        className,
      ])}
      onClick={handleOnClick}
    >
      {inList ? (
        <IoIosRemove className="text-white" />
      ) : (
        <IoIosAdd className="text-sincere-green hover:text-white" />
      )}
    </button>
  );
};

export default ListIndicator;
