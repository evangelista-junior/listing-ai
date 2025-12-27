"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Settings,
  TableOfContents,
} from "lucide-react";
import { usePanelStore } from "@/src/store/Panel";
import { useAuthStore } from "@/src/store/Auth";

interface UserLayoutProps {
  children: React.ReactNode;
  accessToken?: string;
}

const navigation = [
  { name: "Dashboard", href: "/panel/dashboard", icon: LayoutDashboard },
  {
    name: "Create Listing",
    href: "/panel/listings/create-listing",
    icon: FileText,
  },
  { name: "Listings", href: "/panel/listings", icon: TableOfContents },
  { name: "Settings", href: "/panel/settings", icon: Settings },
];

export default function UserLayoutClient({
  children,
  accessToken,
}: UserLayoutProps) {
  const location = usePathname();
  const router = useRouter();

  const { isSideMenuOpen, toggleSideMenu } = usePanelStore();
  const { isAuthenticated, setUser } = useAuthStore();

  useEffect(() => {
    if (accessToken) {
      let token = JSON.parse(accessToken);
      setUser(token);
      router.push("/panel/dashboard");
      return;
    }

    if (!isAuthenticated) {
      router.push("/auth/login");
    }
  }, [accessToken]);

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <aside
          className={`${
            isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0 left-0 z-20 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out pt-15 `}
        >
          <nav className="px-3 py-6 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "bg-linear-to-r from-primary to-auxiliar text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => toggleSideMenu()}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="w-screen px-6 py-9">{children}</main>
      </div>
      {isSideMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-10 pt-15"
          onClick={() => toggleSideMenu()}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
