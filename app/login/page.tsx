"use client";

import Button from "../components/button";
import Input from "../components/input";
import Link from "next/link";
import { logIn } from "./actions";
import { useActionState } from "react";

export default function LogIn() {
  const [state, formAction] = useActionState(logIn, null);

  return (
    <div className="pt-20">
      <h1 className="text-center text-4xl">Login</h1>
      <form
        action={formAction}
        className="w-[500px] mt-10 mx-auto flex flex-col gap-4 "
      >
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
        ></Input>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password}
        ></Input>
        <Button text="로그인" />
      </form>
    </div>
  );
}
