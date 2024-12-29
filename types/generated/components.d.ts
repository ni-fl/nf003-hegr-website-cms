import type { Struct, Schema } from '@strapi/strapi';

export interface SectionTimeline extends Struct.ComponentSchema {
  collectionName: 'components_section_timelines';
  info: {
    displayName: 'Timeline';
    icon: 'alien';
    description: '';
  };
  attributes: {
    events: Schema.Attribute.Component<'partial.timeline', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionTeaser extends Struct.ComponentSchema {
  collectionName: 'components_section_teasers';
  info: {
    displayName: 'Teaser';
    icon: 'alien';
  };
  attributes: {
    heading: Schema.Attribute.Component<'partial.heading', false>;
  };
}

export interface SectionTeam extends Struct.ComponentSchema {
  collectionName: 'components_section_teams';
  info: {
    displayName: 'Team';
    icon: 'alien';
  };
  attributes: {
    team: Schema.Attribute.Relation<'oneToMany', 'api::person.person'>;
  };
}

export interface SectionSpacer extends Struct.ComponentSchema {
  collectionName: 'components_section_spacers';
  info: {
    displayName: 'Spacer';
    icon: 'alien';
    description: '';
  };
  attributes: {
    amount: Schema.Attribute.Enumeration<
      [
        'extra-extra-small',
        'extra-small',
        'small',
        'medium',
        'large',
        'extra-large',
        'extra-extra-large',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionSmallLink extends Struct.ComponentSchema {
  collectionName: 'components_section_small_links';
  info: {
    displayName: 'Small Link';
    icon: 'alien';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionProjects extends Struct.ComponentSchema {
  collectionName: 'components_section_projects';
  info: {
    displayName: 'Projects';
    icon: 'alien';
  };
  attributes: {
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
  };
}

export interface SectionParagraph extends Struct.ComponentSchema {
  collectionName: 'components_section_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'alien';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.String;
  };
}

export interface SectionIntro extends Struct.ComponentSchema {
  collectionName: 'components_section_intros';
  info: {
    displayName: 'Intro';
    icon: 'alien';
    description: '';
  };
  attributes: {
    headings: Schema.Attribute.Component<'partial.heading', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    link: Schema.Attribute.Component<'partial.link', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionHeroImage extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_images';
  info: {
    displayName: 'Hero Image';
    icon: 'alien';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SectionCards extends Struct.ComponentSchema {
  collectionName: 'components_section_cards';
  info: {
    displayName: 'Cards';
    icon: 'alien';
    description: '';
  };
  attributes: {
    cards: Schema.Attribute.Component<'partial.card', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionArticle extends Struct.ComponentSchema {
  collectionName: 'components_section_articles';
  info: {
    displayName: 'Article';
    icon: 'alien';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    infos: Schema.Attribute.Component<'partial.info', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface SectionAddress extends Struct.ComponentSchema {
  collectionName: 'components_section_addresses';
  info: {
    displayName: 'Address';
    icon: 'alien';
    description: '';
  };
  attributes: {
    company: Schema.Attribute.Component<'partial.linklist', false>;
    contact: Schema.Attribute.Component<'partial.linklist', false>;
    post: Schema.Attribute.Component<'partial.linklist', false>;
    office: Schema.Attribute.Component<'partial.linklist', false>;
  };
}

export interface PartialVideo extends Struct.ComponentSchema {
  collectionName: 'components_partial_videos';
  info: {
    displayName: 'Video';
    icon: 'alien';
  };
  attributes: {
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
    poster: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface PartialValue extends Struct.ComponentSchema {
  collectionName: 'components_partial_values';
  info: {
    displayName: 'Value';
    icon: 'alien';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface PartialTimeline extends Struct.ComponentSchema {
  collectionName: 'components_partial_timelines';
  info: {
    displayName: 'Event';
    icon: 'alien';
    description: '';
  };
  attributes: {
    date: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface PartialText extends Struct.ComponentSchema {
  collectionName: 'components_partial_texts';
  info: {
    displayName: 'text';
    icon: 'alien';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

export interface PartialLinklist extends Struct.ComponentSchema {
  collectionName: 'components_partial_linklists';
  info: {
    displayName: 'Linklist';
    icon: 'alien';
  };
  attributes: {
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'partial.link', true>;
  };
}

export interface PartialLink extends Struct.ComponentSchema {
  collectionName: 'components_partial_links';
  info: {
    displayName: 'Link';
    icon: 'alien';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String;
  };
}

export interface PartialInfo extends Struct.ComponentSchema {
  collectionName: 'components_partial_infos';
  info: {
    displayName: 'Info';
    icon: 'alien';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface PartialImage extends Struct.ComponentSchema {
  collectionName: 'components_partial_images';
  info: {
    displayName: 'Image';
    icon: 'alien';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface PartialHeading extends Struct.ComponentSchema {
  collectionName: 'components_partial_headings';
  info: {
    displayName: 'Heading';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
    level: Schema.Attribute.Enumeration<['h1', 'h2', 'h3']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'h1'>;
  };
}

export interface PartialCard extends Struct.ComponentSchema {
  collectionName: 'components_partial_cards';
  info: {
    displayName: 'Card';
    icon: 'alien';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    values: Schema.Attribute.Component<'partial.value', true> &
      Schema.Attribute.Required;
  };
}

export interface GeneralMetadata extends Struct.ComponentSchema {
  collectionName: 'components_general_metadata';
  info: {
    displayName: 'Metadata';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

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
    description: '';
  };
  attributes: {
    subheading: Schema.Attribute.String;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
    timelines: Schema.Attribute.Component<'partial.timeline', true>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'section.timeline': SectionTimeline;
      'section.teaser': SectionTeaser;
      'section.team': SectionTeam;
      'section.spacer': SectionSpacer;
      'section.small-link': SectionSmallLink;
      'section.projects': SectionProjects;
      'section.paragraph': SectionParagraph;
      'section.intro': SectionIntro;
      'section.hero-image': SectionHeroImage;
      'section.cards': SectionCards;
      'section.article': SectionArticle;
      'section.address': SectionAddress;
      'partial.video': PartialVideo;
      'partial.value': PartialValue;
      'partial.timeline': PartialTimeline;
      'partial.text': PartialText;
      'partial.linklist': PartialLinklist;
      'partial.link': PartialLink;
      'partial.info': PartialInfo;
      'partial.image': PartialImage;
      'partial.heading': PartialHeading;
      'partial.card': PartialCard;
      'general.metadata': GeneralMetadata;
      'general.media': GeneralMedia;
      'general.listing': GeneralListing;
      'general.link': GeneralLink;
      'general.info': GeneralInfo;
      'general.impression': GeneralImpression;
      'general.image': GeneralImage;
      'general.history': GeneralHistory;
      'general.event': GeneralEvent;
      'general.button': GeneralButton;
    }
  }
}
