import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import figure from './figure'
import mainImage from './mainImage'
import post from './post'
import slideshow from './slideshow'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    category,
    figure,
    mainImage,
    post,
    slideshow
  ])
})