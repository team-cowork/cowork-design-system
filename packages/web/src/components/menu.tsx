import { type ReactNode } from 'react';

import { tv } from 'tailwind-variants';

const menu = tv({
  base: 'flex min-w-[220px] flex-col gap-0.5 rounded-[10px] border border-outline-variant bg-surface-container-low p-1.5 shadow-lg',
});

const menuSeparator = tv({ base: 'my-1 h-px bg-outline-variant' });

export interface MenuProps {
  children: ReactNode;
  className?: string;
  /** 여는 버튼의 aria-controls가 가리킬 id */
  id?: string;
  'aria-label'?: string;
  role?: 'menu' | 'group';
}

/** 드롭다운·컨텍스트 메뉴 팝오버 컨테이너. MenuItem을 자식으로 담는다. */
export function Menu({ children, className, ...props }: MenuProps) {
  return (
    <div role="menu" {...props} className={menu({ class: className })}>
      {children}
    </div>
  );
}

export interface MenuSeparatorProps {
  className?: string;
}

export function MenuSeparator({ className }: MenuSeparatorProps) {
  return (
    <div role="separator" className={menuSeparator({ class: className })} />
  );
}

export function MenuBackdrop({ onClick }: { onClick: () => void }) {
  return <div aria-hidden className="fixed inset-0 z-40" onClick={onClick} />;
}
