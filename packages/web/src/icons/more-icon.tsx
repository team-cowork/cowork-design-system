import { Icon, type IconProps } from './icon.js';

export const MoreIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx={5} cy={12} r={1.6} fill="currentColor" stroke="none" />
    <circle cx={12} cy={12} r={1.6} fill="currentColor" stroke="none" />
    <circle cx={19} cy={12} r={1.6} fill="currentColor" stroke="none" />
  </Icon>
);
