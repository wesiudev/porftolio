"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, getUser } from "../../../firebase";
import { signOut } from "firebase/auth";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserDetails() {
  const [user, loading] = useAuthState(auth);
  const [userData, setUserData] = useState<any>({});
  function logout() {
    signOut(auth);
    redirect("/clients");
  }
  useEffect(() => {
    !loading && getUser(user?.email).then((res) => setUserData(res[0]));
    console.log(userData);
  }, [loading]);
  !auth.currentUser && !loading && redirect("/clients");
  return (
    <div className="flex flex-row justify-between  w-full p-6 rounded-b-xl bg-white">
      <div className="flex flex-row">
        <span className="ml-2">{user?.email}</span>{" "}
      </div>
      <button className="ml-2 text-gray-400" onClick={logout}>
        wyloguj
      </button>{" "}
    </div>
  );
}
