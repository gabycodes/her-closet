import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as ParagraphComponent } from './Paragraph';

export default {
  title: 'Example/Typography',
  component: ParagraphComponent,
} as ComponentMeta<typeof ParagraphComponent>;

const Template: ComponentStory<typeof ParagraphComponent> = (args) => (
  <ParagraphComponent {...args} />
);

export const Paragraph = Template.bind({});

Paragraph.args = {
  text: "Here's a paragraph",
};
