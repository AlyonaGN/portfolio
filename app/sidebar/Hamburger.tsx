import { MouseEventHandler, useRef } from 'react';

interface HamburgerProps {
  onHamburgerClick: MouseEventHandler<HTMLButtonElement>;
}

export const Hamburger = ({ onHamburgerClick }: HamburgerProps) => {
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    onHamburgerClick(e);
    hamburgerRef.current?.classList.toggle('tham-active');
  };
  return (
    <button ref={hamburgerRef} onClick={onClick} className="tham tham-e-squeeze tham-w-6 p-8">
      <div className="tham-box">
        <div className="tham-inner bg-green-800" />
      </div>
    </button>
  );
};
