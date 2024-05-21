//@ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import BannerImageSlider from '.';

const meta: Meta<typeof BannerImageSlider> = {
  component: BannerImageSlider,
  title: 'Components/BannerImageSlider',
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BannerImageSlider>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => <BannerImageSlider {...args} />,
  args: {
    enableComponent: true,
  },
};
