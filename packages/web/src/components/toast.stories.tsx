import type { Meta, StoryObj } from '@storybook/react-vite';

import { CheckIcon } from '../icons/check-icon.js';
import { Button } from './button.js';
import { Toast } from './toast.js';
import { ToastProvider, useToast } from './toast-provider.js';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  args: { message: '저장했어요.', icon: <CheckIcon /> },
} satisfies Meta<typeof Toast>;
export default meta;

export const Static: StoryObj<typeof meta> = {};

function Trigger() {
  const { toast } = useToast();
  return (
    <Button
      onClick={() => toast('링크를 복사했어요.', { icon: <CheckIcon /> })}
    >
      토스트 띄우기
    </Button>
  );
}

export const WithProvider: StoryObj<typeof meta> = {
  render: () => (
    <ToastProvider>
      <Trigger />
    </ToastProvider>
  ),
};
