import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {TestimonialsPanel} from './TestimonialsPanel';

const meta: Meta<typeof TestimonialsPanel> = {
  component: TestimonialsPanel,
};

export default meta;

type Story = StoryObj<typeof TestimonialsPanel>;

export const Basic: Story = {args: {}};
