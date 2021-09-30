import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import blockContent from './blockContent';
import category from './category';
import subcategory from './subcategory';
import product from './product';
import productVariant from './productVariant';
import localeString from './locale/String';
import localeText from './locale/Text';
import localeBlockContent from './locale/BlockContent';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    product,
    category,
    subcategory,
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
  ]),
})
