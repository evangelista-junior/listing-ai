import {
  MessageCircle,
  Mail,
  Clock,
  Headphones,
  Shield,
  Calendar,
} from "lucide-react";
import { Button } from "../../ui/Button";
import Link from "next/link";

export function Support() {
  const supportChannels = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed help for complex questions",
      availability: "Response within 2 hours",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant answers from our support team",
      availability: "Available 24/7",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Calendar,
      title: "Book a Demo",
      description: "Schedule a personalized walkthrough with our team",
      availability: "By appointment",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Support team ready around the clock",
    },
    {
      icon: Headphones,
      title: "Expert Assistance",
      description: "Trained specialists in e-commerce",
    },
    {
      icon: Shield,
      title: "Priority Support",
      description: "Premium plans get faster response",
    },
  ];

  return (
    <section
      id="support"
      className="relative mx-auto py-24 bg-linear-to-b from-white to-white-soft"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-6">
        {/* Header */}
        <div className="text-center mb-15">
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-linear-to-r from-primary/10 to-auxiliar/10 rounded-full mb-3">
            <Headphones className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Support</span>
          </div>
          <h2 className="mb-3">We're Here to Help</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated support team is committed to your success. Get the
            help you need, when you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-15">
          {supportChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 bg-linear-to-br ${channel.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-black mb-3">{channel.title}</h3>
                <p className="text-gray-600 mb-3">{channel.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-gray-500">{channel.availability}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-9 shadow-sm border border-gray-200 mb-9">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex gap-3">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-linear-to-br from-primary to-auxiliar rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-linear-to-r from-primary to-auxiliar rounded-2xl p-6 md:p-9 text-center text-white">
          <h3 className="text-3xl font-bold mb-3">
            Need Help Getting Started?
          </h3>
          <p className="text-xl mb-6 text-white/90 max-w-2xl mx-auto">
            Our onboarding team will guide you through setup and answer all your
            questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/support/book-demo">
              <Button variant="white">Book a Demo</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
