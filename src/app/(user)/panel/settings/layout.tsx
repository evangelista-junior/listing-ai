"use client";

import React, { useState } from "react";
import { User, Bell, CreditCard, Shield, Globe } from "lucide-react";
import Link from "next/link";

interface SettingsProps {
  children: React.ReactElement;
}

export default function SettingsPage({ children }: SettingsProps) {
  const [activeTab, setActiveTab] = useState("");

  const tabs = [
    { id: "profile", href: "profile", name: "Profile", icon: User },
    {
      id: "notifications",
      href: "notifications",
      name: "Notifications",
      icon: Bell,
    },
    { id: "billing", href: "billing", name: "Billing", icon: CreditCard },
    { id: "security", href: "security", name: "Security", icon: Shield },
    {
      id: "integrations",
      href: "integrations",
      name: "Integrations",
      icon: Globe,
    },
  ];

  return (
    <div>
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="mb-2">Settings</h1>
          <p className="text-gray-600">
            Manage your account settings and preferences.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] justify-center gap-6">
          {/* Tabs Sidebar */}
          <div className="col-span-2 lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-sm border border-gray-200 p-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Link key={tab.id} href={`/panel/settings/${tab.href}`}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? "bg-linear-to-r from-[#2563EB] to-[#22D3EE] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  </Link>
                );
              })}
            </nav>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
