import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as HeadingComponent } from './Heading';

export default {
  title: 'Example/Typography',
  component: HeadingComponent,
} as ComponentMeta<typeof HeadingComponent>;

const Template: ComponentStory<typeof HeadingComponent> = (args) => (
  <HeadingComponent {...args} />
);

export const Heading = Template.bind({});

Heading.args = {
  text: "Here's a heading",
  tag: 'h1',
};

Heading.argTypes = {
  tag: {
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    control: { type: 'radio' },
  },
};
