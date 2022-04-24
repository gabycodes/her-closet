import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as IconComponent } from './Icon';

export default {
  title: 'Example/Icon',
  component: IconComponent,
} as ComponentMeta<typeof IconComponent>;

const Template: ComponentStory<typeof IconComponent> = (args) => (
  <IconComponent {...args} />
);

export const Icon = Template.bind({});

Icon.args = {
  name: 'search',
  size: 'md',
};

Icon.argTypes = {
  name: {
    options: ['search', 'cart', 'bookmark'],
    control: { type: 'radio' },
  },
};
