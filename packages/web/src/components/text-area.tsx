'use client';

import { type Ref, type TextareaHTMLAttributes, useId } from 'react';

import { tv } from 'tailwind-variants';

const textArea = tv({
  slots: {
    base: 'flex flex-col gap-2',
    label: 'typography-label-x-small text-on-surface-variant',
    input:
      'min-h-[124px] w-full resize-y rounded-[14px] border bg-surface px-4 py-[14px] typography-subtext-large text-on-surface placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary/50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-40',
    error: 'typography-subtext-medium text-error',
  },
  variants: {
    invalid: {
      true: { input: 'border-error focus:ring-error/50' },
      false: { input: 'border-outline focus:border-primary' },
    },
  },
});

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  ref?: Ref<HTMLTextAreaElement>;
}

export function TextArea({
  className,
  label,
  error,
  id,
  disabled,
  ref,
  ...props
}: TextAreaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const errorId = `${textareaId}-error`;
  const styles = textArea({ invalid: Boolean(error) });

  return (
    <div className={styles.base({ class: className })}>
      {label && (
        <label htmlFor={textareaId} className={styles.label()}>
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={styles.input()}
        {...props}
      />
      {error && (
        <p id={errorId} className={styles.error()}>
          {error}
        </p>
      )}
    </div>
  );
}
