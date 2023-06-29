"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
export default function ClientsPage() {
  const dispatch = useDispatch();
  const [{ userName, password }, setUserInput] = useState<{
    userName: string;
    password: string;
  }>({ userName: "", password: "" });
  const handleFormSubmit: React.MouseEventHandler<HTMLDivElement> = () => {};
  const handleTextInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserInput({
      userName,
      password,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center font-sans">
        <div className="bg-gradient-to-br from-zinc-900 via-white-900 to-purple-900 hidden lg:block w-full md:w-3/5 xl:w-2/3 h-screen relative">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "none",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate3d(-50%,-50%,0)",
              }}
            ></div>
            <Link href="/">
              <div className="absolute m-10 text-gray-100 text-xl">
                decocanva
              </div>
            </Link>
          </div>
          <div className="h-screen w-full flex rounded-lg">
            <Canvas
              style={{ zIndex: "20" }}
              camera={{ position: [0, 0, 2], fov: 50 }}
            >
              {/* <FadingImage /> */}
            </Canvas>
          </div>
          <Hero />
        </div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-14 xl:px-12
      flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              {isLoginUser && "Sign in to your account"}
              {!isLoginUser && "Create an account"}
            </h1>

            <div className="mt-6">
              <div>
                <label className="flex flex-row items-center text-gray-700">
                  <FaEnvelope className="mr-1" /> Email Address
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
              {!isLoginUser && (
                <button
                  onClick={registerWithEmailPassword}
                  type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
                >
                  Sign up
                </button>
              )}
            </div>

            <hr className="my-6 border-gray-300 w-full" />

            <GoogleAuthButtons
              user={user}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
            />
            {isLoginUser && (
              <p className="mt-8">
                Need an account?{" "}
                <a
                  onClick={() => setIsLoginUser(false)}
                  className="cursor-pointer text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Create an account
                </a>
              </p>
            )}
            {!isLoginUser && (
              <p className="mt-8">
                Already registered?{" "}
                <a
                  onClick={() => setIsLoginUser(true)}
                  className="cursor-pointer text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Sign in
                </a>
              </p>
            )}
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
