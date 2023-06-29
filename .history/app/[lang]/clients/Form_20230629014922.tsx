"use client";
import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { provider, auth } from "../../../firebase/index";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { redirect } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./loading";
export const Form = ({ dictionary }: { dictionary: any }) => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [user, loading] = useAuthState(auth);
  function handleLogin() {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result!);
        const token = credential?.accessToken;
        if (token) {
          redirect("/dashboard");
        }
        // The signed-in user info.
        const user = result?.user;
      })
      .catch((error) => {});
  }
  function handleLogout() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  }
  function emailPasswordLogin() {
    if (email.includes("@") && email.includes(".")) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {})
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            setEmailError(dictionary["Auth"].emailError);
            setTimeout(() => {
              setEmailError("");
            }, 7500);
          }
        });
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError(dictionary["Auth"].emptyEmailError);
      setTimeout(() => {
        setEmailError("");
      }, 7500);
    }
    if (password.length < 6) {
      setPasswordError(dictionary["Auth"].passwordShortError);
      setTimeout(() => {
        setPasswordError("");
      }, 7500);
    }
  }
  if (loading) {
    return <Loading />;
  }
  if (user && !loading) {
    redirect("/dashboard");
  }
  return (
    <>
      {" "}
      <div className="w-full h-100">
        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
          {dictionary["Auth"].loginHeadline}
        </h1>

        <div className="mt-6">
          <div>
            <label className="flex flex-row items-center text-gray-700">
              <FaEnvelope className="mr-1" /> {dictionary["Auth"].email}
            </label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Email Address"
              className={`w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none ${
                emailError !== "" && "border-2 border-red-600"
              }`}
            />
            {emailError !== "" && (
              <span className=" text-red-600">{emailError}</span>
            )}
          </div>

          <div className="mt-4">
            <label className="flex flex-row items-center text-gray-700">
              <FaKey className="mr-1" />
              {dictionary["Auth"].password}
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter Password"
              className={`w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
    focus:bg-white focus:outline-none${
      passwordError !== "" && "border-2 border-red-600"
    }`}
            />
            {passwordError !== "" && (
              <span className=" text-red-600">{passwordError}</span>
            )}
          </div>

          <div className="text-right mt-2">
            <a
              onClick={() => setForgotPassword(true)}
              href="#"
              className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
            >
              {dictionary["Auth"].forgotPassword}
            </a>
          </div>

          <button
            onClick={emailPasswordLogin}
            type="submit"
            className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
  px-4 py-3 mt-6"
          >
            {dictionary["Auth"].loginBtn}
          </button>
        </div>

        <hr className="my-6 border-gray-300 w-full" />

        {/* <GoogleAuthButtons
    user={user}
    handleLogin={handleLogin}
    handleLogout={handleLogout}
  /> */}
      </div>
      {forgotPassword && (
        <div className="w-5/6 lg:w-1/3 z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-600 rounded  px-5 py-12">
          <div className="space-y-10 flex flex-col justify-start">
            <label className="block text-gray-100">
              {dictionary["Auth"].email}
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Email Address"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
            <div className="flex flex-row">
              <button
                onClick={() => setForgotPassword(false)}
                type="submit"
                className="mr-4 w-1/2 block bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg
  px-4 py-3 mt-6"
              >
                Close
              </button>
              <button
                onClick={() => console.log("ok")}
                type="submit"
                className="w-1/2 block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg
  px-4 py-3 mt-6"
              >
                Reset password
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
