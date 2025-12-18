"use server";

import { COOKIE_NAMES, getCookie } from "@/src/lib/cookies";
import UserLayoutClient from "./UserLayoutClient";

interface PanelLayoutProps {
  children: React.ReactNode;
}

export default async function PanelLayout({ children }: PanelLayoutProps) {
  const token = await getCookie(COOKIE_NAMES.accessToken);

  return <UserLayoutClient accessToken={token}>{children}</UserLayoutClient>;
}
