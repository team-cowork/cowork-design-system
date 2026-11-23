import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { HashIcon } from '../icons/hash-icon.js';
import { HeadphonesIcon } from '../icons/headphones-icon.js';
import { OptionCard } from './option-card.js';

const meta = {
  title: 'Components/Option Card',
  component: OptionCard,
} satisfies Meta<typeof OptionCard>;
export default meta;

export const ChannelType: StoryObj = {
  render: () => {
    const [type, setType] = useState('text');
    return (
      <div className="flex w-96 flex-col gap-2">
        <OptionCard
          icon={<HashIcon />}
          label="텍스트"
          description="메시지, 이미지, 파일을 주고받아요"
          selected={type === 'text'}
          onClick={() => setType('text')}
        />
        <OptionCard
          icon={<HeadphonesIcon />}
          label="음성"
          description="음성과 화면을 함께 공유해요"
          selected={type === 'voice'}
          onClick={() => setType('voice')}
        />
      </div>
    );
  },
};
