import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Input = () => {
  return (
    <div className="flex border-b border-gray-200 space-x-3 p-3">
      <div>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6e3hgpI2STnxrTplbTPL1QR1QsymN7P68rGkJj0Go9YZwiQX3P3lOHviSnHRwmKKuSVw&usqp=CAU"
          alt="user-image"
          width={50}
          height={50}
          className="rounded-full cursor-pointer hover:brightness-95"
        ></Image>
      </div>
      <div className="w-full divide-y divide-gray-200">
        <div>
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-800"
            rows="2"
            placeholder="What's happening?"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <PhotographIcon className="hoverEffect p-2 h-10 w-10 text-sky-500 hover:bg-sky-100" />
            <EmojiHappyIcon className="hoverEffect p-2 h-10 w-10 text-sky-500 hover:bg-sky-100" />
          </div>
          <button
            className="bg-blue-400 text-white font-bold shadow-md  px-4 py-1.5 rounded-full hover:brightness-95 disabled:opacity-50"
            disabled
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
