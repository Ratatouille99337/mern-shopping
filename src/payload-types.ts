/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Settings {
  id: string;
  shopPage?: string | Page;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  publishedDate?: string;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links: {
      link: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference: {
          value: string | Page;
          relationTo: 'pages';
        };
        url: string;
        label: string;
        appearance?: 'default' | 'primary' | 'secondary';
      };
      id?: string;
    }[];
    media: string | Media;
  };
  layout: (
    | {
        ctaBackgroundColor?: 'white' | 'black';
        richText: {
          [k: string]: unknown;
        }[];
        links: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        contentBackgroundColor?: 'white' | 'black';
        columns: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        mediaBlockBackgroundColor?: 'white' | 'black';
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'products';
        categories?: string[] | Category[];
        limit?: number;
        selectedDocs?:
          | {
              value: string;
              relationTo: 'products';
            }[]
          | {
              value: Product;
              relationTo: 'products';
            }[];
        populatedDocs?:
          | {
              value: string;
              relationTo: 'products';
            }[]
          | {
              value: Product;
              relationTo: 'products';
            }[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
  )[];
  slug?: string;
  meta: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  _status?: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  caption?: {
    [k: string]: unknown;
  }[];
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  title?: string;
  parent?: string | Category;
  breadcrumbs: {
    doc?: string | Category;
    url?: string;
    label?: string;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: string;
  title: string;
  publishedDate?: string;
  layout: (
    | {
        ctaBackgroundColor?: 'white' | 'black';
        richText: {
          [k: string]: unknown;
        }[];
        links: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        contentBackgroundColor?: 'white' | 'black';
        columns: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        mediaBlockBackgroundColor?: 'white' | 'black';
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'products';
        categories?: string[] | Category[];
        limit?: number;
        selectedDocs?:
          | {
              value: string;
              relationTo: 'products';
            }[]
          | {
              value: Product;
              relationTo: 'products';
            }[];
        populatedDocs?:
          | {
              value: string;
              relationTo: 'products';
            }[]
          | {
              value: Product;
              relationTo: 'products';
            }[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
  )[];
  stripeProductID?: string;
  priceJSON?: string;
  paywall: {
    id?: string;
  }[];
  categories?: string[] | Category[];
  slug?: string;
  skipSync?: boolean;
  meta: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  _status?: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  navItems: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
    };
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  navItems: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
    };
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cart-page".
 */
export interface CartPage {
  id: string;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links: {
      link: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference: {
          value: string | Page;
          relationTo: 'pages';
        };
        url: string;
        label: string;
        appearance?: 'default' | 'primary' | 'secondary';
      };
      id?: string;
    }[];
    media: string | Media;
  };
  layout: (
    | {
        ctaBackgroundColor?: 'white' | 'black';
        richText: {
          [k: string]: unknown;
        }[];
        links: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        contentBackgroundColor?: 'white' | 'black';
        columns: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        mediaBlockBackgroundColor?: 'white' | 'black';
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'products';
        categories?: string[] | Category[];
        limit?: number;
        selectedDocs?:
          | {
              value: string;
              relationTo: 'products';
            }[]
          | {
              value: Product;
              relationTo: 'products';
            }[];
        populatedDocs?:
          | {
              value: string;
              relationTo: 'products';
            }[]
          | {
              value: Product;
              relationTo: 'products';
            }[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
  )[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string;
  roles?: ('admin' | 'customer')[];
  purchases?: string[] | Product[];
  stripeCustomerID?: string;
  cart: {
    items: {
      product?: string | Product;
      quantity?: number;
      id?: string;
    }[];
    createdOn?: string;
    lastModified?: string;
  };
  skipSync?: boolean;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orders".
 */
export interface Order {
  id: string;
  orderedBy: {
    user?: string | User;
    name?: string;
    email?: string;
    stripeCustomerID?: string;
  };
  products: {
    product?: string | Product;
    title?: string;
    priceJSON?: string;
    stripeProductID?: string;
    quantity?: number;
    id?: string;
  }[];
  stripeInvoiceID?: string;
  stripePaymentIntentID?: string;
  createdAt: string;
  updatedAt: string;
}
