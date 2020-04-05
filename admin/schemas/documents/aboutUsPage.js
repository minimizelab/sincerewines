import { IoMdDocument } from 'react-icons/io';

export default {
  title: 'About Us Page',
  name: 'aboutUsPage',
  type: 'document',
  icon: IoMdDocument,
  __experimental_actions: [/* 'create', 'delete', */ 'update', 'publish'],
  description: 'Om oss',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (R) => R.required(),
      description: 'The title of the page',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'link' }, { type: 'image' }],
      validation: (R) => R.required(),
      description: 'The content of the page',
    },
    {
      title: 'Partners intro',
      name: 'partnersIntro',
      type: 'text',
      rows: 5,
    },
    {
      title: 'Partners',
      name: 'partners',
      type: 'array',
      of: [{ type: 'partner' }],
      validation: (R) => R.required(),
    },
  ],
};
