'use client';
import { useState } from 'react';
import { SIDE_BAR_ITEMS } from './consts';
import { Hamburger } from './Hamburger';
import { Items } from './Items';
import { Placeholder } from './Placeholder';

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onHamburgerClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0">
      <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <Hamburger onHamburgerClick={onHamburgerClick} />

        {isOpen ? <Items items={SIDE_BAR_ITEMS} /> : <Placeholder />}
      </div>
    </aside>
  );
};
