"use server";

export async function handleForm(prevState: any, formData: FormData) {
  const password = formData.get("password");
  if (password === "12345") {
    return {
      logined: true,
      error: "",
    };
  } else {
    return {
      logined: false,
      error: "wrong password",
    };
  }
}
