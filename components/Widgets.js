import { SearchIcon } from "@heroicons/react/outline";

const Widgets = () => {
  return (
    <div className="xl:w-full hidden lg:inline ml-8 px-3 py-1.5 ">
      <div className="flex items-center p-3 rounded-full sticky top-1.5 bg-white w-[90%] xl:w-[75%]">
        <SearchIcon className="h-5 w-5 z-50 text-gray-500" />
        <input
          className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700  bg-gray-100 focus:shadow-lg focus:bg-white focus:border-current focus:ring-0"
          type="text"
          placeholder="Search Twitter"
        />
      </div>
    </div>
  );
};

export default Widgets;
