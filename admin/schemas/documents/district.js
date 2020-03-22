export default {
  title: 'District',
  name: 'district',
  type: 'document',
  description: 'A wine district',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'The name (and quality label) of the wine district',
      validation: R => R.required(),
    },
    {
      title: 'Country',
      name: 'country',
      type: 'string',
      description: 'The country of the wine district',
      validation: R => R.required(),
    },
  ],
};
