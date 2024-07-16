export const Item = ({ item }: { item: string }) => {
  return (
    <li className="m-0 p-0">
      <a
        href="#"
        className="group flex items-center rounded-lg text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        <span className="pb-8 pl-5 pt-8">{item}</span>
      </a>
    </li>
  );
};
