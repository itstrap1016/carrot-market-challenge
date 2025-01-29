"use client";

import FormInput from "./components/form-input";
import { useActionState } from "react";
import { handleForm } from "./actions";

export default function Home() {
  const [state, formAction, isPending] = useActionState(handleForm, null);

  return (
    <div className="bg-gray-100 w-screen h-screen pt-20">
      <div className="flex justify-center">
        <svg
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
          ></path>
        </svg>
      </div>
      <form className="flex flex-col">
        <div className="w-[500px] mx-auto mt-12 relative">
          <svg
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 absolute top-[50%] translate-y-[-50%] left-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            ></path>
          </svg>
          <FormInput type="email" name="email" placeholder="Email" />
        </div>
        <div className="w-[500px] mx-auto mt-4 relative">
          <svg
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 absolute top-[50%] translate-y-[-50%] left-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            ></path>
          </svg>
          <FormInput type="text" name="username" placeholder="Username" />
        </div>
        <div className="w-[500px] mx-auto mt-4 relative">
          <svg
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 absolute top-[50%] translate-y-[-50%] left-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
            ></path>
          </svg>
          <FormInput type="password" name="password" placeholder="Password" />
        </div>
        {state?.logined === false ? (
          <div className="w-[500px] mx-auto mt-4">
            <p className="text-red-500">{state.error}</p>
          </div>
        ) : null}
        {isPending ? (
          <button
            formAction={formAction}
            className="w-[500px] h-[60px] bg-gray-500 rounded-full mx-auto mt-6"
          >
            Loading...
          </button>
        ) : (
          <button
            formAction={formAction}
            className="w-[500px] h-[60px] bg-gray-300 rounded-full mx-auto mt-6"
          >
            Log In
          </button>
        )}
        {state?.logined === true ? (
          <div className="w-[500px] h-[80px] flex items-center p-6 gap-8 bg-green-400 mx-auto rounded-xl mt-6">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
            <p>Welcome Back!</p>
          </div>
        ) : null}
      </form>
    </div>
  );
}
