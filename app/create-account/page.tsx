"use client";

import Button from "../components/button";
import Input from "../components/input";
import { createAccount } from "./actions";
import { useActionState } from "react";

export default function CreateAccount() {
  const [state, formAction] = useActionState(createAccount, null);

  return (
    <div className="pt-20">
      <h1 className="text-center text-4xl">Create Account</h1>
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
          name="username"
          type="text"
          placeholder="Username"
          required
          errors={state?.fieldErrors.username}
        ></Input>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password}
        ></Input>
        <Input
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          required
          errors={state?.fieldErrors.confirm_password}
        ></Input>
        <Button text="회원가입" />
      </form>
    </div>
  );
}
