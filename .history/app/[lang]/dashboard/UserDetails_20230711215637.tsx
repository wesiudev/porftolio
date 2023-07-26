"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { redirect } from "next/navigation";

export default function UserDetails() {
  const [user, loading] = useAuthState(auth);
  function logout() {
    signOut(auth);
    redirect("/clients");
  }
  return (
    <div>
      {user?.email} <button onClick={logout}>logout</button>{" "}
    </div>
  );
}
