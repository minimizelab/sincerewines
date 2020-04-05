export default {
  type: 'object',
  name: 'link',
  title: 'Link',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'The title of the link',
      validate: (R) => R.required(),
    },
    {
      title: 'Link',
      name: 'link',
      type: 'string',
      description: 'A link to somewhere',
      validate: (R) => R.required(),
    },
    {
      title: 'Size',
      name: 'size',
      type: 'string',
      description: 'The size of the link when displayed on the site',
      validate: (R) => R.required(),
      options: {
        list: ['Default', 'Big'],
      },
    },
  ],
};
