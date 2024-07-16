import { SIDE_BAR_ITEMS } from './consts';
import { Item } from './Item';

export const SideBar = () => {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0">
      <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="border-b-1 divide-y divide-slate-200 border-b-slate-200 pt-20 font-medium">
          {SIDE_BAR_ITEMS.map((item) => (
            <Item key={item} item={item} />
          ))}
        </ul>
      </div>
    </aside>
  );
};
