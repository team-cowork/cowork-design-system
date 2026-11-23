import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button.js';
import { Dialog } from './dialog.js';

const meta = { title: 'Components/Dialog', component: Dialog } satisfies Meta<
  typeof Dialog
>;
export default meta;

export const Confirm: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>열기</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="채널을 아카이브할까요?"
          description="아카이브한 채널은 보관함에서 다시 꺼낼 수 있어요."
        >
          <Button variant="weak" color="neutral" onClick={() => setOpen(false)}>
            취소
          </Button>
          <Button color="danger" onClick={() => setOpen(false)}>
            아카이브
          </Button>
        </Dialog>
      </>
    );
  },
};
