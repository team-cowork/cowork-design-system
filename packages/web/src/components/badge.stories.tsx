import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from './badge.js';
import { StatusBadge } from './status-badge.js';

const meta: Meta = { title: 'Components/Badge' };
export default meta;

export const Colors: StoryObj = {
  render: () => (
    <div className="flex gap-3">
      {(['neutral', 'brand', 'green', 'blue', 'amber', 'red'] as const).map(
        (color) => (
          <Badge key={color} color={color}>
            {color}
          </Badge>
        ),
      )}
    </div>
  ),
};

export const Status: StoryObj = {
  render: () => (
    <div className="flex gap-3">
      {(['planned', 'inProgress', 'done', 'open', 'closed'] as const).map(
        (status) => (
          <StatusBadge key={status} status={status}>
            {status}
          </StatusBadge>
        ),
      )}
    </div>
  ),
};
