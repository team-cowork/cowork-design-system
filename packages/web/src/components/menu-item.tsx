import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import { tv } from 'tailwind-variants';

import { ChevronRightIcon } from '../icons/chevron-right-icon.js';

const menuItem = tv({
  slots: {
    base: 'flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-left typography-subtext-large transition-colors',
    icon: 'flex size-4 shrink-0 items-center justify-center',
    label: 'flex-1 truncate',
    chevron: 'size-3.5 shrink-0 text-on-surface-variant',
  },
  variants: {
    danger: {
      true: { base: 'text-error hover:bg-error/10' },
      false: {
        base: 'text-on-surface hover:bg-surface-container',
        icon: 'text-on-surface-variant',
      },
    },
  },
});

export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  danger?: boolean;
  hasSubmenu?: boolean;
}

export function MenuItem({
  children,
  icon,
  danger = false,
  hasSubmenu = false,
  className,
  type = 'button',
  ...props
}: MenuItemProps) {
  const styles = menuItem({ danger });
  return (
    <button
      type={type}
      className={styles.base({ class: className })}
      {...props}
    >
      {icon && <span className={styles.icon()}>{icon}</span>}
      <span className={styles.label()}>{children}</span>
      {hasSubmenu && <ChevronRightIcon className={styles.chevron()} />}
    </button>
  );
}
