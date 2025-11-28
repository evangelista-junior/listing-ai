"use client";
import mockupImg from "@/public/mockup_img.jpg";
import FadeIn from "./styles/FadeIn";
import {
  CheckCircle2,
  XCircle,
  Zap,
  BarChart3,
  Globe,
  ArrowRight,
  Menu,
  Bot,
} from "lucide-react";
import Image from "next/image";

const Button = ({ children, variant = "primary", className = "" }) => {
  const baseStyle =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30",
    secondary:
      "bg-white text-slate-900 border border-slate-200 hover:border-blue-600 hover:text-blue-600",
    outline:
      "bg-transparent text-white border border-white/20 hover:bg-white/10",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- Page Sections ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <Bot size={20} />
          </div>
          <span className="font-bold text-xl text-slate-900">ListingAI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors"
          >
            Pricing
          </a>
          <Button variant="primary" className="py-2 px-4 text-sm">
            Start Free
          </Button>
        </div>
        <div className="md:hidden text-slate-600">
          <Menu />
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="py-16 md:py-24 relative overflow-hidden bg-slate-50 pt-20 lg:pt-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
      {/* Hero Text */}
      <div className="text-center lg:text-left z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            New: TikTok Shop Integration
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Create High-Converting Listings with{" "}
            <span className="text-blue-600">Advanced AI</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Stop wasting hours writing descriptions. Our AI optimizes titles,
            bullets, and SEO for Amazon, eBay, and Shopify in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button>
              Start Free Trial Now <ArrowRight size={18} />
            </Button>
            <Button variant="secondary">View Demo</Button>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            ⚡ No credit card required • 14-day free trial
          </p>
        </FadeIn>
      </div>

      {/* Abstract UI Mockup */}
      <FadeIn delay={0.2}>
        <div className="relative">
          {/* Glow effect for the mockup (FIXED: bg-linear-to-r -> bg-gradient-to-r) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-20"></div>

          <div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Mockup Header */}
            <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="h-2 w-32 bg-slate-200 rounded-full"></div>
            </div>
            {/* Mockup Body */}
            <div className="p-6 grid gap-6">
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center text-slate-300">
                  <Image
                    alt="Mockup image of a pair of pants."
                    src={mockupImg}
                    className="h-fit w-fit shadow rounded-lg"
                  />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="h-4 w-3/4 bg-blue-100 rounded animate-pulse"></div>
                  <div className="h-3 w-full bg-slate-100 rounded"></div>
                  <div className="h-3 w-5/6 bg-slate-100 rounded"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-700">
                    SEO Score
                  </span>
                  <span className="text-xs font-bold text-green-600">
                    98/100
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[98%] bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-center gap-2 text-blue-700 mb-2">
                  <Zap size={16} />
                  <span className="text-xs font-bold">AI Suggestion</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  "Include terms like 'Relaxed Fit' and 'Fade-Resistant Cotton'
                  for a 42% lift in qualified traffic.""
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

const SocialProof = () => (
  <div className="bg-white py-10 border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-sm font-semibold text-slate-500 mb-6 uppercase tracking-wider">
        Trusted by the biggest marketplaces
      </p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
        {/* Logo Placeholders */}
        <span className="text-xl font-bold font-serif text-slate-800">
          Amazon
        </span>
        <span className="text-xl font-bold text-slate-800">eBay</span>
        <span className="text-xl font-bold text-slate-800">Shopify</span>
        <span className="text-xl font-bold text-slate-800">Etsy</span>
        <span className="text-xl font-bold text-slate-800 italic">
          WooCommerce
        </span>
      </div>
    </div>
  </div>
);

const Comparison = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          The Evolution of Listing Management
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          See why thousands of sellers are ditching manual spreadsheets and
          tedious processes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* The Old Way */}
        <FadeIn>
          <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100 h-full">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="text-red-500" size={32} />
              <h3 className="text-xl font-bold text-slate-800">
                The Old Way: Manual Process
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Hours spent on tedious copywriting",
                "Keyword strategy based on guesswork",
                "Manual updates across every channel",
                "Frequent input errors and inconsistencies",
                "Stagnant search rankings and low visibility",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <XCircle size={18} className="text-red-400 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* With Listing AI */}
        <FadeIn delay={0.2}>
          <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 h-full shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              RECOMMENDED
            </div>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="text-blue-600" size={32} />
              <h3 className="text-xl font-bold text-slate-800">
                The New Way: With ListingAI
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Text generation in seconds (not hours)",
                "Data-driven SEO optimization",
                "One-click multi-channel synchronization",
                "Automatic grammar and style correction",
                "Proven increase in conversion rates",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-700 font-medium"
                >
                  <CheckCircle2
                    size={18}
                    className="text-blue-600 mt-1 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-16 md:py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Everything You Need to Scale
        </h2>
        <p className="text-slate-600">
          Powerful tools designed for serious sellers who want to dominate the
          marketplace and maximize profit.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Bot className="text-blue-600" size={24} />,
            title: "AI Generation Engine",
            desc: "Our Large Language Model is trained exclusively on top-performing e-commerce listings. Create titles and bullets that sell.",
          },
          {
            icon: <BarChart3 className="text-blue-600" size={24} />,
            title: "Advanced SEO Optimization",
            desc: "We identify high-volume, low-competition keywords and integrate them organically into your product copy for higher rankings.",
          },
          {
            icon: <Globe className="text-blue-600" size={24} />,
            title: "Seamless Multi-Channel Sync",
            desc: "Create once, publish everywhere. Effortlessly synchronize your inventory and listings across Amazon, eBay, and Shopify.",
          },
        ].map((feature, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
        Simple, Transparent Pricing
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Starter */}
        <div className="p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
          <h3 className="text-lg font-semibold text-slate-900">Starter</h3>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-bold text-slate-900">$29</span>
            <span className="text-slate-500">/month</span>
          </div>
          <p className="text-sm text-slate-600 mb-6">
            Ideal for new sellers getting started.
          </p>
          <Button variant="secondary" className="w-full mb-8">
            Start
          </Button>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">
              <CheckCircle2 size={16} className="text-blue-600" /> 50
              Listings/month
            </li>
            <li className="flex gap-2">
              <CheckCircle2 size={16} className="text-blue-600" /> Amazon only
            </li>
            <li className="flex gap-2">
              <CheckCircle2 size={16} className="text-blue-600" /> Email Support
            </li>
          </ul>
        </div>

        {/* Pro */}
        <div className="p-8 rounded-2xl border-2 border-blue-600 bg-slate-900 text-white relative transform md:-translate-y-4 shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </div>
          <h3 className="text-lg font-semibold text-blue-200">Pro</h3>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-bold text-white">$79</span>
            <span className="text-slate-400">/month</span>
          </div>
          <p className="text-sm text-slate-300 mb-6">
            For sellers looking to scale rapidly and efficiently.
          </p>
          <Button
            variant="primary"
            className="w-full mb-8 bg-blue-500 hover:bg-blue-400 border-none"
          >
            Get Started Now
          </Button>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-2">
              <CheckCircle2 size={16} className="text-blue-400" /> Unlimited
              Listings
            </li>
            <li className="flex gap-2">
              <CheckCircle2 size={16} className="text-blue-400" /> All
              Marketplaces & Integrations
            </li>
            <li className="flex gap-2">
              <CheckCircle2 size={16} className="text-blue-400" /> Advanced SEO
              Toolset
            </li>
            <li className="flex gap-2">
              <CheckCircle2 size={16} className="text-blue-400" /> Priority
              Support
            </li>
          </ul>
        </div>

        {/* Enterprise */}
        <div className="p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
          <h3 className="text-lg font-semibold text-slate-900">Enterprise</h3>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-bold text-slate-900">Custom</span>
          </div>
          <p className="text-sm text-slate-600 mb-6">
            Built for large operations with custom requirements.
          </p>
          <Button variant="secondary" className="w-full mb-8">
            Contact Sales
          </Button>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">
              <CheckCircle2 size={16} className="text-blue-600" /> API Access
            </li>
            <li className="flex gap-2">
              <CheckCircle2 size={16} className="text-blue-600" /> Dedicated
              Account Manager
            </li>
            <li className="flex gap-2">
              <CheckCircle2 size={16} className="text-blue-600" /> Custom AI
              Models & Training
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4 text-white">
            <Bot size={24} />
            <span className="font-bold text-xl">ListingAI</span>
          </div>
          <p className="text-slate-400 text-sm max-w-xs">
            Helping e-commerce sellers sell more with less effort through the
            power of Artificial Intelligence.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Integrations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Listing AI Tool. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="text-slate-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Comparison />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
