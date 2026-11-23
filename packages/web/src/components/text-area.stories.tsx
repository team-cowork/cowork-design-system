import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextArea } from './text-area.js';

const meta = {
  title: 'Components/Text Area',
  component: TextArea,
  args: { label: '설명', placeholder: '채널을 소개해 주세요' },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextArea>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
export const Error: StoryObj<typeof meta> = {
  args: { error: '500자까지 쓸 수 있어요.' },
};
