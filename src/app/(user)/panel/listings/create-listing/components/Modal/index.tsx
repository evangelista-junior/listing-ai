"use client";

import React, { useState } from "react";
import { X, Check, AlertCircle } from "lucide-react";
import { Button } from "@/src/components/ui/Button";

interface DraftListing {
  id: number;
  title: string;
  sku: string;
  platform: string;
  image: string;
  created: string;
  aiGenerated?: {
    // Platform Tab (eBay specific)
    listingType: string;
    status: string;
    quantitySold: number;
    lastUpdated: string;
    category: string;
    itemCondition: string;
    itemTitle: string;
    itemDescription: string;
    requiredSpecs: {
      brand: string;
      colour: string;
      countryOfManufacture: string;
      department: string;
      size: string;
      style: string;
    };
    recommendedSpecs: {
      closure?: string;
      ean?: string;
      fabricType?: string;
      features?: string;
      fit?: string;
      insideLeg?: string;
      material?: string;
      model?: string;
      rise?: string;
      sizeType?: string;
      type?: string;
      vintage?: string;
      waistSize?: string;
    };
    optionalSpecs: {
      fabricWash?: string;
      garmentCare?: string;
      handmade?: string;
      pattern?: string;
      personalise?: string;
      pocketType?: string;
      productLine?: string;
      theme?: string;
      unitQuantity?: string;
      unitType?: string;
      accents?: string;
      mpn?: string;
      personalisationInstructions?: string;
    };
    // Item Details Tab
    productSku: string;
    selectedPlatform: string;
    buyItNowPrice: string;
    allowOffers: boolean;
    minOfferPrice?: string;
    autoAcceptPrice?: string;
    scheduleStart: boolean;
    scheduleDate?: string;
    scheduleTime?: string;
    postagePolicy: string;
    paymentPolicy: string;
    returnsPolicy: string;
    additionalInfo: string;
    images: string[];
  };
}

interface DraftListingModalProps {
  isOpen: boolean;
  onClose: () => void;
  listing: DraftListing | null;
  onPublish: (listingId: number) => void;
}
export default function Modal({
  isOpen,
  onClose,
  listing,
  onPublish,
}: DraftListingModalProps) {
  const [activeTab, setActiveTab] = useState<"platform" | "details">(
    "platform"
  );
  const [isPublishing, setIsPublishing] = useState(false);

  if (!isOpen || !listing || !listing.aiGenerated) return null;

  const handlePublish = () => {
    setIsPublishing(true);
    setTimeout(() => {
      onPublish(listing.id);
      setIsPublishing(false);
      onClose();
    }, 1500);
  };

  const ai = listing.aiGenerated;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="px-6 py-3 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-black">
              Complete Draft Listing
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Review and publish AI-generated listing
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="border-b border-gray-200 px-6">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab("platform")}
              className={`py-3 border-b-2 transition-colors ${
                activeTab === "platform"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              eBay
            </button>
            <button
              onClick={() => setActiveTab("details")}
              className={`py-3 border-b-2 transition-colors ${
                activeTab === "details"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Item Details
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === "platform" && (
            <div className="space-y-6">
              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Category
                </label>
                <input
                  type="text"
                  value={ai.category}
                  readOnly
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-primary"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Status</p>
                  <p className="font-medium text-black">{ai.status}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Quantity Sold</p>
                  <p className="font-medium text-black">{ai.quantitySold}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Last Updated</p>
                  <p className="font-medium text-black text-sm">
                    {ai.lastUpdated}
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Item Condition
                </label>
                <input
                  type="text"
                  value={ai.itemCondition}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                />
              </div>

              {/* Item Title */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Item Title
                  <span className="text-xs text-gray-500 ml-2">
                    {ai.itemTitle.length}/80 characters
                  </span>
                </label>
                <input
                  type="text"
                  value={ai.itemTitle}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                />
              </div>

              {/* Item Description */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Item Description
                </label>
                <textarea
                  value={ai.itemDescription}
                  rows={6}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 resize-none"
                />
              </div>

              {/* Required Item Specifics */}
              <div>
                <h3 className="font-bold text-black mb-3">
                  Required Item Specifics
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {Object.entries(ai.requiredSpecs).map(([key, value]) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-black mb-2 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </label>
                      <input
                        type="text"
                        value={value}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Item Specifics */}
              <div>
                <h3 className="font-bold text-black mb-3">
                  Recommended Item Specifics
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {Object.entries(ai.recommendedSpecs).map(
                    ([key, value]) =>
                      value && (
                        <div key={key}>
                          <label className="block text-sm font-medium text-black mb-2 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </label>
                          <input
                            type="text"
                            value={value}
                            className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                          />
                        </div>
                      )
                  )}
                </div>
              </div>

              {/* Optional Item Specifics */}
              <div>
                <h3 className="font-bold text-black mb-3">
                  Optional Item Specifics
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {Object.entries(ai.optionalSpecs).map(
                    ([key, value]) =>
                      value && (
                        <div key={key}>
                          <label className="block text-sm font-medium text-black mb-2 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </label>
                          <input
                            type="text"
                            value={value}
                            className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                          />
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "details" && (
            <div className="space-y-6">
              {/* Product Images */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Product Images
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {ai.images.map((img, index) => (
                    <div
                      key={index}
                      className="aspect-square border-2 border-gray-300 rounded-lg overflow-hidden"
                    >
                      <img
                        src={img}
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* SKU and Platform */}
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Product SKU
                  </label>
                  <input
                    type="text"
                    value={ai.productSku}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Platform
                  </label>
                  <input
                    type="text"
                    value={ai.selectedPlatform}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                  />
                </div>
              </div>

              {/* Pricing */}
              <div className="grid md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Buy It Now Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="text"
                      value={ai.buyItNowPrice}
                      className="w-full pl-6 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                    />
                  </div>
                </div>
                {ai.allowOffers && ai.minOfferPrice && (
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Min Offer Price
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <input
                        type="text"
                        value={ai.minOfferPrice}
                        className="w-full pl-6 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                      />
                    </div>
                  </div>
                )}
                {ai.allowOffers && ai.autoAcceptPrice && (
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Auto-Accept Price
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <input
                        type="text"
                        value={ai.autoAcceptPrice}
                        className="w-full pl-6 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Policies */}
              <div className="grid md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Postage Policy
                  </label>
                  <input
                    type="text"
                    value={ai.postagePolicy}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Payment Policy
                  </label>
                  <input
                    type="text"
                    value={ai.paymentPolicy}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Returns Policy
                  </label>
                  <input
                    type="text"
                    value={ai.returnsPolicy}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                  />
                </div>
              </div>

              {/* Schedule */}
              {ai.scheduleStart && ai.scheduleDate && ai.scheduleTime && (
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Start Date
                    </label>
                    <input
                      type="text"
                      value={ai.scheduleDate}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Start Time
                    </label>
                    <input
                      type="text"
                      value={ai.scheduleTime}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                    />
                  </div>
                </div>
              )}

              {/* Additional Info */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Additional Measurements
                </label>
                <textarea
                  value={ai.additionalInfo}
                  rows={6}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 resize-none font-mono text-sm"
                />
              </div>
            </div>
          )}
        </div>

        <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-red-600">
            <AlertCircle className="w-4 h-4" />
            <span>AI-generated content. Review before publishing.</span>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} disabled={isPublishing}>
              Close
            </Button>
            <Button
              variant="success"
              onClick={handlePublish}
              disabled={isPublishing}
              className="flex items-center gap-2"
            >
              {isPublishing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Publishing...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  Publish Listing
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
