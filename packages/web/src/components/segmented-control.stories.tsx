import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { SegmentedControl } from './segmented-control.js';

const meta = {
  title: 'Components/Segmented Control',
  component: SegmentedControl,
} satisfies Meta<typeof SegmentedControl>;
export default meta;

const options = [
  { label: '채팅', value: 'chat' },
  { label: '파일', value: 'file' },
  { label: '회의록', value: 'note' },
];

export const Sizes: StoryObj = {
  render: () => {
    const [value, setValue] = useState('chat');
    return (
      <div className="flex flex-col items-start gap-4">
        <SegmentedControl
          options={options}
          value={value}
          onChange={setValue}
          size="M"
        />
        <SegmentedControl
          options={options}
          value={value}
          onChange={setValue}
          size="L"
        />
      </div>
    );
  },
};
