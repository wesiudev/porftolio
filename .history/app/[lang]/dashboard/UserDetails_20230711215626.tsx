"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

export default function UserDetails() {
  const [user, loading] = useAuthState(auth);
  function logout() {
    signOut(auth);
  }
  return (
    <div>
      {user?.email} <button onClick={logout}>logout</button>{" "}
    </div>
  );
}
