import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as LinkComponent } from './Link';

export default {
  title: 'Example/Link',
  component: LinkComponent,
} as ComponentMeta<typeof LinkComponent>;

const Template: ComponentStory<typeof LinkComponent> = (args) => (
  <LinkComponent {...args} />
);

export const Link = Template.bind({});

Link.args = {
  text: "Here's a link",
  url: '#',
  isExternal: false,
  noUnderline: false,
};
