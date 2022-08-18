// Libraries
import { useRouter } from "next/router";
import { FC } from "react";

export default function useTabPath(path: string): boolean {
  const router = useRouter();

  return router.pathname.startsWith(path);
}
