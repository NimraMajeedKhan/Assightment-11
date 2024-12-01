
import { SessionWrapper } from "@/components/SessionWrapper";
import LoginComponent from "@/components/login/LoginComponent"
import SignOutComponent from "@/components/login/SignOutComponent";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div>
      <SessionWrapper>
        {isAuthenticated
          ? <SignOutComponent />
          : <LoginComponent />
        }
      </SessionWrapper>
    </div>
  );
}