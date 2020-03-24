import { IoMdDocument } from 'react-icons/io';

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: IoMdDocument,
  description: 'A Page',
  fieldsets: [
    { title: 'Default content', name: 'consumer' },
    { title: 'Restaurant', name: 'restaurant' },
  ],
  fields: [
    {
      title: 'Title',
      name: 'consumerTitle',
      type: 'string',
      description: 'The title of the page',
      validation: R => R.required(),
      fieldset: 'consumer',
    },
    {
      title: 'Content',
      name: 'consumerContent',
      type: 'array',
      description: 'Content of the page',
      of: [{ type: 'block' }, { type: 'link' }, { type: 'image' }],
      validation: R => R.required(),
      fieldset: 'consumer',
    },
    {
      title: 'Enabled',
      name: 'restaurant',
      type: 'boolean',
      description: 'Enable restaurant content',
      fieldset: 'restaurant',
    },
    {
      title: 'Title',
      name: 'restaurantTitle',
      type: 'string',
      description: 'The title of the page',
      fieldset: 'restaurant',
    },
    {
      title: 'Content',
      name: 'restaurantContent',
      type: 'array',
      description: 'Content of the page',
      of: [{ type: 'block' }, { type: 'link' }, { type: 'image' }],
      fieldset: 'restaurant',
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
  ],
};
