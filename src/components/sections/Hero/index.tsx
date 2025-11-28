import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import dashboardImage from "../../../../public/dashboard.png";
import { Button } from "../../ui/Button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative py-18 px-3 sm:px-3 lg:px-6 overflow-hidden">
      <div className="relative mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm border border-gray-200 mb-6 animate-fade-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping-custom absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            <span className="text-sm">Now in Public Beta</span>
          </div>

          <h1
            className="mb-6 max-w-3xl mx-auto animate-fade-in"
            id="hero-heading"
          >
            Launch Your Product{" "}
            <span className="bg-linear-to-r from-primary to-auxiliar bg-clip-text text-transparent">
              10x Faster
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6 animate-fade-in stagger-2">
            Stop wasting hours writing descriptions. Our AI optimizes titles,
            bullets, and SEO for Amazon, eBay, and Shopify in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16 animate-fade-in stagger-3">
            <Link href="/login">
              <Button
                variant="primary"
                className="flex items-center gap-2"
                aria-label="Start free trial"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Button>
            </Link>
            <Button variant="outline" aria-label="Watch demo video">
              Watch Demo
            </Button>
          </div>

          <div className="relative mx-auto animate-fade-in stagger-3">
            <div
              className="absolute -inset-3 bg-linear-to-r from-primary to-auxiliar rounded-2xl blur-3xl opacity-20 animate-pulse-custom"
              aria-hidden="true"
            ></div>

            <div className="relative max-w-11/12 mx-auto bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
              <div
                className="absolute top-3 left-3 flex gap-2"
                aria-hidden="true"
              >
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="absolute top-3 right-3 bg-linear-to-r from-primary to-auxiliar text-white px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
                <Zap className="w-3 h-3" aria-hidden="true" />
                <span className="text-sm">Dashboard</span>
              </div>

              <div className="pt-12">
                <Image
                  src={dashboardImage}
                  alt="Product dashboard interface showing analytics and metrics"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
