import React, { FunctionComponent } from 'react';
import { combineClasses } from '@minimizelab/mini_utils';
import { useSelector, useDispatch } from 'react-redux';
import { State, AppDispatch } from '../store';
import { actions } from '../store/ui';
import TextUppercase from '../atoms/TextUppercase';

interface Props {
  onClick: () => void;
  className?: string;
  white?: boolean;
}

const Button: FunctionComponent<Props> = ({ onClick, white, className }) => {
  const dispatch = useDispatch<AppDispatch>();
  const privateImport = useSelector<State, boolean>(
    state => state.ui.privateImport
  );
  return (
    <>
      <button
        onClick={() => dispatch(actions.importTypeToggled(true))}
        className={combineClasses([
          'border py-3 px-6 flex items-center justify-center border-sincere-green outline-none',
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
          'border py-3 px-6 flex items-center justify-center border-sincere-green outline-none',
          {
            'bg-sincere-green text-white': !privateImport,
          },
          className,
        ])}
      >
        <TextUppercase white={!privateImport}>Restaurang</TextUppercase>
      </button>
    </>
  );
};

export default Button;
