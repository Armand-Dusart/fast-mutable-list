"use client";
import { useCallback, useState } from "react";

export function SlowList({ initList }: { initList: ItemType[] }) {
  // we initialize the list with 10_000 items
  const [list, setList] = useState<ItemType[]>(initList);

  const handleChange = useCallback((index: number, value: string) => {
    setList((prev) => {
      //!heavy operation
      const newList = [...prev];
      newList[index].label = value;
      return newList;
    });
  }, []);

  return (
    <div>
      <div className="m-2 text-base-content">
        <span className="text-lg p-2 rounded bg-primary-content">
          {list.length} Items (SlowList)
        </span>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <ItemSlow
              key={item.id}
              item={item}
              onChange={(label) => handleChange(index, label)}
            />
          );
        })}
      </ul>
    </div>
  );
}

interface Props {
  item: ItemType;
  onChange: (value: string) => void;
}

function ItemSlow({ item, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <li className="m-1 p-2 bg-primary rounded-xl w-fit flex items-center">
      <div className="w-[200px] m-2 text-primary-content">
        {item.firstName} {item.lastName}
      </div>
      <input
        type="text"
        value={item.label}
        onChange={handleChange}
        className="input input-sm input-bordered text-base-content"
      />
    </li>
  );
}
