"use server";

import { COOKIE_NAMES, getCookie } from "@/src/lib/cookies";
import UserLayoutClient from "./UserLayoutClient";
import { ReactNode } from "react";

interface PanelLayoutProps {
  children: ReactNode;
}

export default async function PanelLayout({ children }: PanelLayoutProps) {
  const token = await getCookie(COOKIE_NAMES.accessToken);
  const userInfo = await getCookie(COOKIE_NAMES.userInfo);

  return (
    <UserLayoutClient userInfo={userInfo} token={token}>
      {children}
    </UserLayoutClient>
  );
}
