// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import featured from './featured';
import category from './category';
import restaurant from './restaurant';
import dish from './dish';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    types: schemaTypes.concat([restaurant, dish, category, featured]),
});
