import { type ReactNode } from 'react';

import { tv } from 'tailwind-variants';

const settingRow = tv({
  slots: {
    base: 'flex items-center justify-between gap-4 rounded-xl bg-surface px-4 py-3.5',
    text: 'flex min-w-0 flex-col gap-0.5',
    label: 'typography-body-medium-strong text-on-surface',
    description: 'typography-subtext-medium text-on-surface-variant',
    control: 'shrink-0',
  },
});

export interface SettingRowProps {
  label: string;
  description?: string;
  /** 우측에 배치할 컨트롤 (Switch, Button, 입력 등) */
  children?: ReactNode;
  className?: string;
}

export function SettingRow({
  label,
  description,
  children,
  className,
}: SettingRowProps) {
  const styles = settingRow();
  return (
    <div className={styles.base({ class: className })}>
      <div className={styles.text()}>
        <span className={styles.label()}>{label}</span>
        {description && (
          <span className={styles.description()}>{description}</span>
        )}
      </div>
      {children && <div className={styles.control()}>{children}</div>}
    </div>
  );
}
