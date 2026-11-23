import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Switch } from './switch.js';

const meta = { title: 'Components/Switch', component: Switch } satisfies Meta<
  typeof Switch
>;
export default meta;

export const States: StoryObj<typeof meta> = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <div className="flex items-center gap-4">
        <Switch
          aria-label="알림"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Switch aria-label="꺼짐 비활성" disabled />
        <Switch aria-label="켜짐 비활성" checked disabled />
      </div>
    );
  },
};
