interface ItemProps {
  item: string;
}

export const Item = ({ item }: ItemProps) => {
  return (
    <li className="m-0 p-0">
      <a href="#" className="group flex items-center rounded-lg text-gray-900 hover:bg-green-50">
        <span className="pb-8 pl-8 pt-8 text-green-800">{item}</span>
      </a>
    </li>
  );
};
