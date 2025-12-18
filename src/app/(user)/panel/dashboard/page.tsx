"use client";

import { useAuthStore } from "@/src/store/Auth";
import {
  TrendingUp,
  FileText,
  DollarSign,
  Eye,
  ArrowUpRight,
} from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuthStore();
  const stats = [
    {
      name: "Total Listings",
      value: "247",
      change: "+12%",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Total Views",
      value: "18.2K",
      change: "+23%",
      icon: Eye,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Est. Revenue",
      value: "$45,231",
      change: "+18%",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Conversion Rate",
      value: "3.24%",
      change: "+5%",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back {/* TODO: Login store get name and surname */}
          <strong className="bg-clip-text text-transparent bg-linear-to-br from-primary to-secondary">
            {user?.name}
          </strong>
          ! Here's what's happening with your listings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-12 h-12 bg-linear-to-br ${stat.color} rounded-lg flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <span className="flex items-center text-sm font-medium text-secondary">
                  {stat.change}
                  <ArrowUpRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </span>
              </div>
              <h3 className="text-3xl font-bold text-black-soft mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600">{stat.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
