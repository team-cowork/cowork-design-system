import { type ReactNode } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

const badge = tv({
  base: 'inline-flex items-center rounded-md bg-surface-container px-2 py-0.5 text-[0.6875rem] leading-[1.3] font-semibold whitespace-nowrap',
  variants: {
    color: {
      neutral: 'text-on-surface-variant',
      brand: 'text-primary',
      green: 'text-cowork-green-500',
      blue: 'text-cowork-blue-500',
      amber: 'text-cowork-amber-500',
      red: 'text-error',
    },
  },
  defaultVariants: { color: 'neutral' },
});

export interface BadgeProps extends VariantProps<typeof badge> {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, color, className }: BadgeProps) {
  return <span className={badge({ color, class: className })}>{children}</span>;
}
