import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

const Feed = () => {
  const posts = [
    {
      id: 1,
      name: "Chicken1102",
      username: "Relax",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6e3hgpI2STnxrTplbTPL1QR1QsymN7P68rGkJj0Go9YZwiQX3P3lOHviSnHRwmKKuSVw&usqp=CAU",
      img: "https://images.unsplash.com/photo-1437915160026-6c59da36ede2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "Ahihi",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      name: "Chicken1103",
      username: "Relax",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6e3hgpI2STnxrTplbTPL1QR1QsymN7P68rGkJj0Go9YZwiQX3P3lOHviSnHRwmKKuSVw&usqp=CAU",
      img: "https://images.unsplash.com/photo-1651661268931-607e69852087?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      text: "hello hello",
      timestamp: " 2 days ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex items-center  py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map(post=>(<Post key={post.id} post={post}/>))}
    </div>
  );
};

export default Feed;
