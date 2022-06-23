import {
  ChartBarIcon,
  ChatAltIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

import Moment from "react-moment";

const Post = ({ post }) => {
  return (
    <div className="p-3 flex space-x-3 cursor-pointer border-b border-gray-200">
      <div className="">
        <img
          src={
            post?.data()?.userImg ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QNkOSdhUIABFqXCeR_YvGF-IAU4T7waAoQ&usqp=CAU"
          }
          alt="user-image"
          className="w-[56px] h-[50px] rounded-full object-cover cursor-pointer hover:brightness-95"
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post?.data()?.name}
            </h4>
            <span className="text-sm sm:text-[15px]">
              @{post?.data()?.username} -{" "}
            </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              <Moment fromNow>{post?.data()?.timestamp.toDate()}</Moment>
            </span>
          </div>
          <DotsHorizontalIcon className="hoverEffect h-10 w-10 hover:bg-sky-100 hover:text-sky-500" />
        </div>
        <div className="w-full mt-3">
          <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
            {post?.data()?.text}
          </p>
          <div className="w-full relative">
            <img
              src={post?.data()?.image}
              alt="user-image"
              layout="fill"
              className="cursor-pointer rounded-2xl hover:brightness-110"
              priority
            />
          </div>
        </div>
        <div className="flex justify-between text-gray-500 py-2">
          <ChatAltIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
          <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:-red-100" />
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
};

export default Post;
