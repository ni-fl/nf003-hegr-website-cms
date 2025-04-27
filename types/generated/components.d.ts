import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralMetadata extends Struct.ComponentSchema {
  collectionName: 'components_general_metadata';
  info: {
    description: '';
    displayName: 'Metadata';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartialCard extends Struct.ComponentSchema {
  collectionName: 'components_partial_cards';
  info: {
    description: '';
    displayName: 'Card';
    icon: 'alien';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    values: Schema.Attribute.Component<'partial.value', true> &
      Schema.Attribute.Required;
  };
}

export interface PartialHeading extends Struct.ComponentSchema {
  collectionName: 'components_partial_headings';
  info: {
    description: '';
    displayName: 'Heading';
  };
  attributes: {
    level: Schema.Attribute.Enumeration<['h1', 'h2', 'h3']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'h1'>;
    text: Schema.Attribute.String;
  };
}

export interface PartialHistory extends Struct.ComponentSchema {
  collectionName: 'components_partial_histories';
  info: {
    displayName: 'History';
    icon: 'alien';
  };
  attributes: {
    events: Schema.Attribute.Component<'partial.timeline', true>;
    heading: Schema.Attribute.String;
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

export interface PartialLink extends Struct.ComponentSchema {
  collectionName: 'components_partial_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'alien';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface PartialParagraph extends Struct.ComponentSchema {
  collectionName: 'components_partial_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'alien';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
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

export interface PartialTimeline extends Struct.ComponentSchema {
  collectionName: 'components_partial_timelines';
  info: {
    description: '';
    displayName: 'Event';
    icon: 'alien';
  };
  attributes: {
    date: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
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

export interface PartialVideo extends Struct.ComponentSchema {
  collectionName: 'components_partial_videos';
  info: {
    displayName: 'Video';
    icon: 'alien';
  };
  attributes: {
    poster: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface SectionAddress extends Struct.ComponentSchema {
  collectionName: 'components_section_addresses';
  info: {
    description: '';
    displayName: 'Address';
    icon: 'alien';
  };
  attributes: {
    company: Schema.Attribute.Component<'partial.linklist', false>;
    contact: Schema.Attribute.Component<'partial.linklist', false>;
    office: Schema.Attribute.Component<'partial.linklist', false>;
    post: Schema.Attribute.Component<'partial.linklist', false>;
  };
}

export interface SectionArticle extends Struct.ComponentSchema {
  collectionName: 'components_section_articles';
  info: {
    description: '';
    displayName: 'Article';
    icon: 'alien';
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

export interface SectionCards extends Struct.ComponentSchema {
  collectionName: 'components_section_cards';
  info: {
    description: '';
    displayName: 'Cards';
    icon: 'alien';
  };
  attributes: {
    cards: Schema.Attribute.Component<'partial.card', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionHeroImage extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_images';
  info: {
    description: '';
    displayName: 'Hero Image';
    icon: 'alien';
  };
  attributes: {
    hasPadding: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SectionImpression extends Struct.ComponentSchema {
  collectionName: 'components_section_impressions';
  info: {
    description: '';
    displayName: 'Impression';
    icon: 'alien';
  };
  attributes: {
    format: Schema.Attribute.Enumeration<
      ['alpha', 'beta', 'gamma', 'gamma-left', 'gamma-right']
    > &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionIntro extends Struct.ComponentSchema {
  collectionName: 'components_section_intros';
  info: {
    description: '';
    displayName: 'Intro';
    icon: 'alien';
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

export interface SectionParagraph extends Struct.ComponentSchema {
  collectionName: 'components_section_paragraphs';
  info: {
    description: '';
    displayName: 'Paragraph';
    icon: 'alien';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
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

export interface SectionSpacer extends Struct.ComponentSchema {
  collectionName: 'components_section_spacers';
  info: {
    description: '';
    displayName: 'Spacer';
    icon: 'alien';
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.metadata': GeneralMetadata;
      'partial.card': PartialCard;
      'partial.heading': PartialHeading;
      'partial.history': PartialHistory;
      'partial.image': PartialImage;
      'partial.info': PartialInfo;
      'partial.link': PartialLink;
      'partial.linklist': PartialLinklist;
      'partial.paragraph': PartialParagraph;
      'partial.text': PartialText;
      'partial.timeline': PartialTimeline;
      'partial.value': PartialValue;
      'partial.video': PartialVideo;
      'section.address': SectionAddress;
      'section.article': SectionArticle;
      'section.cards': SectionCards;
      'section.hero-image': SectionHeroImage;
      'section.impression': SectionImpression;
      'section.intro': SectionIntro;
      'section.paragraph': SectionParagraph;
      'section.projects': SectionProjects;
      'section.spacer': SectionSpacer;
      'section.team': SectionTeam;
      'section.teaser': SectionTeaser;
    }
  }
}
