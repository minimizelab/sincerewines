import { GiFactory } from 'react-icons/gi';

export default {
  title: 'Producer',
  name: 'producer',
  type: 'document',
  icon: GiFactory,
  description: 'A producer',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: R => R.required(),
    },
    {
      Title: 'Path',
      name: 'path',
      type: 'slug',
      description: 'The unique url name for the producer',
      validation: R => R.required(),
      options: {
        source: doc => doc.name,
      },
    },
    {
      title: 'Makers',
      name: 'makers',
      type: 'array',
      description: 'The wine makers at this producer',
      of: [
        {
          type: 'reference',
          to: [{ type: 'maker' }],
        },
      ],
      validation: R => R.required(),
    },
    {
      title: 'Grapes',
      name: 'grapes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'grape' }],
        },
      ],
      validation: R => R.required(),
    },
    {
      title: 'Main image',
      name: 'mainImg',
      type: 'image',
    },
    {
      title: 'Secondary images',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
      validation: R => R.max(3),
    },
    {
      title: 'Intro',
      name: 'intro',
      type: 'text',
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'array',
      description: 'A description of the producer',
      of: [{ type: 'block' }],
    },
  ],
};
