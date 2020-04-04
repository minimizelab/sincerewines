import { IoMdDocument } from 'react-icons/io';

export default {
  title: 'Orders Page',
  name: 'ordersPage',
  type: 'document',
  icon: IoMdDocument,
  __experimental_actions: [/* 'create', 'delete', */ 'update', 'publish'],
  description: 'Beställningar',
  fieldsets: [
    { name: 'consumer', title: 'Consumer' },
    { name: 'restaurant', title: 'Restaurant' },
  ],
  fields: [
    {
      title: 'Title',
      name: 'consumerTitle',
      type: 'string',
      description: 'The title of the consumer version of the page',
      validation: (R) => R.required(),
      fieldset: 'consumer',
    },
    {
      title: 'Content',
      name: 'consumerContent',
      type: 'array',
      description: 'The content of the consumer version of the page',
      of: [{ type: 'block' }, { type: 'link' }, { type: 'image' }],
      validation: (R) => R.required(),
      fieldset: 'consumer',
    },
    {
      title: 'Title',
      name: 'restaurantTitle',
      type: 'string',
      description: 'The title of the restaurant version of the page',
      validation: (R) => R.required(),
      fieldset: 'restaurant',
    },
    {
      title: 'Content',
      name: 'restaurantContent',
      type: 'array',
      description: 'The content of the restaurant version of the page',
      of: [{ type: 'block' }, { type: 'link' }, { type: 'image' }],
      validation: (R) => R.required(),
      fieldset: 'restaurant',
    },
  ],
  preview: {
    select: {
      title: 'restaurant',
    },
  },
};
