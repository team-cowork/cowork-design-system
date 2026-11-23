import type { Meta, StoryObj } from '@storybook/react-vite';

import { ChatIcon } from '../icons/chat-icon.js';
import { Button } from './button.js';
import { EmptyState } from './empty-state.js';
import { ErrorState } from './error-state.js';
import { LoadingPane } from './loading-pane.js';

const meta: Meta = { title: 'Components/States' };
export default meta;

export const Empty: StoryObj = {
  render: () => (
    <EmptyState
      icon={<ChatIcon />}
      title="아직 메시지가 없어요"
      description="첫 메시지를 보내 보세요."
    />
  ),
};

export const Loading: StoryObj = {
  render: () => <LoadingPane label="불러오는 중" />,
};

export const Error: StoryObj = {
  render: () => (
    <ErrorState
      title="메시지를 불러오지 못했어요"
      description="잠시 후 다시 시도해 주세요."
      action={<Button size="S">다시 시도</Button>}
    />
  ),
};
