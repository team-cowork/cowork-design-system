import { type ButtonHTMLAttributes, type Ref } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

const iconButton = tv({
  base: 'inline-flex shrink-0 cursor-pointer items-center justify-center transition-[opacity,background-color] focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40',
  variants: {
    size: {
      S: 'size-9 rounded-full [&_svg]:size-4',
      M: 'size-11 rounded-full [&_svg]:size-[18px]',
      L: 'size-[52px] rounded-full [&_svg]:size-6',
    },
    variant: {
      fill: 'bg-primary text-on-primary hover:opacity-90',
      border: 'border border-outline text-on-surface hover:bg-surface-variant',
      clear: 'text-on-surface hover:bg-surface-variant',
    },
  },
  defaultVariants: { size: 'M', variant: 'fill' },
});

export interface IconButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButton> {
  'aria-label': string;
  ref?: Ref<HTMLButtonElement>;
}

export function IconButton({
  className,
  size,
  variant,
  type = 'button',
  ref,
  ...props
}: IconButtonProps) {
  return (
    <button
      ref={ref}
      type={type}
      className={iconButton({ size, variant, class: className })}
      {...props}
    />
  );
}
