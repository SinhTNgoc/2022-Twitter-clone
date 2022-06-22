import {
  ChartBarIcon,
  ChatAltIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import Image from "next/image";
const Post = ({ post }) => {
  return (
    <div className="p-3 flex space-x-3 cursor-pointer border-b border-gray-200">
      <div className="">
        <Image
          src={post.userImg}
          alt="user-image"
          width={50}
          height={50}
          className="rounded-full cursor-pointer hover:brightness-95"
        ></Image>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px]">@{post.username} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              {post.timestamp}
            </span>
          </div>
          <DotsHorizontalIcon className="hoverEffect h-10 w-10 hover:bg-sky-100 hover:text-sky-500" />
        </div>
        <div className="w-full mt-3">
          <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
            {post.text}
          </p>
          <div className="w-full h-[320px] sm:h-[420px] relative">
            <Image
              src={post.img}
              alt="user-image"
              layout="fill"
              className="cursor-pointer rounded-2xl hover:brightness-110"
            ></Image>
          </div>
        </div>
        <div className="flex justify-between text-gray-500 py-3">
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
