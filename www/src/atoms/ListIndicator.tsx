import React, { FunctionComponent } from 'react';
import { combineClasses } from '@minimizelab/mini_utils';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';

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
}) => (
  <>
    <button
      className={combineClasses([
        'flex rounded-full w-8 h-8 text-xl border border-sincere-green justify-center items-center',
        inList
          ? 'bg-sincere-green text-white'
          : 'bg-white border-sincere-green',
        className,
      ])}
      onClick={inList ? deleteFromList : addToList}
    >
      {inList ? (
        <IoIosRemove className="text-white" />
      ) : (
        <IoIosAdd className="text-sincere-green" />
      )}
    </button>
  </>
);

export default ListIndicator;
