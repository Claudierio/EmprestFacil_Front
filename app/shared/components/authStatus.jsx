"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

async function keycloakSessionLogOut() {
  try {
    await fetch(`/api/auth/logout`, { method: "GET" });
  } catch (err) {
    console.error(err);
  }
}

export default function AuthStatus() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (
      status != "loading" &&
      session &&
      session?.error === "RefreshAccessTokenError"
    ) {
      signOut({ callbackUrl: "/" });
    }
  }, [session, status]);

  if (status == "loading") {
    return (
      <div className="main" style={{ color: "white" }}>
        Loading...
      </div>
    );
  } else if (session) {
    return (
      <div className="my-3">
        Logged in as <span>{session.user.email}</span>{" "}
        <button
          className="buttonLogout"
          onClick={() => {
            keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
          }}
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <div className="notLogged" style={{ color: "white" }}>
      Not logged in.{" "}
      <button className="loginButton" onClick={() => signIn("keycloak")}>
        Log in
      </button>
         
    </div>
  );
}
