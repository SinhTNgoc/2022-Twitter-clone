import { SparklesIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Input from "./Input";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { AnimatePresence, motion } from "framer-motion";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      );
  }, []);

  return (
    <div className="xl:ml-[240px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex items-center  py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      <AnimatePresence>
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Post post={post} id={post.id} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Feed;
