"use server";

import { COOKIE_NAMES, getCookie } from "@/src/lib/cookies";
import UserLayoutClient from "./UserLayoutClient";
import { ReactElement } from "react";

interface PanelLayoutProps {
  children: ReactElement;
}

export default async function PanelLayout({ children }: PanelLayoutProps) {
  const token = await getCookie(COOKIE_NAMES.accessToken);

  return <UserLayoutClient accessToken={token}>{children}</UserLayoutClient>;
}
