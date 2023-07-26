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
  !auth.currentUser && !loading && redirect("/clients");
  return (
    <div className="flex flex-row mt-6">
      <span>{user?.email}</span>{" "}
      <button className="ml-2 text-gray-400" onClick={logout}>
        wyloguj
      </button>{" "}
    </div>
  );
}