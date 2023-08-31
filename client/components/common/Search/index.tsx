import React from "react";

const Search = () => {
  return (
    <>
      <form className="w-96">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="flex w-full h-[50px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            required
          />
          {/* <div className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"></div> */}
          <kbd className="text-white flex gap-0.5 absolute right-2.5 bottom-3.5 font-medium rounded px-2 py-0.5 text-[10px] text-slate-300 dark:text-slate-500 dark:bg-slate-900 border border-slate-800 uppercase cursor-pointer">
            <abbr title="Command" className="no-underline">⌘</abbr>
            <abbr title="K" className="no-underline">k</abbr>
          </kbd>
        </div>
      </form>
    </>
  );
};

export default Search;
