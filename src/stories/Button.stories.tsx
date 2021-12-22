import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from "@mui/material/Button"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: { type: "select", options: ["primary", "secondary"] }},
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  color: "primary",
  variant: "contained"
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
  color: "secondary",
  variant: "contained"
};


