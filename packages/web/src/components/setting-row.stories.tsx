import type { Meta, StoryObj } from '@storybook/react-vite';

import { SettingRow } from './setting-row.js';
import { Switch } from './switch.js';

const meta = {
  title: 'Components/Setting Row',
  component: SettingRow,
  args: { label: '데스크톱 알림', description: '새 메시지가 오면 알려 줘요' },
  decorators: [
    (Story) => (
      <div className="w-[480px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SettingRow>;
export default meta;

export const WithSwitch: StoryObj<typeof meta> = {
  args: { children: <Switch aria-label="데스크톱 알림" checked /> },
};
