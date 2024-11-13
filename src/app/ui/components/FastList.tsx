"use client";

import { useEffect, useMemo, useState } from "react";
import Observable from "./Observable";

function useItem(
  observable: Observable<ItemType> | undefined
): ItemType | undefined {
  const [item, setItem] = useState<ItemType | undefined>(observable?.get());

  useEffect(() => {
    if (!observable) return;

    const unsubscribe = observable.subscribe(() => {
      setItem(observable.get());
    });

    return () => {
      unsubscribe();
    };
  }, [observable]);

  return item;
}

export function FastList({ initList }: { initList: ItemType[] }) {
  const list = useMemo(() => {
    return initList.map((item) => new Observable<ItemType>(item));
  }, [initList]);

  const ids = useMemo(() => {
    return list.map((item) => item.get().id);
  }, [list]);

  return (
    <div>
      <div className="m-2 text-base-content">
        <span className="text-lg p-2 rounded bg-primary-content">
          {list.length} Items (FastList)
        </span>
      </div>
      <ul>
        {ids.map((id) => {
          return <ItemFast itemId={id} list={list} key={id} />;
        })}
      </ul>
    </div>
  );
}

interface FProps {
  itemId: number;
  list: Observable<ItemType>[];
}

function ItemFast({ itemId, list }: FProps) {
  const observableItem = useMemo(() => {
    return list.find((item) => item.get().id === itemId);
  }, [list, itemId]);

  const item = useItem(observableItem);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (observableItem) {
      observableItem.set({ ...observableItem.get(), label: e.target.value });
    }
  };

  return (
    <li className="m-1 p-2 bg-primary rounded-xl w-fit flex items-center">
      <div className="w-[200px] m-2 text-primary-content">
        {item?.firstName} {item?.lastName}
      </div>
      <input
        type="text"
        value={item?.label}
        onChange={handleChange}
        className="input input-sm input-bordered text-base-content"
      />
    </li>
  );
}
