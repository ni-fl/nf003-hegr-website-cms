import type { Struct, Schema } from '@strapi/strapi';

export interface GeneralMedia extends Struct.ComponentSchema {
  collectionName: 'components_general_media';
  info: {
    displayName: 'Video';
    description: '';
  };
  attributes: {
    video: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
    poster: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
  };
}

export interface GeneralListing extends Struct.ComponentSchema {
  collectionName: 'components_general_listings';
  info: {
    displayName: 'Listing';
    icon: 'apps';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface GeneralLink extends Struct.ComponentSchema {
  collectionName: 'components_general_links';
  info: {
    displayName: 'Link';
    icon: 'cursor';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String;
  };
}

export interface GeneralInfo extends Struct.ComponentSchema {
  collectionName: 'components_general_infos';
  info: {
    displayName: 'Info';
    icon: 'lightbulb';
  };
  attributes: {
    subheading: Schema.Attribute.String;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface GeneralImpression extends Struct.ComponentSchema {
  collectionName: 'components_general_impressions';
  info: {
    displayName: 'Impression';
    icon: 'earth';
  };
  attributes: {
    format: Schema.Attribute.Enumeration<['alpha', 'beta', 'gamma']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'alpha'>;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface GeneralImage extends Struct.ComponentSchema {
  collectionName: 'components_general_images';
  info: {
    displayName: 'Image';
    icon: 'dashboard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GeneralHistory extends Struct.ComponentSchema {
  collectionName: 'components_general_histories';
  info: {
    displayName: 'History';
    icon: 'rotate';
    description: '';
  };
  attributes: {
    events: Schema.Attribute.Component<'general.event', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    subheading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralEvent extends Struct.ComponentSchema {
  collectionName: 'components_general_events';
  info: {
    displayName: 'Event';
    icon: 'search';
    description: '';
  };
  attributes: {
    date: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralButton extends Struct.ComponentSchema {
  collectionName: 'components_general_buttons';
  info: {
    displayName: 'Button';
    icon: 'paperPlane';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralAddress extends Struct.ComponentSchema {
  collectionName: 'components_general_addresses';
  info: {
    displayName: 'Address';
    icon: 'key';
    description: '';
  };
  attributes: {
    links: Schema.Attribute.Component<'general.link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 10;
        },
        number
      >;
    heading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.media': GeneralMedia;
      'general.listing': GeneralListing;
      'general.link': GeneralLink;
      'general.info': GeneralInfo;
      'general.impression': GeneralImpression;
      'general.image': GeneralImage;
      'general.history': GeneralHistory;
      'general.event': GeneralEvent;
      'general.button': GeneralButton;
      'general.address': GeneralAddress;
    }
  }
}
