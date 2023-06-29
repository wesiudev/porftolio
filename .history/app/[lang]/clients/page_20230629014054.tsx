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
        ></div>
      </section>
    </>
  );
}
