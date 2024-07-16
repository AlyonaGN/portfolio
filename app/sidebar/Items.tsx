import { Item } from './Item';

interface ItemsProps {
  items: string[];
}

export const Items = ({ items }: ItemsProps) => {
  return (
    <ul className="border-b-1 divide-y divide-slate-200 border-b-slate-200 pt-10 font-medium">
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </ul>
  );
};
