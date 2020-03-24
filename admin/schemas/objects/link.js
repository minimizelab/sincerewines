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
      validate: R => R.required(),
    },
    {
      title: 'Link',
      name: 'link',
      type: 'string',
      description: 'A link to somewhere',
      validate: R => R.required(),
    },
  ],
};
