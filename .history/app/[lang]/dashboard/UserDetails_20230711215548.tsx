"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

export default function UserDetails() {
  const [user, loading] = useAuthState(auth);
  return (
    <div>
      {user?.email} <button onClick={() => signOut(auth)}>logout</button>{" "}
    </div>
  );
}
