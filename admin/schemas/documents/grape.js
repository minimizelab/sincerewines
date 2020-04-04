import { GiGrapes } from 'react-icons/gi';

export default {
  title: 'Grape',
  name: 'grape',
  type: 'document',
  icon: GiGrapes,
  description: 'A type of grape',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'The name of the grape',
      validation: (R) => R.required(),
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'text',
      description: 'A short text about the grape',
    },
  ],
};
