import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextField } from './text-field.js';

const meta = {
  title: 'Components/Text Field',
  component: TextField,
  args: { label: '채널 이름', placeholder: '새 채널' },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextField>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
export const Error: StoryObj<typeof meta> = {
  args: { defaultValue: '#', error: '사용할 수 없는 이름이에요.' },
};
export const Disabled: StoryObj<typeof meta> = { args: { disabled: true } };
