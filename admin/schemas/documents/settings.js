export default {
  title: 'Site Settings',
  name: 'settings',
  type: 'document',
  __experimental_actions: [/* create, delete, */ 'update', 'publish'],
  fields: [
    {
      title: 'Site Title',
      name: 'title',
      type: 'string',
      description: 'The title of the site',
      validation: R => R.required(),
    },
  ],
};
