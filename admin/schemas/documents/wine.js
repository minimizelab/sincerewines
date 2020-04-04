import { GiWineBottle } from 'react-icons/gi';

export default {
  title: 'Wine',
  name: 'wine',
  type: 'document',
  icon: GiWineBottle,
  description: 'A wine',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'The name of the wine',
      validation: (R) => R.required(),
    },
    {
      title: 'Year',
      name: 'year',
      type: 'number',
      description: 'The year the wine was produced',
      validation: (R) => R.required().integer().min(1900).max(9999),
    },
    {
      Title: 'Path',
      name: 'path',
      type: 'slug',
      description: 'The unique url name for the wine',
      validation: (R) => R.required(),
      options: {
        source: (doc) => doc.name + '-' + doc.year,
      },
    },
    {
      title: 'Grapes',
      name: 'grapes',
      type: 'array',
      description: 'The grapes the wine is made with',
      of: [
        {
          type: 'reference',
          to: [{ type: 'grape' }],
        },
      ],
      validation: (R) => R.required(),
    },
    {
      title: 'District',
      name: 'district',
      description: 'The district where the wine is produced',
      type: 'reference',
      to: [{ type: 'district' }],
      validation: (R) => R.required(),
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      description: 'The type of the wine',
      validation: (R) => R.required(),
      options: {
        list: ['White', 'Red', 'Rose'],
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'An image of the wine',
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'array',
      description: 'A description of the wine',
      of: [{ type: 'block' }],
    },
    {
      title: 'Producer',
      name: 'producer',
      type: 'reference',
      to: [{ type: 'producer' }],
      validation: (R) => R.required(),
    },
    {
      title: 'Article number',
      name: 'articleNumber',
      type: 'string',
    },
    {
      title: 'Volume',
      name: 'vol',
      type: 'number',
      description: 'The volume in cl',
      validation: (R) => R.required().integer(),
    },
    {
      title: 'Package Requirement',
      name: 'packageRequirement',
      type: 'boolean',
      validation: (R) => R.required(),
    },
    {
      title: 'Alcohol',
      name: 'alc',
      type: 'number',
      description: 'The percentage of alcohol',
    },
    {
      title: 'Assortment',
      name: 'assortment',
      type: 'string',
      description: 'The type of the assortment',
      validation: (R) => R.required(),
      options: {
        list: [
          'Privatimport',
          'Ev. privatimport',
          'Beställningssortiment',
          'Restaurangsortiment',
          'Fast sortiment',
          'Tillfälligt sortiment',
        ],
      },
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      description: 'Price for private customers',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      description: 'A link to systembolaget',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'year',
      media: 'image',
    },
  },
};
