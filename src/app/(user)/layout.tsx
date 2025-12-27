"use server";

import { COOKIE_NAMES, getCookie } from "@/src/lib/cookies";
import UserLayoutClient from "./UserLayoutClient";
import { ReactNode } from "react";

interface PanelLayoutProps {
  children: ReactNode;
}

export default async function PanelLayout({ children }: PanelLayoutProps) {
  const token = await getCookie(COOKIE_NAMES.accessToken);

  return <UserLayoutClient accessToken={token}>{children}</UserLayoutClient>;
}
