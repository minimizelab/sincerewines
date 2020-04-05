import { IoMdDocument } from 'react-icons/io';

export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  icon: IoMdDocument,
  description: 'A news post',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'The title of the post',
      validation: (R) => R.required(),
    },
    {
      title: 'Publish Date',
      name: 'date',
      type: 'date',
      description: 'The date the post is published on',
      validation: (R) => R.required(),
    },
    {
      title: 'Feature Image',
      name: 'featureImage',
      type: 'image',
      description: '',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      description: 'Content of the page',
      of: [{ type: 'block' }, { type: 'link' }, { type: 'image' }],
      validation: (R) => R.required(),
    },
    {
      Title: 'Path',
      name: 'path',
      type: 'slug',
      description:
        'The unique url for the post, click "Genereate" and only edit if needed.',
      validation: (R) => R.required(),
      options: {
        source: (doc) => {
          const fullDate = new Date(doc.date);
          const month =
            fullDate.getMonth().toString().length === 1
              ? `0${fullDate.getMonth()}`
              : fullDate.getMonth();
          const date =
            fullDate.getDate().toString().length === 1
              ? `0${fullDate.getDate()}`
              : fullDate.getDate();
          return `${doc.title}-${fullDate.getFullYear()}-${month}-${date}`;
        },
      },
    },
  ],
  initialValue: {
    date: new Date().toISOString(),
  },
};
