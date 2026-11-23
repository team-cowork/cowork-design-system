import { type ReactNode } from 'react';

import { tv } from 'tailwind-variants';

const errorState = tv({
  slots: {
    base: 'flex flex-col items-center justify-center gap-3.5 rounded-[24px] bg-error-container px-4 py-3 text-center text-on-error-container',
    text: 'flex flex-col gap-1',
    title: 'typography-title-small text-on-error-container',
    description: 'typography-subtext-large',
    action: 'mt-2',
  },
});

export interface ErrorStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function ErrorState({
  title,
  description,
  action,
  className,
}: ErrorStateProps) {
  const styles = errorState();
  return (
    <div role="alert" className={styles.base({ class: className })}>
      <div className={styles.text()}>
        <h3 className={styles.title()}>{title}</h3>
        {description && <p className={styles.description()}>{description}</p>}
      </div>
      {action && <div className={styles.action()}>{action}</div>}
    </div>
  );
}
