import { MdHome } from 'react-icons/md';

export default {
  title: 'Home Page',
  name: 'homePage',
  type: 'document',
  icon: MdHome,
  __experimental_actions: [/* 'create', 'delete', */ 'update', 'publish'],
  description: 'The home page',
  fieldsets: [
    { name: 'header', title: 'Header section' },
    { name: 'greeting', title: 'Greeting section' },
  ],
  fields: [
    {
      title: 'Title',
      name: 'headerTitle',
      type: 'string',
      description: 'The title of the page',
      validation: R => R.required(),
      fieldset: 'header',
    },
    {
      title: 'Sub title',
      name: 'headerSubTitle',
      type: 'text',
      rows: 3,
      description: 'The sub title of the page',
      validation: R => R.required(),
      fieldset: 'header',
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{ type: 'actionLink' }],
      validation: R => R.max(3).min(3),
    },
    {
      title: 'Wines',
      name: 'wines',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'wine' }] }],
      validation: R => R.max(4),
    },
    {
      title: 'Title',
      name: 'greetingTitle',
      type: 'string',
      description: 'The title of the content section',
      validation: R => R.required(),
      fieldset: 'greeting',
    },
    {
      title: 'Content',
      name: 'greetingContent',
      type: 'array',
      description: 'The body of the content section',
      of: [{ type: 'block' }, { type: 'arrowLink' }],
      validation: R => R.required(),
      fieldset: 'greeting',
    },
  ],
};
