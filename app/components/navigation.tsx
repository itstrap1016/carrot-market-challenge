import getSession from "@/lib/session";
import Link from "next/link";

export default async function Navigation() {
  const session = await getSession();
  return (
    <>
      {session.id ? (
        <nav className="fixed top-0 left-0 w-full bg-white flex justify-between px-40">
          <Link href="/">홈</Link>
          <Link href="/profile">프로필</Link>
        </nav>
      ) : (
        <nav className="fixed top-0 left-0 w-full bg-white flex justify-between px-40">
          <Link href="/login">로그인</Link>
          <Link href="/create-account">회원가입</Link>
        </nav>
      )}
    </>
  );
}
