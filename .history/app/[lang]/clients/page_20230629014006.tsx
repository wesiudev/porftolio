import { provider, auth } from "../../../firebase/index";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleAuthButtons from "./GoogleAuthProvider/GoogleAuth";
// import FadingImage from "./hero/Images";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FaEnvelope, FaKey } from "react-icons/fa";
import Loading from "./loading";
import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
export default async function ClientsPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
  if (user && !loading) {
    redirect("/dashboard");
  }

  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center font-sans">
        <div className="bg-gradient-to-br from-zinc-900 via-white-900 to-purple-900 hidden lg:block w-full md:w-3/5 xl:w-2/3 h-screen relative"></div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-14 xl:px-12
      flex items-center justify-center z-[1500]"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Sign in to your account
            </h1>

            <div className="mt-6">
              <div>
                <label className="flex flex-row items-center text-gray-700">
                  <FaEnvelope className="mr-1" />
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
                  Password
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
              {isLoginUser && (
                <div className="text-right mt-2">
                  <a
                    onClick={() => setForgotPassword(true)}
                    href="#"
                    className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                  >
                    Forgot Password?
                  </a>
                </div>
              )}
              {isLoginUser && (
                <button
                  onClick={emailPasswordLogin}
                  type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
                >
                  Log In
                </button>
              )}
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
                <label className="block text-gray-100">Enter email</label>
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
        </div>
      </section>
    </>
  );
}
