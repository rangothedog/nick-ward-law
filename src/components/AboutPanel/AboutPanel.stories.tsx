import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {AboutPanel} from './AboutPanel';

const meta: Meta<typeof AboutPanel> = {
  component: AboutPanel,
};

export default meta;

type Story = StoryObj<typeof AboutPanel>;

export const Basic: Story = {args: {}};
