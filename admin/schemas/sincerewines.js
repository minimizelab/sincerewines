// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Import types
import wine from './types/wine';
import maker from './types/maker';
import grape from './types/grape';
import producer from './types/producer';
// import post from './types/post';
// import page from './types/page';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'sincerewines',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([wine, maker, grape, producer]),
});
