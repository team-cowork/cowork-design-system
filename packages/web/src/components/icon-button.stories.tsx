import type { Meta, StoryObj } from '@storybook/react-vite';

import { PlusIcon } from '../icons/plus-icon.js';
import { IconButton } from './icon-button.js';

const meta = {
  title: 'Components/Icon Button',
  component: IconButton,
  args: {
    'aria-label': '추가',
    size: 'M',
    variant: 'fill',
    children: <PlusIcon />,
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['S', 'M', 'L'] },
    variant: { control: 'inline-radio', options: ['fill', 'border', 'clear'] },
  },
} satisfies Meta<typeof IconButton>;
export default meta;

export const Playground: StoryObj<typeof meta> = {};

export const Matrix: StoryObj<typeof meta> = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['fill', 'border', 'clear'] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-3">
          {(['S', 'M', 'L'] as const).map((size) => (
            <IconButton
              key={size}
              aria-label="추가"
              size={size}
              variant={variant}
            >
              <PlusIcon />
            </IconButton>
          ))}
          <IconButton aria-label="추가" variant={variant} disabled>
            <PlusIcon />
          </IconButton>
        </div>
      ))}
    </div>
  ),
};
