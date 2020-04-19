import React, { FunctionComponent } from 'react';

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantityButton: FunctionComponent<Props> = ({
  onIncrease,
  onDecrease,
}) => {
  return (
    <div>
      <svg
        onClick={onIncrease}
        className="w-3 h-3"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z"
          clipRule="evenodd"
        />
      </svg>
      <svg
        onClick={onDecrease}
        className="w-3 h-3"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default QuantityButton;
