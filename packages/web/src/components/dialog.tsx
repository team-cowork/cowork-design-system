'use client';

import { type ReactNode, useEffect, useRef } from 'react';

import { tv } from 'tailwind-variants';

import { useScrollLock } from '../lib/use-scroll-lock.js';

const dialog = tv({
  slots: {
    base: 'm-auto w-[420px] max-w-[calc(100vw-2rem)] rounded-[24px] border border-outline-variant bg-surface text-on-surface backdrop:bg-black/50',
    body: 'flex flex-col gap-[18px] p-7',
    title: 'typography-title-medium text-on-surface',
    description: 'typography-subtext-large text-on-surface-variant',
    actions: 'flex justify-end gap-2.5',
  },
});

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  /** false면 바깥 클릭과 ESC로 닫히지 않고, 안의 버튼으로만 닫을 수 있다. */
  dismissible?: boolean;
}

export function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  className,
  dismissible = true,
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const styles = dialog();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (open && !element.open) element.showModal();
    if (!open && element.open) element.close();
  }, [open]);

  useScrollLock(open);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onCancel={(e) => {
        if (!dismissible) e.preventDefault();
      }}
      onClick={(e) => {
        if (dismissible && e.target === ref.current) onClose();
      }}
      className={styles.base({ class: className })}
    >
      <div className={styles.body()}>
        <h2 className={styles.title()}>{title}</h2>
        {description && <p className={styles.description()}>{description}</p>}
        {children && <div className={styles.actions()}>{children}</div>}
      </div>
    </dialog>
  );
}
