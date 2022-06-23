import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import News from "./News";

const Widgets = ({ newsResults, randomUserFollow }) => {
  const [articleNumber, setArticleNumber] = useState(4);
  const [userNumber, setUserNumber] = useState(4);

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
          onClick={() => setArticleNumber((prev) => prev + 4)}
        >
          Show more
        </button>
      </div>
      <div className="text-gray-700 space-y-3 rounded-xl bg-gray-100 p-5 mt-3 w-[90%] xl:w-[90%]">
        <h4 className="font-bold text-xl">Who to follow</h4>
        {randomUserFollow.slice(0, userNumber).map((user) => (
          <div
            key={user.name.last}
            className="flex items-center space-y-0.5 cursor-pointer  hover:bg-gray-200 transition duration-200"
          >
            <img
              src={user.picture.thumbnail}
              alt={user.name.last}
              className="w-[50px] h-[50px] rounded-full mr-3 "
            />
            <div className="truncate leading-5">
              <h4 className="font-bold text-[16px] hover:underline">{user.login.username}</h4>
              <h5 className="text-xs font-medium text-gray-500">
                {user.name.first + " " + user.name.last}
              </h5>
            </div>
            <button className="ml-auto bg-blue-400 text-white rounded-full px-3.5 py-1.5">
              Follow
            </button>
          </div>
        ))}
        <button
          className="text-blue-400 pl-4 pb-3 hover:text-blue-300"
          onClick={() => setUserNumber((prev) => prev + 4)}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default Widgets;
