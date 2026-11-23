import { type ReactNode } from 'react';

import { tv } from 'tailwind-variants';

const toast = tv({
  slots: {
    base: 'inline-flex items-center gap-3 rounded-[16px] bg-inverse-surface px-[18px] py-[14px] text-inverse-on-surface shadow-lg',
    icon: 'shrink-0 [&_svg]:size-[18px]',
    message: 'typography-label-small',
    action: 'ml-2 shrink-0',
  },
});

export interface ToastProps {
  message: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function Toast({ message, icon, action, className }: ToastProps) {
  const styles = toast();
  return (
    <div role="status" className={styles.base({ class: className })}>
      {icon && <span className={styles.icon()}>{icon}</span>}
      <span className={styles.message()}>{message}</span>
      {action && <span className={styles.action()}>{action}</span>}
    </div>
  );
}
