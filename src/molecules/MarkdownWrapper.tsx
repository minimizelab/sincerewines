import React, { FunctionComponent } from 'react';
import classes from '../styles/markdownWrapper.module.css';
import { combineClasses } from '../utils/helpers';

interface Props {
  html: string;
  className?: string;
}

const MarkdownWrapper: FunctionComponent<Props> = ({ html, className }) => (
  <div
    dangerouslySetInnerHTML={{ __html: html }}
    className={combineClasses([classes.markdownContainer, className])}
  ></div>
);

export default MarkdownWrapper;
