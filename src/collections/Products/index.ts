import { CollectionConfig } from 'payload/types';
import { ProductSelect } from './ui/ProductSelect';
import { slugField } from '../../fields/slug';
import { hero } from '../../fields/hero';
import { CallToAction } from '../../blocks/CallToAction';
import { Content } from '../../blocks/Content';
import { MediaBlock } from '../../blocks/Media';
import { checkSubscriptions } from './access/checkSubscriptions';
import { beforeProductChange } from './hooks/beforeChange';
import { admins } from '../../access/admins';
import { Archive } from '../../blocks/Archive';
import { populateArchiveBlock } from '../../hooks/populateArchiveBlock';
import { populatePublishedDate } from '../../hooks/populatePublishedDate';

export const ProductFields: CollectionConfig['fields'] = [
  {
    name: 'title',
    type: 'text',
    required: true,
  },
  {
    name: 'publishedDate',
    type: 'date',
    admin: {
      position: 'sidebar',
    },
  },
  {
    type: 'tabs',
    tabs: [
      {
        label: 'Content',
        fields: [
          {
            name: 'layout',
            type: 'blocks',
            required: true,
            blocks: [
              CallToAction,
              Content,
              MediaBlock,
              Archive
            ]
          }
        ]
      },
      {
        label: 'Product Details',
        fields: [
          {
            name: 'stripeProductID',
            label: 'Stripe Product',
            type: 'text',
            admin: {
              components: {
                Field: ProductSelect
              }
            }
          },
          {
            name: "priceJSON",
            label: "Price JSON",
            type: "textarea",
            admin: {
              readOnly: true,
              rows: 10
            }
          },
        ]
      },
      {
        label: 'Paywall',
        fields: [
          {
            name: 'paywall',
            label: 'Paywall',
            type: 'array',
            access: {
              read: checkSubscriptions,
            },
            fields: []
          },
        ]
      }
    ],
  },
  {
    name: 'categories',
    type: 'relationship',
    relationTo: 'categories',
    hasMany: true,
    admin: {
      position: 'sidebar',
    }
  },
  slugField(),
  {
    name: "skipSync",
    label: "Skip Sync",
    type: "checkbox",
    admin: {
      position: 'sidebar',
      readOnly: true,
      hidden: true,
    }
  },
]

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: [
      'title',
      'stripeProductID',
      '_status'
    ]
  },
  hooks: {
    beforeChange: [
      populatePublishedDate,
      beforeProductChange,
    ],
    afterRead: [
      populateArchiveBlock
    ],
  },
  versions: {
    drafts: true
  },
  access: {
    read: () => true,
    create: admins,
    update: admins,
    delete: admins
  },
  fields: ProductFields,
}

export default Products;
