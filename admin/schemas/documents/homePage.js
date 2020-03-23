export default {
  title: 'Home Page',
  name: 'homePage',
  type: 'document',
  __experimental_actions: [/* create, delete, */ 'update', 'publish'],
  description: 'The home page',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'The title of the page',
      validation: R => R.required(),
    },
    {
      title: 'Sub title',
      name: 'subTitle',
      type: 'string',
      description: 'The sub title of the page',
      validation: R => R.required(),
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{ type: 'actionLink' }],
    },
    {
      title: 'Wines',
      name: 'wines',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'wine' }] }],
      validation: R => R.max(4),
    },
  ],
};
