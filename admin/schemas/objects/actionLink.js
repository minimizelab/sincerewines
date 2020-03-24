export default {
  type: 'object',
  name: 'actionLink',
  title: 'Action Link',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'The title of the link',
      validate: R => R.required(),
    },
    {
      title: 'Sub title',
      name: 'subTitle',
      type: 'text',
      rows: 3,
      description: 'The sub title of the page',
      validation: R => R.required(),
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
