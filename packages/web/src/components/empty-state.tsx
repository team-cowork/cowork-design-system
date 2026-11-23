import { type ReactNode } from 'react';

import { tv } from 'tailwind-variants';

const emptyState = tv({
  slots: {
    base: 'flex flex-col items-center justify-center gap-3.5 rounded-[24px] border border-outline-variant bg-surface px-4 py-8 text-center',
    icon: 'flex size-16 items-center justify-center rounded-[20px] bg-surface-variant text-on-surface-variant [&_svg]:size-8',
    text: 'flex flex-col gap-1',
    title: 'typography-title-small text-on-surface',
    description: 'typography-subtext-large text-on-surface-variant',
    action: 'mt-2',
  },
});

export interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  const styles = emptyState();
  return (
    <div className={styles.base({ class: className })}>
      {icon && <span className={styles.icon()}>{icon}</span>}
      <div className={styles.text()}>
        <h3 className={styles.title()}>{title}</h3>
        {description && <p className={styles.description()}>{description}</p>}
      </div>
      {action && <div className={styles.action()}>{action}</div>}
    </div>
  );
}
