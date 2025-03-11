import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ServicesPanel} from './ServicesPanel';

const meta: Meta<typeof ServicesPanel> = {
  component: ServicesPanel,
};

export default meta;

type Story = StoryObj<typeof ServicesPanel>;

export const Basic: Story = {args: {}};
