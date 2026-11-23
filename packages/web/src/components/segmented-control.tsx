'use client';

import { tv } from 'tailwind-variants';

const segmentedControl = tv({
  slots: {
    base: 'inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-[14px] bg-surface-container p-1',
    option:
      'flex h-full flex-1 cursor-pointer items-center justify-center rounded-[10px] px-3 typography-label-small whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none',
  },
  variants: {
    size: {
      M: { base: 'h-11' },
      L: { base: 'h-[52px]' },
    },
    selected: {
      true: { option: 'bg-surface text-on-surface shadow-sm' },
      false: {
        option: 'font-medium text-on-surface-variant hover:text-on-surface',
      },
    },
  },
  defaultVariants: { size: 'M' },
});

export interface SegmentedControlOption<T extends string> {
  label: string;
  value: T;
}

export interface SegmentedControlProps<T extends string> {
  options: SegmentedControlOption<T>[];
  value: T;
  onChange: (value: T) => void;
  size?: 'M' | 'L';
  className?: string;
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  size = 'M',
  className,
}: SegmentedControlProps<T>) {
  const { base, option: optionClass } = segmentedControl({ size });
  return (
    <div role="group" className={base({ class: className })}>
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option.value)}
            className={optionClass({ selected })}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
