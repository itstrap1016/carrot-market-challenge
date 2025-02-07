"use server";

import db from "@/lib/db";

export interface TweetInterface {
  tweet: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
}

export default async function getTweets(page: number) {
  const pageSize = 5;
  const tweets = await db.tweet.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
    orderBy: { createdAt: "desc" },
  });

  const totalTweets = await db.tweet.count();
  const totalPages = Math.ceil(totalTweets / pageSize);

  return { tweets, totalPages };
}
