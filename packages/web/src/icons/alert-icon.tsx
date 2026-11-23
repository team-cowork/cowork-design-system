import { Icon, type IconProps } from './icon.js';

export const AlertIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx={12} cy={12} r={10} />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </Icon>
);
