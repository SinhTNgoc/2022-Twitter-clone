import {
  EmojiHappyIcon,
  PhotographIcon,
  UserAddIcon,
  XIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRef, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, uploadString, ref } from "firebase/storage";

const Input = () => {
  const { data: session } = useSession();
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleSendPost = async () => {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      text: inputValue,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
      name: session.user.name,
      username: session.user.username,
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadUrl,
        });
      });
    }
    setInputValue("");
    setSelectedFile(null);
    setLoading(false);
  };

  const handlePostImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <>
      {session && (
        <div className="flex border-b border-gray-200 space-x-3 p-3">
          <div>
            <Image
              onClick={signOut}
              src={session.user.image}
              alt="user-image"
              width={50}
              height={50}
              className="rounded-full cursor-pointer hover:brightness-95"
            />
          </div>
          <div className="w-full divide-y divide-gray-200">
            <div>
              <textarea
                className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-800"
                rows="2"
                placeholder="What's happening?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              ></textarea>
              {selectedFile && (
                <div className="relative">
                  <XIcon
                    className="h-5 absolute right-0 bg-red-500 text-white rounded cursor-pointer shadow-md shadow-red-600"
                    onClick={() => setSelectedFile(null)}
                  />
                  <img
                    src={selectedFile}
                    alt=""
                    className={`${
                      loading && "animate-pulse"
                    } h-[300px] w-full rounded`}
                  />
                </div>
              )}
            </div>
            <div className="flex items-center justify-between pt-2.5">
              <div className="flex">
                <div className="" onClick={() => inputRef.current.click()}>
                  <PhotographIcon className="hoverEffect p-2 h-10 w-10 text-sky-500 hover:bg-sky-100" />
                  <input
                    type="file"
                    className="hidden"
                    ref={inputRef}
                    onChange={handlePostImage}
                  />
                </div>
                <EmojiHappyIcon className="hoverEffect p-2 h-10 w-10 text-sky-500 hover:bg-sky-100" />
              </div>
              <button
                className="bg-blue-400 text-white font-bold shadow-md  px-4 py-1.5 rounded-full hover:brightness-95 disabled:opacity-50"
                disabled={!inputValue.trim()}
                onClick={handleSendPost}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
