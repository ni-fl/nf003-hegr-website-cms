import type { Struct, Schema } from '@strapi/strapi';

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

export interface SectionImpression extends Struct.ComponentSchema {
  collectionName: 'components_section_impressions';
  info: {
    displayName: 'Impression';
    icon: 'alien';
  };
  attributes: {
    format: Schema.Attribute.Enumeration<['alpha', 'beta', 'gamma']> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionHeroImage extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_images';
  info: {
    displayName: 'Hero Image';
    icon: 'alien';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    hasPadding: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.metadata': GeneralMetadata;
      'section.teaser': SectionTeaser;
      'section.team': SectionTeam;
      'section.spacer': SectionSpacer;
      'section.projects': SectionProjects;
      'section.paragraph': SectionParagraph;
      'section.intro': SectionIntro;
      'section.impression': SectionImpression;
      'section.hero-image': SectionHeroImage;
      'section.cards': SectionCards;
      'section.article': SectionArticle;
      'section.address': SectionAddress;
      'partial.video': PartialVideo;
      'partial.value': PartialValue;
      'partial.timeline': PartialTimeline;
      'partial.text': PartialText;
      'partial.paragraph': PartialParagraph;
      'partial.linklist': PartialLinklist;
      'partial.link': PartialLink;
      'partial.info': PartialInfo;
      'partial.image': PartialImage;
      'partial.history': PartialHistory;
      'partial.heading': PartialHeading;
      'partial.card': PartialCard;
    }
  }
}
