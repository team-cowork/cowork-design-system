import type { Meta, StoryObj } from '@storybook/react-vite';

import { EditIcon } from '../icons/edit-icon.js';
import { SettingsIcon } from '../icons/settings-icon.js';
import { TrashIcon } from '../icons/trash-icon.js';
import { Menu, MenuSeparator } from './menu.js';
import { MenuItem } from './menu-item.js';

const meta = { title: 'Components/Menu', component: Menu } satisfies Meta<
  typeof Menu
>;
export default meta;

export const ChannelContext: StoryObj = {
  render: () => (
    <Menu aria-label="채널 메뉴">
      <MenuItem icon={<EditIcon />}>이름 바꾸기</MenuItem>
      <MenuItem icon={<SettingsIcon />} hasSubmenu>
        채널 설정
      </MenuItem>
      <MenuSeparator />
      <MenuItem icon={<TrashIcon />} danger>
        채널 삭제
      </MenuItem>
    </Menu>
  ),
};
