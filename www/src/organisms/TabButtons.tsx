import React, { FunctionComponent } from 'react';
import { combineClasses } from '@minimizelab/mini_utils';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { actions } from '../store/ui';
import TextUppercase from '../atoms/TextUppercase';

interface Props {
  className?: string | { [key: string]: boolean };
  privateImport: boolean;
}

const Button: FunctionComponent<Props> = ({ className, privateImport }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex flex-wrap">
      <button
        onClick={() => dispatch(actions.importTypeToggled(true))}
        className={combineClasses([
          'focus:outline-none border py-3 px-6 flex items-center justify-center border-sincere-green sm:w-1/2 w-full',
          {
            'bg-sincere-green text-white': privateImport,
          },
          className,
        ])}
      >
        <TextUppercase white={privateImport}>Privatimport</TextUppercase>
      </button>
      <button
        onClick={() => dispatch(actions.importTypeToggled(false))}
        className={combineClasses([
          'focus:outline-none border py-3 px-6 flex items-center justify-center border-sincere-green sm:w-1/2 w-full',
          {
            'bg-sincere-green text-white': !privateImport,
          },
          className,
        ])}
      >
        <TextUppercase white={!privateImport}>Restaurang</TextUppercase>
      </button>
    </div>
  );
};

export default Button;
