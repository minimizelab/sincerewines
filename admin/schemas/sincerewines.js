// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Import document types
import wine from './documents/wine';
import maker from './documents/maker';
import grape from './documents/grape';
import district from './documents/district';
import producer from './documents/producer';
import wineCase from './documents/wineCase';
import settings from './documents/settings';
import homePage from './documents/homePage';
// import post from './types/post';
import page from './documents/page';

// Import object types
import arrowLink from './objects/arrowLink';
import wineQuantity from './objects/wineQuantity';
import actionLink from './objects/actionLink';
import menuItem from './objects/menuItem';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'sincerewines',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    wine,
    settings,
    homePage,
    menuItem,
    actionLink,
    maker,
    grape,
    district,
    producer,
    wineCase,
    page,
    arrowLink,
    wineQuantity,
  ]),
});
