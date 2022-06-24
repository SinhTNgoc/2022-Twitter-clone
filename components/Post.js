import { async } from "@firebase/util";
import {
  ChartBarIcon,
  ChatAltIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import {
  setDoc,
  doc,
  onSnapshot,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import Moment from "react-moment";
import { db, storage } from "../firebase";

import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../Atom/modalAtom";

const Post = ({ post }) => {
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);

  const { data: session } = useSession();

  useEffect(() => {
    const unsubcribe = onSnapshot(
      collection(db, "posts", post.id, "likes"),
      (snapshot) => {
        setLikes(snapshot.docs);
      }
    );
  }, [post.id]);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes, session?.user?.uid]);

  const likePost = async () => {
    if (session) {
      if (!hasLiked) {
        await setDoc(doc(db, "posts", post.id, "likes", session?.user?.uid), {
          username: session?.user?.username,
        });
      } else {
        await deleteDoc(
          doc(db, "posts", post.id, "likes", session?.user?.uid),
          {
            username: session?.user?.username,
          }
        );
      }
    } else {
      signIn();
    }
  };

  const handleDeletePost = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deleteDoc(doc(db, "posts", post.id));
      if (post.data().image)
        await deleteObject(ref(storage, `posts/${post.id}/image`));
    }
  };

  return (
    <div className="p-3 flex space-x-3 cursor-pointer border-b border-gray-200">
      <div className="w-[45px]">
        <img
          src={post?.data()?.userImg}
          alt={`${post?.data()?.userImg && "user-image"}`}
          className="w-[45px] h-[45px] rounded-full object-cover cursor-pointer hover:brightness-90"
        />
      </div>
      <div className="flex flex-col w-[85%] sm:w-[90%]">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post?.data()?.name}
            </h4>
            <span className="text-sm sm:text-[15px]">
              @{post?.data()?.username} -{" "}
            </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment>
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
              src={post?.data()?.image || ""}
              alt=""
              layout="fill"
              className="cursor-pointer rounded-2xl hover:brightness-110"
            />
          </div>
        </div>
        <div className="flex justify-between text-gray-500 py-2">
          <ChatAltIcon
            className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"
            onClick={() => {
              if (!session) {
                signIn();
              } else {
                setPostId(post.id);
                setOpen(!open);
              }
            }}
          />
          {session?.user?.uid === post.data().id && (
            <TrashIcon
              className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
              onClick={handleDeletePost}
            />
          )}
          <div className="flex items-center">
            {hasLiked ? (
              <HeartIconFilled
                className="h-9 w-9 hoverEffect p-2 text-red-600 hover:-red-100"
                onClick={likePost}
              />
            ) : (
              <HeartIcon
                className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:-red-100"
                onClick={likePost}
              />
            )}
            {likes.length > 0 && (
              <span
                className={`${hasLiked && "text-red-500"} text-sm select-none`}
              >
                {likes.length}
              </span>
            )}
          </div>
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
};

export default Post;
