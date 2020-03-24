import { IoMdPerson } from 'react-icons/io';

export default {
  title: 'Maker',
  name: 'maker',
  type: 'document',
  icon: IoMdPerson,
  description: 'A wine maker',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'The name of the maker',
      validation: R => R.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'An image of the maker',
    },
  ],
};
