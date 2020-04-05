import { IoMdDocument } from 'react-icons/io';

export default {
  title: 'Region Page',
  name: 'regionPage',
  type: 'document',
  icon: IoMdDocument,
  __experimental_actions: [/* 'create', 'delete', */ 'update', 'publish'],
  description: 'Regionen',
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
  ],
};
