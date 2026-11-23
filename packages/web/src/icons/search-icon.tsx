import { Icon, type IconProps } from './icon.js';

export const SearchIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx={11} cy={11} r={7} />
    <path d="m21 21-4.3-4.3" />
  </Icon>
);
