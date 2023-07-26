"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

export default function UserDetails() {
  const [user, loading] = useAuthState(auth);
  return <div>{user?.email}</div>;
}
