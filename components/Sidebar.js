import Image from "next/image";
import { SidebarMenuItem } from "./SidebarMenuItem";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardCheckIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  const handleClick = () => {
    console.log("cljt");
  };
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full ">
      {/* Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          src="https://br.atsit.in/vi/wp-content/uploads/2021/11/twitter-xem-xet-nguoi-dung-ghi-nhat-ky-loi-ngoai-iphone.png"
          width={50}
          height={50}
          alt="logo"
        ></Image>
      </div>
      {/* menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Booksmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lisks" Icon={ClipboardCheckIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      {/* button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto xl:space-x-2 ">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6e3hgpI2STnxrTplbTPL1QR1QsymN7P68rGkJj0Go9YZwiQX3P3lOHviSnHRwmKKuSVw&usqp=CAU"
          alt="user-image"
          width={50}
          height={50}
          className="rounded-full"
          onClick={handleClick}
        ></Image>

        <div className="leading-5 hidden xl:block">
          <h4 className="font-bold">Chicken1102</h4>
          <p className="text-gray-500">@ga vl</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
};

export default Sidebar;
