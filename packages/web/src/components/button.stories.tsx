import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button.js';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: { children: '버튼', size: 'M', variant: 'fill', color: 'brand' },
  argTypes: {
    size: { control: 'inline-radio', options: ['S', 'M', 'L'] },
    variant: { control: 'inline-radio', options: ['fill', 'weak'] },
    color: { control: 'inline-radio', options: ['brand', 'neutral', 'danger'] },
  },
} satisfies Meta<typeof Button>;
export default meta;

export const Playground: StoryObj<typeof meta> = {};

export const Matrix: StoryObj<typeof meta> = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['fill', 'weak'] as const).flatMap((variant) =>
        (['brand', 'neutral', 'danger'] as const).map((color) => (
          <div key={`${variant}-${color}`} className="flex items-center gap-3">
            {(['S', 'M', 'L'] as const).map((size) => (
              <Button key={size} size={size} variant={variant} color={color}>
                {`${variant} ${color} ${size}`}
              </Button>
            ))}
            <Button size="M" variant={variant} color={color} disabled>
              disabled
            </Button>
          </div>
        )),
      )}
    </div>
  ),
};
