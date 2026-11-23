'use client';

import { type InputHTMLAttributes, type Ref, useId } from 'react';

import { tv } from 'tailwind-variants';

const textField = tv({
  slots: {
    base: 'flex flex-col gap-2',
    label: 'typography-label-x-small text-on-surface-variant',
    input:
      'h-12 w-full rounded-xl border bg-surface px-4 typography-subtext-large text-on-surface placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary/50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-40',
    error: 'typography-subtext-medium text-error',
  },
  variants: {
    invalid: {
      true: { input: 'border-error focus:ring-error/50' },
      false: { input: 'border-outline focus:border-primary' },
    },
  },
});

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  ref?: Ref<HTMLInputElement>;
}

export function TextField({
  className,
  label,
  error,
  id,
  disabled,
  ref,
  ...props
}: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const styles = textField({ invalid: Boolean(error) });

  return (
    <div className={styles.base({ class: className })}>
      {label && (
        <label htmlFor={inputId} className={styles.label()}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
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
