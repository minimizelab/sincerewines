import React, { FunctionComponent } from 'react';
import { combineClasses } from '../utils/functions';

interface Props {
  className?: string;
}

const Section: FunctionComponent<Props> = ({ children, className }) => (
  <section className="flex flex-row justify-center w-full">
    <div className={combineClasses(['flex w-full max-w-content', className])}>
      {children}
    </div>
  </section>
);

export default Section;
