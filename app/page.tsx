"use client";

import { useActionState, useEffect, useState } from "react";
import Input from "./components/input";
import createTweet from "./actions";
import Button from "./components/button";
import getTweets, { TweetInterface } from "./getTweets";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import AddTweet from "./components/add-tweet";

export default function Home() {
  const [state, formAction] = useActionState(createTweet, null);
  const [tweets, setTweets] = useState<TweetInterface[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchTweets = async () => {
    const data = await getTweets(page);
    setTweets(data.tweets);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchTweets();
  }, [page]);

  const handleTweetUpload = async (formData: FormData) => {
    await createTweet(null, formData);
    await fetchTweets();
  };

  return (
    <div className="pt-20 w-[500px] mx-auto">
      <AddTweet
        handleTweetUpload={handleTweetUpload}
        errors={state?.fieldErrors?.tweet}
      />

      <ul className="mt-4">
        {tweets.map((tweet, index) => (
          <li key={index} className="border-b py-2">
            <Link
              href={`/tweets/${index}`}
              className="text-blue-500 hover:underline"
            >
              {tweet.tweet}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-between mt-4 items-center">
        <button
          disabled={page <= 1}
          onClick={() => setPage((prevState) => prevState - 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          ◀ 이전
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage((prevState) => prevState + 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          다음 ▶
        </button>
      </div>
    </div>
  );
}
