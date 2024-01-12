import Image from "next/image";
import search_icon from "../../../public/assets/search-icon.svg";
import { RefObject } from "react";

interface SearchBarProps {
  placeholder: string;
  inputRef: RefObject<HTMLInputElement>;
  handleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  inputRef,
  handleSearch,
}) => {
  return (
    <div className="bg-white border-2 border-blue-500 rounded flex justify-between px-2">
      <input
        type="text"
        placeholder={placeholder}
        ref={inputRef}
        className="px-2 py-1 border-0 focus:outline-none w-44 md:w-72"
      />
      <button onClick={handleSearch}>
        <Image src={search_icon} alt="search" height={20} width={20} />
      </button>
    </div>
  );
};

export default SearchBar;
