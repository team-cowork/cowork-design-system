import { tv } from 'tailwind-variants';

const loadingPane = tv({
  slots: {
    base: 'flex flex-col items-center justify-center gap-4 rounded-[24px] border border-outline-variant bg-surface px-4 py-3',
    spinner:
      'size-11 animate-spin rounded-full border-[3px] border-outline border-t-primary',
    label: 'typography-label-small text-on-surface-variant',
  },
});

export interface LoadingPaneProps {
  label?: string;
  className?: string;
}

export function LoadingPane({
  label = '불러오는 중…',
  className,
}: LoadingPaneProps) {
  const styles = loadingPane();
  return (
    <div
      role="status"
      aria-live="polite"
      className={styles.base({ class: className })}
    >
      <span className={styles.spinner()} />
      <p className={styles.label()}>{label}</p>
    </div>
  );
}
