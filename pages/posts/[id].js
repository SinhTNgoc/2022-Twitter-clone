import { ArrowLeftIcon } from "@heroicons/react/outline";
import Head from "next/head";
import { useRouter } from "next/router";
import Sidebar from "../../components/Sidebar";
import Widgets from "../../components/Widgets";
import Post from "../../components/Post";
import { useEffect, useState } from "react";

import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";
import Comment from "../../components/Comment";

export default function PostPage({ newsResults, randomUserFollow }) {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const handleBackHomePage = () => {
    router.push("/");
  };

  useEffect(() => {
    onSnapshot(doc(db, "posts", id), (snapshot) => {
      setPost(snapshot);
    });
  }, [id]);

  //Get comments
  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [id]);

  return (
    <div>
      <Head>
        <title>Next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen max-w-[1268px] mx-auto">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <div className="xl:ml-[240px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
          <div className="flex items-center  py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="hoverEffect flex items-center justify-center mr-2 ">
              <ArrowLeftIcon
                className=" h-5 w-5  cursor-pointer"
                onClick={handleBackHomePage}
              />
            </div>
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">
              Tweet
            </h2>
          </div>
          <Post id={id} post={post} />
          {comments &&
            comments.length > 0 &&
            comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
        </div>

        {/* Widgets */}
        <Widgets
          newsResults={newsResults?.articles}
          randomUserFollow={randomUserFollow?.results}
        />
        {/* Modal */}
      </main>
    </div>
  );
}

// https://saurav.tech/NewsAPI/top-headlines/category/business/us.json

export async function getServerSideProps() {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());

  const randomUserFollow = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture"
  ).then((res) => res.json());

  return {
    props: { newsResults, randomUserFollow },
  };
}