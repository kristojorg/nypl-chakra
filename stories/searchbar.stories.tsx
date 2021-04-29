import * as React from 'react';
import Searchbar from '../src/components/Searchbar';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Searchbar',
  component: Searchbar,
} as Meta;

const Template: Story<React.ComponentProps<typeof Searchbar>> = args => (
  <Searchbar {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const HelpText = Template.bind({});
HelpText.args = { helpText: 'Try: "Jenny Zhang" or "Michael Pollan"' };

export const Errored = Template.bind({});
Errored.args = {
  ...Default.args,
  isInvalid: true,
  errorText: 'Enter some text to search.',
};

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, isDisabled: true };
