export default {
  type: 'object',
  name: 'wineQuantity',
  title: 'Quantity of wine type in mixed wine case',
  fields: [
    {
      title: 'Wine',
      name: 'wine',
      type: 'reference',
      to: [{ type: 'wine' }],
      validate: R => R.required(),
    },
    {
      title: 'Quantity',
      name: 'quantity',
      type: 'number',
      description: 'The quantity of the wine type',
      validate: R => R.required(),
    },
  ],
};
