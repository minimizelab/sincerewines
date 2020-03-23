import { MdSettings } from 'react-icons/md';

export default {
  title: 'Site Settings',
  name: 'settings',
  icon: MdSettings,
  type: 'document',
  __experimental_actions: [/* 'create', 'delete', */ 'update', 'publish'],
  fields: [
    {
      title: 'Site Title',
      name: 'title',
      type: 'string',
      description: 'The title of the site',
      validation: R => R.required(),
    },
    {
      title: 'Menu items',
      name: 'menuItems',
      type: 'array',
      of: [{ type: 'menuItem' }],
    },
  ],
};
