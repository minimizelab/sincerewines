export default {
  type: 'object',
  name: 'menuItem',
  title: 'Menu Item',
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
