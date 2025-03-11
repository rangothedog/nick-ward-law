import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ContactPanel} from './ContactPanel';

const meta: Meta<typeof ContactPanel> = {
  component: ContactPanel,
};

export default meta;

type Story = StoryObj<typeof ContactPanel>;

export const Basic: Story = {args: {}};
