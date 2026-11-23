import { type ButtonHTMLAttributes, type Ref } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'inline-flex cursor-pointer items-center justify-center whitespace-nowrap transition-[opacity,background-color] select-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40',
  variants: {
    size: {
      S: 'h-9 rounded-[10px] px-3.5 typography-label-small',
      M: 'h-11 rounded-xl px-[18px] typography-label-medium',
      L: 'h-[52px] rounded-[14px] px-[22px] typography-label-medium',
    },
    variant: { fill: '', weak: '' },
    color: { brand: '', neutral: '', danger: '' },
  },
  compoundVariants: [
    {
      variant: 'fill',
      color: 'brand',
      class: 'bg-primary text-on-primary hover:opacity-90',
    },
    {
      variant: 'fill',
      color: 'neutral',
      class: 'bg-inverse-surface text-inverse-on-surface hover:opacity-90',
    },
    {
      variant: 'fill',
      color: 'danger',
      class: 'bg-error text-on-error hover:opacity-90',
    },
    {
      variant: 'weak',
      color: 'brand',
      class: 'bg-primary-container text-on-primary-container hover:opacity-90',
    },
    {
      variant: 'weak',
      color: 'neutral',
      class: 'bg-surface-variant text-on-surface-variant hover:opacity-90',
    },
    {
      variant: 'weak',
      color: 'danger',
      class: 'bg-error-container text-on-error-container hover:opacity-90',
    },
  ],
  defaultVariants: { size: 'M', variant: 'fill', color: 'brand' },
});

export interface ButtonProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof button> {
  ref?: Ref<HTMLButtonElement>;
}

export function Button({
  className,
  size,
  variant,
  color,
  type = 'button',
  ref,
  ...props
}: ButtonProps) {
  return (
    <button
      ref={ref}
      type={type}
      className={button({ size, variant, color, class: className })}
      {...props}
    />
  );
}
