import React, { FunctionComponent } from 'react';
import { combineClasses } from '@minimizelab/mini_utils';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { actions } from '../store/ui';
import TextUppercase from '../atoms/TextUppercase';

interface Props {
  className?: string | { [key: string]: boolean };
  privateCustomer: boolean;
}

const Button: FunctionComponent<Props> = ({ className, privateCustomer }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex flex-wrap">
      <button
        onClick={(): void => {
          dispatch(actions.customerTypeToggled(true));
        }}
        className={combineClasses([
          'focus:outline-none border flex py-1 px-8 items-center justify-center border-sincere-green sm:w-1/2 w-full',
          {
            'bg-sincere-green text-white': privateCustomer,
          },
          className,
        ])}
      >
        <TextUppercase white={privateCustomer}>Privat</TextUppercase>
      </button>
      <button
        onClick={(): void => {
          dispatch(actions.customerTypeToggled(false));
        }}
        className={combineClasses([
          'focus:outline-none border py-1 px-8 flex items-center justify-center border-sincere-green sm:w-1/2 w-full',
          {
            'bg-sincere-green text-white': !privateCustomer,
          },
          className,
        ])}
      >
        <TextUppercase white={!privateCustomer}>Restaurang</TextUppercase>
      </button>
    </div>
  );
};

export default Button;
