import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import { tv } from 'tailwind-variants';

const optionCard = tv({
  slots: {
    base: 'flex w-full cursor-pointer items-center gap-2.5 rounded-[10px] border px-3 py-2.5 text-left transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none',
    icon: 'flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant',
    text: 'flex min-w-0 flex-col gap-0.5',
    label: 'typography-label-small text-on-surface',
    description: 'typography-subtext-small text-on-surface-variant',
  },
  variants: {
    selected: {
      true: { base: 'border-primary bg-surface-container' },
      false: {
        base: 'border-outline-variant bg-surface-container-low hover:border-outline',
      },
    },
  },
});

export interface OptionCardProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'title'
> {
  label: string;
  description?: string;
  icon?: ReactNode;
  selected?: boolean;
}

export function OptionCard({
  label,
  description,
  icon,
  selected = false,
  className,
  type = 'button',
  ...props
}: OptionCardProps) {
  const styles = optionCard({ selected });
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={styles.base({ class: className })}
      {...props}
    >
      {icon && <span className={styles.icon()}>{icon}</span>}
      <span className={styles.text()}>
        <span className={styles.label()}>{label}</span>
        {description && (
          <span className={styles.description()}>{description}</span>
        )}
      </span>
    </button>
  );
}
