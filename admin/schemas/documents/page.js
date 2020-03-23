import { IoMdDocument } from 'react-icons/io';

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: IoMdDocument,
  description: 'A Page',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'The title of the page',
      validation: R => R.required(),
    },
    {
      Title: 'Path',
      name: 'path',
      type: 'slug',
      description: 'The unique url name for the page',
      validation: R => R.required(),
      options: {
        source: doc => doc.title,
      },
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      description: 'Content of the page',
      of: [{ type: 'block' }, { type: 'arrowLink' }],
      validation: R => R.required(),
    },
  ],
};
