import { useState, useTransition } from "react";

export default function Transition() {
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");
  const [filteredItems, setFilteredItems] = useState<String[]>([]);

  const items = Array.from({ length: 10000 }, (_, idx) => `Item ${idx + 1}`);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    startTransition(() => {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredItems(filtered);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-jalnangothic text-xl">useTransition Testing</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="입력 요망!"
      />
      {isPending && <p>Loading...</p>}
      <ul className="w-48 h-48 overflow-y-scroll">
        {filteredItems.map((item, idx) => (
          <li key={`items_${idx}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
