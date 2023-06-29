"use client";
import { useRouter } from "next/navigation";
interface RouteProps {
  to: string;
  lang: string;
  children: React.ReactNode;
}
export const LinkRoute = ({ to, lang, children }: RouteProps) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(`/${lang}/${to}`)}>{children}</button>
  );
};
