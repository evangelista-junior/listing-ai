"use client";

import { Button } from "@/src/components/ui/Button";
import { Key, X } from "lucide-react";
import { useState } from "react";

interface Platform {
  name: string;
  connected: boolean;
  logo: string;
  fields: {
    label: string;
    placeholder: string;
    type: string;
  }[];
}

const platforms: Platform[] = [
  {
    name: "Amazon",
    connected: true,
    logo: "AM",
    fields: [
      {
        label: "Access Key ID",
        placeholder: "AKIAIOSFODNN7EXAMPLE",
        type: "text",
      },
      {
        label: "Secret Access Key",
        placeholder: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
        type: "password",
      },
      {
        label: "Seller ID",
        placeholder: "A1234567890123",
        type: "text",
      },
      {
        label: "Marketplace ID",
        placeholder: "ATVPDKIKX0DER",
        type: "text",
      },
    ],
  },
  {
    name: "eBay",
    connected: true,
    logo: "EB",
    fields: [
      {
        label: "App ID (Client ID)",
        placeholder: "YourAppI-YourApp-PRD-1234567890-12345678",
        type: "text",
      },
      {
        label: "Cert ID (Client Secret)",
        placeholder: "PRD-1234567890ab-cdef-1234-5678-9012",
        type: "password",
      },
      {
        label: "OAuth Token",
        placeholder: "v^1.1#i^1#...",
        type: "password",
      },
    ],
  },
  {
    name: "Shopify",
    connected: false,
    logo: "SH",
    fields: [
      {
        label: "Store Name",
        placeholder: "your-store-name",
        type: "text",
      },
      {
        label: "API Key",
        placeholder: "shppa_1234567890abcdef",
        type: "text",
      },
      {
        label: "API Secret Key",
        placeholder: "shpss_1234567890abcdef",
        type: "password",
      },
      {
        label: "Access Token",
        placeholder: "shpat_1234567890abcdef",
        type: "password",
      },
    ],
  },
  {
    name: "Etsy",
    connected: false,
    logo: "ET",
    fields: [
      {
        label: "API Key",
        placeholder: "abcdefghijklmnopqrstuvwx",
        type: "text",
      },
      {
        label: "Shared Secret",
        placeholder: "1234567890abcdef",
        type: "password",
      },
      {
        label: "Shop ID",
        placeholder: "12345678",
        type: "text",
      },
    ],
  },
  {
    name: "Walmart",
    connected: false,
    logo: "WM",
    fields: [
      {
        label: "Client ID",
        placeholder: "12345678-1234-1234-1234-123456789012",
        type: "text",
      },
      {
        label: "Client Secret",
        placeholder: "abcdefghijklmnopqrstuvwxyz123456",
        type: "password",
      },
      {
        label: "Consumer ID",
        placeholder: "12345678-1234-1234-1234-123456789012",
        type: "text",
      },
    ],
  },
];

export default function Integrations() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const openModal = (platform: Platform) => {
    setSelectedPlatform(platform);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPlatform(null);
  };

  const handleSaveKeys = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle saving API keys here
    console.log("Saving API keys for", selectedPlatform?.name);
    closeModal();
  };
  return (
    <div>
      <h2 className="text-xl font-bold text-black mb-6">
        Platform Integrations
      </h2>
      <div className="space-y-3">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="p-3 border border-gray-200 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-primary to-auxiliar rounded-lg flex items-center justify-center text-white font-bold">
                {platform.logo}
              </div>
              <div>
                <p className="font-medium text-black">{platform.name}</p>
                <p className="text-sm text-gray-600">
                  {platform.connected ? "Connected" : "Not connected"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => openModal(platform)}>
                <Key className="w-4 h-4" />
                <span>API Keys</span>
              </Button>
              <Button variant={platform.connected ? "danger" : "primary"}>
                {platform.connected ? "Disconnect" : "Connect"}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* API Keys Modal */}
      {modalOpen && selectedPlatform && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-3">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-linear-to-br from-primary to-auxiliar rounded-lg flex items-center justify-center text-white font-bold">
                  {selectedPlatform.logo}
                </div>
                <div>
                  <h3 className="font-bold text-black">
                    {selectedPlatform.name} API Configuration
                  </h3>
                  <p className="text-sm text-gray-600">
                    Enter your API credentials
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSaveKeys} className="p-6">
              <div className="space-y-5">
                {selectedPlatform.fields.map((field, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-black mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              {/* Info Box */}
              <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex gap-3">
                  <Key className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-black mb-1">
                      Keep your API keys secure
                    </p>
                    <p className="text-sm text-gray-600">
                      These credentials will be encrypted and stored securely.
                      Never share your API keys with anyone.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
                <Button variant="primary" type="submit" className="flex-1">
                  Save Configuration
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  onClick={closeModal}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
