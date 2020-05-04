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
        'flex rounded-full w-8 h-8 text-xl border border-black justify-center items-center',
        inList ? 'bg-black text-white ' : 'bg-white text-black',
        className,
      ])}
      onClick={inList ? deleteFromList : addToList}
    >
      {inList ? <IoIosRemove /> : <IoIosAdd />}
    </button>
  </>
);

export default ListIndicator;
