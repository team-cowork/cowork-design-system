import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button.js';
import { Modal } from './modal.js';
import { TextField } from './text-field.js';

const meta = { title: 'Components/Modal', component: Modal } satisfies Meta<
  typeof Modal
>;
export default meta;

export const WithForm: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>열기</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="채널 만들기"
          footer={
            <>
              <Button
                variant="weak"
                color="neutral"
                onClick={() => setOpen(false)}
              >
                취소
              </Button>
              <Button onClick={() => setOpen(false)}>만들기</Button>
            </>
          }
        >
          <TextField label="채널 이름" placeholder="새 채널" />
        </Modal>
      </>
    );
  },
};
