import { useDebounce } from "app/hooks";
import { useEffect, useState } from "react";

const Search = ({
  defaultValue,
  onChange,
}: {
  defaultValue: string;
  onChange: (value: string) => void;
}) => {
  const [value, setValue] = useState(defaultValue);
  // debouce value
  const deferredValue = useDebounce(value, 300);
  useEffect(() => {
    onChange(deferredValue);
  }, [deferredValue, onChange]);
  return (
    <>
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="flex flex-row gap-2">
          <input
            type="text"
            className="block w-full p-2 border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={(event) => {
              setValue(event.target.value);
            }}
            placeholder="please input your keywork"
          />
          <button className="justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm nline-flex hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Search</button>
        </div>
      </div>
    </>
  );
};

export default Search;
