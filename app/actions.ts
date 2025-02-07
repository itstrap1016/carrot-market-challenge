"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { z } from "zod";

const formSchema = z.object({
  tweet: z.string().min(1, "트윗은 최소 1글자 이상이어야 합니다"),
});

export type CreateTweetResponse =
  | {
      id: number;
      tweet: string;
      createdAt: Date;
      updatedAt: Date;
      authorId: number;
    } // 트윗 생성 성공
  | { fieldErrors: Record<string, string> };

export default async function createTweet(prevState: any, formData: FormData) {
  const session = await getSession();

  if (!session.id) {
    throw new Error("로그인이 필요합니다.");
  }

  const tweet = formData.get("tweet") as string;
  const result = await formSchema.spa({ tweet: tweet });

  if (!result.success) {
    return result.error.flatten();
  } else {
    const newTweet = await db.tweet.create({
      data: {
        tweet,
        authorId: Number(session.id), // `session.id`를 `Int`로 변환
      },
      select: {
        id: true,
      },
    });
  }
}
