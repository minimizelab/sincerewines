export default {
  type: 'object',
  name: 'partner',
  title: 'Partner',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'The name of the employee',
      validate: (R) => R.required(),
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string',
      description: 'A phone number',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
      description: 'An email',
    },
  ],
};
