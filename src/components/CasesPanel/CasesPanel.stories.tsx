import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {CasesPanel} from './CasesPanel';

const meta: Meta<typeof CasesPanel> = {
  component: CasesPanel,
};

export default meta;

type Story = StoryObj<typeof CasesPanel>;

export const Basic: Story = {args: {}};
