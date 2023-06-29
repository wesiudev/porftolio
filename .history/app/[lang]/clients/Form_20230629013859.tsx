import { useState } from "react";

export const Form = () => {
  const [isLoginUser, setIsLoginUser] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
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
  return <></>;
};
