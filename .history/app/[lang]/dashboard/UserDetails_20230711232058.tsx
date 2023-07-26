"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, getUser } from "../../../firebase";
import { signOut } from "firebase/auth";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown, MdOutlineLogout } from "react-icons/md";

export default function UserDetails() {
  //user logic
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
  //animations
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex flex-row justify-between  w-full p-6 rounded-b-xl bg-white">
      <div
        className={`flex flex-row items-center bg-gray-100 rounded-lg p-2 text-4xl relative duration-300 ${
          isMenuOpen ? "rounded-lg rounded-b-none" : "rounded-lg"
        }`}
      >
        <FaUserCircle className=" text-blue-400" />
        <button
          className="flex flex-row items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-2xl ml-2 font-bold">{user?.email}</span>{" "}
          <MdOutlineKeyboardArrowDown className=" ml-2 text-gray-400" />
        </button>
        <div
          className={`absolute w-full left-0 bottom-0 bg-gray-100 p-2 rounded-b-lg duration-300 ${
            isMenuOpen
              ? "translate-y-[100%] scale-y-100 opacity-100"
              : "translate-y-[0%] scale-y-0 opacity-0"
          }`}
        >
          <button
            className="w-full text-gray-400 flex flex-row items-center justify-center text-xl"
            onClick={logout}
          >
            <MdOutlineLogout className="mr-2" />
            wyloguj
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
