import { useState, useEffect } from "react";
import TextInput from "./TextInput";
import { useDebounce } from "@/hooks/useDebounce";
import { SearchOutlined } from "@ant-design/icons";

interface SearchProps {
  onSearch: (searchTerm: string) => void;
  value?: string;
}

export default function SearchInput({ onSearch, value = "" }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState(value);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full max-w-xl flex gap-2 mb-4">
      <TextInput
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Quick Search"
        prefix={
          <SearchOutlined
            className="!text-[#89888b] mr-2"
            width={24}
            height={24}
          />
        }
      />
    </div>
  );
}
