import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import News from "./News";

const Widgets = ({ newsResults }) => {
  const [articleNumber, setArticleNumber] = useState(7);
  return (
    <div className="xl:w-[452px] hidden lg:inline px-8 pb-1.5">
      <div className="w-[90%] xl:w-[90%] sticky top-0 bg-white py-3 z-50">
        <div className="flex items-center p-3 rounded-full relative">
          <SearchIcon className="h-5 w-5 z-50 text-gray-500 cursor-pointer" />
          <input
            className="absolute inset-0 m-auto rounded-full pl-11 border-gray-500 text-gray-700  bg-gray-100 focus:shadow-lg focus:bg-white focus:border-current focus:ring-0"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>
      <div className="text-gray-700 space-y-3 rounded-xl bg-gray-100 p-5 mt-3 w-[90%] xl:w-[90%]">
        <h4 className="font-bold text-xl">What&apos;s happening?</h4>
        {newsResults.slice(0, articleNumber).map((article) => (
          <News key={article.title} article={article} />
        ))}
        <button
          className="text-blue-400 pl-4 pb-3 hover:text-blue-300"
          onClick={() => setArticleNumber((prev) => prev + 7)}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default Widgets;
