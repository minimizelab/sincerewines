export default {
  title: 'Wine',
  name: 'wine',
  type: 'document',
  description: 'A wine',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'The name of the wine',
      validation: R => R.required(),
    },
    {
      title: 'Year',
      name: 'year',
      type: 'number',
      description: 'The year the wine was produced',
      validation: R =>
        R.required()
          .integer()
          .min(1900)
          .max(9999),
    },
    {
      Title: 'Path',
      name: 'path',
      type: 'slug',
      description: 'The unique url name for the wine',
      validation: R => R.required(),
      options: {
        source: doc => doc.name + '-' + doc.year,
      },
    },
    {
      title: 'Grapes',
      name: 'grapes',
      type: 'array',
      description: 'The grapes the wine is made with',
      of: [
        {
          type: 'reference',
          to: [{ type: 'grape' }],
        },
      ],
      validation: R => R.required(),
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      description: 'The type of the wine',
      validation: R => R.required(),
      options: {
        list: ['White', 'Red', 'Rose'],
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'An image of the wine',
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'array',
      description: 'A description of the wine',
      of: [{ type: 'block' }],
    },
    {
      title: 'Producer',
      name: 'producer',
      type: 'reference',
      to: [{ type: 'producer' }],
      validation: R => R.required(),
    },
    {
      title: 'Article number',
      name: 'articleNumber',
      type: 'string',
    },
    {
      title: 'Volume',
      name: 'vol',
      type: 'number',
      description: 'The volume in cl',
      validation: R => R.required().integer(),
    },
    {
      title: 'Package Requirement',
      name: 'packageRequirement',
      type: 'boolean',
      validation: R => R.required(),
    },
    {
      title: 'Alcohol',
      name: 'alc',
      type: 'number',
      description: 'The percentage of alcohol',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      description: 'A link to systembolaget',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'year',
      media: 'image',
    },
  },
};

// const wine = {
//   name: 'Kammern',
//   producer: 'Hirsch',
//   year: '2017',
//   grape: 'Grüner Veltliner',
//   district: 'Kamptal, Österrike',
//   type: 'white',
//   price: 199,
//   volume: 75,
//   kollikrav: false,
//   food:
//     'Läskande som apéritif, och utsökt till lite kraftigare fiskrätter eller lättare rätter av kyckling/kalkon eller fläskkött, samt till det asiatiska eller indiska köket med lite hetta.',
//   alcohol: 12,
//   articleNr: '78991',
//   systembolaget: true,
//   link: 'https://www.systembolaget.se/dryck/vita-viner/hirsch-7899101',
//   image: '../images/kammern2016.png',
//   slug: '/sortiment/kammern2017',
//   reward:
//     'Årgången 2017 fick 93/100 av James Suckling och 92/100 av Wine Enthusiast och Österrikes ledande vinmagasin Falstaff.',
//   description:
//     'Druvorna till denna klassiska Grüner Veltliner är hämtade från yngre vinstockar enbart odlade på Hirschs Erste Lagen-områden. Både spontanjäsning och lagring sker på ståltank. Doft och smak av frisk frukt dominerad av gröna päron samt citrus tillsammans med en lätt pepprighet och örtighet i avslutet. Inslag av mineral och distinkta syror ger en ljuvlig balans. Drickfärdigt, men något eller några års lagring kommer ge läckra mognadstoner.',
// };
