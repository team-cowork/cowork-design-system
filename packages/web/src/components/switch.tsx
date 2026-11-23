'use client';

import { tv } from 'tailwind-variants';

const switchStyles = tv({
  slots: {
    base: 'relative inline-flex h-8 w-[52px] shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40',
    thumb: 'inline-block size-6 rounded-full bg-white transition-transform',
  },
  variants: {
    checked: {
      true: { base: 'bg-success', thumb: 'translate-x-6' },
      false: { base: 'bg-outline', thumb: 'translate-x-1' },
    },
  },
});

export interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
}

export function Switch({
  checked = false,
  onCheckedChange,
  disabled,
  className,
  ...props
}: SwitchProps) {
  const { base, thumb } = switchStyles({ checked });
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      className={base({ class: className })}
      {...props}
    >
      <span className={thumb()} />
    </button>
  );
}
