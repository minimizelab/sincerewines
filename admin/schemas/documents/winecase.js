export default {
  title: 'Mixed Wine Case',
  name: 'winecase',
  type: 'document',
  description: 'A mixed wine case',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'The name of the mixed wine case',
      validation: R => R.required(),
    },
    {
      Title: 'Path',
      name: 'path',
      type: 'slug',
      description: 'The unique url name for the wine',
      validation: R => R.required(),
      options: {
        source: doc => doc.name,
      },
    },
    {
      title: 'Wines',
      name: 'casewines',
      type: 'array',
      description: 'The wines of in the mixed wine case',
      of: [
        {
          type: 'wineQuantity',
        },
      ],
      validation: R => R.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'An image of the wine',
    },
    {
      title: 'Article number',
      name: 'articleNumber',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'array',
      description: 'A description of the mixed wine case',
      of: [{ type: 'block' }],
    },
    {
      title: 'Assortment',
      name: 'assortment',
      type: 'string',
      description: 'The type of the assortment',
      validation: R => R.required(),
      options: {
        list: [
          'Privatimport',
          'Ev. privatimport',
          'Beställningssortiment',
          'Restaurangsortiment',
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
    },
  },
};
