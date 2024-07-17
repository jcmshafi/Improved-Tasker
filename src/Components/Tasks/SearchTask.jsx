import { useState } from "react";

const SearchTask = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // const handleClick = (event) => {
  //   event.preventDefault(); // Prevent default form submission
  //   onSearch(searchTerm);
  // };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Call onSearch whenever input value changes
  };

  return (
    <form>
      <div className="flex">
        <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
          <input
            type="search"
            id="search-dropdown"
            className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
            placeholder="Search Task"
            required
            value={searchTerm}
            onChange={handleChange}
          />
          <button
            className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
            type="submit"
            // onClick={handleClick}
          >
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchTask;
