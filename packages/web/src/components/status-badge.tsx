import { type ReactNode } from 'react';

import { tv } from 'tailwind-variants';

export type StatusBadgeStatus =
  'planned' | 'inProgress' | 'done' | 'open' | 'closed';

const statusBadge = tv({
  slots: {
    base: 'inline-flex items-center gap-1.5 rounded-full bg-surface-container py-1 pr-2.5 pl-2 text-[0.6875rem] font-semibold whitespace-nowrap text-on-surface',
    dot: 'size-2 shrink-0 rounded-full',
  },
  variants: {
    status: {
      planned: { dot: 'bg-on-surface-variant' },
      inProgress: { dot: 'bg-cowork-blue-500' },
      done: { dot: 'bg-cowork-green-500' },
      open: { dot: 'bg-cowork-green-500' },
      closed: { dot: 'bg-on-surface-variant' },
    },
  },
});

export interface StatusBadgeProps {
  status: StatusBadgeStatus;
  children: ReactNode;
  className?: string;
}

export function StatusBadge({ status, children, className }: StatusBadgeProps) {
  const { base, dot } = statusBadge({ status });
  return (
    <span className={base({ class: className })}>
      <span className={dot()} />
      {children}
    </span>
  );
}
