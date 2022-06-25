import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../Atom/modalAtom";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import Moment from "react-moment";
import { useSession } from "next-auth/react";
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const CommentModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const [postId] = useRecoilState(postIdState);
  const [post, setPost] = useState({});
  const { data: session } = useSession();
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    onSnapshot(doc(db, "posts", postId), (snapshot) => {
      setPost(snapshot);
    });
  }, [postId]);

  const handleSendComment = async () => {
    await addDoc(collection(db, "posts", postId, "comments"), {
      comment: inputValue,
      name: session.user.name,
      username: session.user.username,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
    });
    setInputValue("");
    setOpen(false);
    router.push(`posts/${postId}`);
  };

  return (
    <div>
      {open && (
        <Modal
          isOpen={open}
          className="max-w-lg w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-[0.5px] outline-none rounded-xl shadow-md"
          //   onAfterOpen={afterOpenModal}
          onRequestClose={() => setOpen(false)}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div className="p-1">
            <div className="border-b boder-gray-200 px-1 py-2">
              <div className="hoverEffect w-9 h-9 flex items-center justify-center">
                <XIcon
                  className="h-[22px] w-[22px]"
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            <div className="p-2 flex items-center space-x-2 relative">
              <span className="w-[0.5px] h-full z-[-1] absolute left-9 top-11 bg-gray-200"></span>
              <img
                src={post?.data()?.userImg}
                alt={`${post?.data()?.userImg && "user-image"}`}
                className="w-[45px] h-[45px] rounded-full object-cover cursor-pointer hover:brightness-90"
              />
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
            <p className="ml-16 text-gray-500 text-[15px] sm:text-[16px]">
              {post?.data()?.text}
            </p>
            <div className="p-4 flex  space-x-3">
              <img
                src={session.user.image}
                alt={`${session.user.image && "user-image"}`}
                className="w-[45px] h-[45px] rounded-full cursor-pointer hover:brightness-95"
              />
              <textarea
                className="w-full border-none focus:ring-0 text-[16px] placeholder-gray-300 tracking-wide min-h-[50px] text-gray-800"
                rows="2"
                placeholder="Tweet your reply"
                onChange={(e) => setInputValue(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-between py-2.5 mx-8 border-t border-gray-200">
              <div className="flex">
                <div className="">
                  <PhotographIcon className="hoverEffect p-2 h-10 w-10 text-sky-500 hover:bg-sky-100" />
                  <input type="file" className="hidden" />
                </div>
                <EmojiHappyIcon className="hoverEffect p-2 h-10 w-10 text-sky-500 hover:bg-sky-100" />
              </div>
              <button
                className="bg-blue-400 text-white font-bold shadow-md  px-4 py-1.5 rounded-full hover:brightness-95 disabled:opacity-50"
                onClick={handleSendComment}
              >
                Reply
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CommentModal;
