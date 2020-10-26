module.exports = {
  purge: ['./src/**/*.tsx'],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fontFamily: {
      serif: ['DM Serif Display', 'serif'],
      sans: ['Source Sans Pro', 'sans-serif'],
    },
    extend: {
      screens: {
        print: { raw: 'print' },
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      colors: {
        'sincere-green': '#153621',
        'sincere-grape': '#7D9AB2',
        'sincere-wine': '#711D25',
        'sincere-riesling': '#D6E49D',
        'sincere-rose': '#ECC4B5',
        'sincere-background': '#F3F4ED',
      },
      height: {
        140: '140px',
        208: '208px',
        270: '270px',
        400: '400px',
        500: '500px',
        800: '800px',
      },
      width: {
        300: '300px',
        400: '400px',
        500: '500px',
      },
      minWidth: {
        150: '150px',
        250: '250px',
        card: '300px',
      },
      maxWidth: {
        content: '1440px',
      },
      maxHeight: {
        800: '800px',
        400: '400px',
        500: '500px',
      },
      minHeight: {
        half: '50vh',
      },
    },
  },
  variants: {},
  plugins: [],
};
