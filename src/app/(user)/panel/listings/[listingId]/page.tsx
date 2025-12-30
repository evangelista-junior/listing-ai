"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/src/components/ui/Button";
import {
  Check,
  AlertCircle,
  Save,
  Sparkles,
  Upload,
  X,
  TableOfContents,
} from "lucide-react";
import Link from "next/link";

interface ListingData {
  id: number;
  title: string;
  sku: string;
  platform: string;
  image: string;
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
}

export default function EditListingPage() {
  const router = useRouter();
  const { listingId } = useParams();

  const [activeTab, setActiveTab] = useState<"platform" | "details">(
    "platform"
  );
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  const mockListingData: ListingData = {
    id: Number(listingId) || 1,
    title: "Classic Blue Denim Jeans",
    sku: "CLT-JNS-001",
    platform: "eBay",
    image:
      "https://images.unsplash.com/photo-1713880442898-0f151fba5e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwamVhbnMlMjBkZW5pbXxlbnwxfHx8fDE3NjQwNzQzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    listingType: "Fixed Price",
    status: "Draft",
    quantitySold: 0,
    lastUpdated: "2 hours ago",
    category: "Clothing, Shoes & Accessories > Men > Men's Clothing > Jeans",
    itemCondition: "New with tags",
    itemTitle:
      "Classic Blue Denim Jeans - Premium Cotton - Men's Regular Fit Straight Leg",
    itemDescription:
      "Elevate your everyday style with these premium classic blue denim jeans. Crafted from high-quality 100% cotton denim, these jeans offer exceptional comfort and durability. The regular fit design ensures a comfortable wear throughout the day, while the straight leg cut provides a timeless, versatile look that pairs perfectly with any outfit.\n\nKey Features:\n• Premium 100% cotton denim construction\n• Classic blue wash for versatile styling\n• Regular fit for comfortable all-day wear\n• Straight leg design for timeless appeal\n• Traditional 5-pocket styling\n• Belt loops for secure fit\n• Button fly closure\n• Brand new with original tags attached\n\nThese jeans are perfect for casual outings, work, or weekend activities. The durable fabric ensures long-lasting wear while maintaining its shape and color after multiple washes.",
    requiredSpecs: {
      brand: "Premium Denim Co.",
      colour: "Blue",
      countryOfManufacture: "United States",
      department: "Men",
      size: "32W x 32L",
      style: "Straight Leg",
    },
    recommendedSpecs: {
      closure: "Button Fly",
      fabricType: "Denim",
      features: "5 Pockets, Belt Loops",
      fit: "Regular",
      insideLeg: "32 inches",
      material: "100% Cotton",
      rise: "Mid Rise",
      sizeType: "Regular",
      type: "Jeans",
      waistSize: "32 inches",
    },
    optionalSpecs: {
      fabricWash: "Medium Wash",
      garmentCare: "Machine Washable",
      pattern: "Solid",
      theme: "Casual",
    },
    productSku: "CLT-JNS-001",
    selectedPlatform: "eBay",
    buyItNowPrice: "49.99",
    allowOffers: true,
    minOfferPrice: "40.00",
    autoAcceptPrice: "45.00",
    scheduleStart: false,
    scheduleDate: "",
    scheduleTime: "",
    postagePolicy: "Standard Shipping",
    paymentPolicy: "PayPal, Credit Card",
    returnsPolicy: "30 Days Money Back",
    additionalInfo:
      "Measurements:\n• Waist: 32 inches\n• Inseam: 32 inches\n• Rise: 11 inches\n• Leg Opening: 16 inches\n• Hip: 42 inches",
    images: [
      "https://images.unsplash.com/photo-1713880442898-0f151fba5e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwamVhbnMlMjBkZW5pbXxlbnwxfHx8fDE3NjQwNzQzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400",
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=400",
    ],
  };

  const [formData, setFormData] = useState<ListingData>(mockListingData);

  const handleInputChange = (field: keyof ListingData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNestedInputChange = (
    parent: "requiredSpecs" | "recommendedSpecs" | "optionalSpecs",
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value,
      },
    }));
  };

  const handleSaveDraft = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      console.log("Draft saved:", formData);
    }, 1000);
  };

  const handlePublish = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      router.push("/panel/dashboard");
    }, 1500);
  };

  const handleImageUpload = () => {
    console.log("Upload image");
  };

  const handleRemoveImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <Link
          href={"/panel/listings"}
          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-4"
        >
          <Button variant="white">
            <TableOfContents className="w-4 h-4" />
            Back to Listings
          </Button>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">Edit Listing</h1>
            <p className="text-gray-600">
              Review and update your listing details
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={handleSaveDraft}
              disabled={isSaving}
              className="flex items-center gap-2"
            >
              {isSaving ? (
                <>
                  <div className="w-4 h-4 border-2 border-dark-soft border-t-transparent rounded-full animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save
                </>
              )}
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

      {/* AI Generated Badge */}
      <div className="bg-linear-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-primary to-auxiliar rounded-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="font-semibold text-dark-soft">AI-Generated Content</p>
            <p className="text-sm text-gray-600">
              Review and modify the auto-generated listing details below
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        {/* Tabs */}
        <div className="border-b border-gray-200 px-6">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab("platform")}
              className={`py-4 border-b-2 transition-colors font-medium ${
                activeTab === "platform"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Platform Details
            </button>
            <button
              onClick={() => setActiveTab("details")}
              className={`py-4 border-b-2 transition-colors font-medium ${
                activeTab === "details"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Item Details
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "platform" && (
            <div className="space-y-6">
              {/* Publish Platform Badge */}
              <div className="bg-linear-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-linear-to-br from-primary to-auxiliar rounded-lg flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark-soft">
                      Publish to {formData.selectedPlatform}
                    </p>
                    <p className="text-sm text-gray-600">
                      {formData.listingType}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Info */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Status</p>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      handleInputChange("status", e.target.value)
                    }
                    className="w-full font-medium text-dark-soft bg-transparent border-none outline-none cursor-pointer"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Quantity Sold</p>
                  <p className="font-medium text-dark-soft">
                    {formData.quantitySold}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Last Updated</p>
                  <p className="font-medium text-dark-soft text-sm">
                    {formData.lastUpdated}
                  </p>
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-dark-soft mb-2">
                  Category
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Item Condition */}
              <div>
                <label className="block text-sm font-medium text-dark-soft mb-2">
                  Item Condition
                </label>
                <select
                  value={formData.itemCondition}
                  onChange={(e) =>
                    handleInputChange("itemCondition", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="New with tags">New with tags</option>
                  <option value="New without tags">New without tags</option>
                  <option value="New with defects">New with defects</option>
                  <option value="Pre-owned">Pre-owned</option>
                  <option value="For parts or not working">
                    For parts or not working
                  </option>
                </select>
              </div>

              {/* Item Title */}
              <div>
                <label className="block text-sm font-medium text-dark-soft mb-2">
                  Item Title
                  <span className="text-xs text-gray-500 ml-2">
                    {formData.itemTitle.length}/80 characters
                  </span>
                </label>
                <input
                  type="text"
                  value={formData.itemTitle}
                  onChange={(e) =>
                    handleInputChange("itemTitle", e.target.value)
                  }
                  maxLength={80}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Item Description */}
              <div>
                <label className="block text-sm font-medium text-dark-soft mb-2">
                  Item Description
                </label>
                <textarea
                  value={formData.itemDescription}
                  onChange={(e) =>
                    handleInputChange("itemDescription", e.target.value)
                  }
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              {/* Required Item Specifics */}
              <div>
                <h3 className="font-bold text-dark-soft mb-4">
                  Required Item Specifics
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(formData.requiredSpecs).map(
                    ([key, value]) => (
                      <div key={key}>
                        <label className="block text-sm font-medium text-dark-soft mb-2 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </label>
                        <input
                          type="text"
                          value={value}
                          onChange={(e) =>
                            handleNestedInputChange(
                              "requiredSpecs",
                              key,
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Recommended Item Specifics */}
              <div>
                <h3 className="font-bold text-dark-soft mb-4">
                  Recommended Item Specifics
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(formData.recommendedSpecs).map(
                    ([key, value]) =>
                      value && (
                        <div key={key}>
                          <label className="block text-sm font-medium text-dark-soft mb-2 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </label>
                          <input
                            type="text"
                            value={value}
                            onChange={(e) =>
                              handleNestedInputChange(
                                "recommendedSpecs",
                                key,
                                e.target.value
                              )
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          />
                        </div>
                      )
                  )}
                </div>
              </div>

              {/* Optional Item Specifics */}
              <div>
                <h3 className="font-bold text-dark-soft mb-4">
                  Optional Item Specifics
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(formData.optionalSpecs).map(
                    ([key, value]) =>
                      value && (
                        <div key={key}>
                          <label className="block text-sm font-medium text-dark-soft mb-2 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </label>
                          <input
                            type="text"
                            value={value}
                            onChange={(e) =>
                              handleNestedInputChange(
                                "optionalSpecs",
                                key,
                                e.target.value
                              )
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
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
                <label className="block text-sm font-medium text-dark-soft mb-2">
                  Product Images
                </label>
                <div className="grid grid-cols-4 gap-4">
                  {formData.images.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-square border-2 border-gray-300 rounded-lg overflow-hidden group"
                    >
                      <img
                        src={img}
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {formData.images.length < 12 && (
                    <button
                      onClick={handleImageUpload}
                      className="aspect-square border-2 border-dashed border-gray-300 rounded-lg hover:border-primary hover:bg-blue-50 transition-all flex items-center justify-center flex-col gap-2 text-gray-500 hover:text-primary"
                    >
                      <Upload className="w-6 h-6" />
                      <span className="text-xs">Upload</span>
                    </button>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {formData.images.length}/12 images • First image will be the
                  main listing photo
                </p>
              </div>

              {/* SKU and Platform */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-soft mb-2">
                    Product SKU
                  </label>
                  <input
                    type="text"
                    value={formData.productSku}
                    onChange={(e) =>
                      handleInputChange("productSku", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-soft mb-2">
                    Platform
                  </label>
                  <select
                    value={formData.selectedPlatform}
                    onChange={(e) =>
                      handleInputChange("selectedPlatform", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  >
                    <option value="eBay">eBay</option>
                    <option value="Amazon">Amazon</option>
                    <option value="Shopify">Shopify</option>
                    <option value="Etsy">Etsy</option>
                  </select>
                </div>
              </div>

              {/* Pricing */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-soft mb-2">
                    Buy It Now Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="text"
                      value={formData.buyItNowPrice}
                      onChange={(e) =>
                        handleInputChange("buyItNowPrice", e.target.value)
                      }
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-soft mb-2">
                    Min Offer Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="text"
                      value={formData.minOfferPrice || ""}
                      onChange={(e) =>
                        handleInputChange("minOfferPrice", e.target.value)
                      }
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      disabled={!formData.allowOffers}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-soft mb-2">
                    Auto-Accept Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="text"
                      value={formData.autoAcceptPrice || ""}
                      onChange={(e) =>
                        handleInputChange("autoAcceptPrice", e.target.value)
                      }
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      disabled={!formData.allowOffers}
                    />
                  </div>
                </div>
              </div>

              {/* Allow Offers Toggle */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="allowOffers"
                  checked={formData.allowOffers}
                  onChange={(e) =>
                    handleInputChange("allowOffers", e.target.checked)
                  }
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label
                  htmlFor="allowOffers"
                  className="text-sm font-medium text-dark-soft cursor-pointer"
                >
                  Allow buyers to make offers
                </label>
              </div>

              {/* Policies */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-soft mb-2">
                    Postage Policy
                  </label>
                  <input
                    type="text"
                    value={formData.postagePolicy}
                    onChange={(e) =>
                      handleInputChange("postagePolicy", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-soft mb-2">
                    Payment Policy
                  </label>
                  <input
                    type="text"
                    value={formData.paymentPolicy}
                    onChange={(e) =>
                      handleInputChange("paymentPolicy", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-soft mb-2">
                    Returns Policy
                  </label>
                  <input
                    type="text"
                    value={formData.returnsPolicy}
                    onChange={(e) =>
                      handleInputChange("returnsPolicy", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Schedule */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <input
                    type="checkbox"
                    id="scheduleStart"
                    checked={formData.scheduleStart}
                    onChange={(e) =>
                      handleInputChange("scheduleStart", e.target.checked)
                    }
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label
                    htmlFor="scheduleStart"
                    className="text-sm font-medium text-dark-soft cursor-pointer"
                  >
                    Schedule listing start time
                  </label>
                </div>
                {formData.scheduleStart && (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-soft mb-2">
                        Start Date
                      </label>
                      <input
                        type="date"
                        value={formData.scheduleDate || ""}
                        onChange={(e) =>
                          handleInputChange("scheduleDate", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-soft mb-2">
                        Start Time
                      </label>
                      <input
                        type="time"
                        value={formData.scheduleTime || ""}
                        onChange={(e) =>
                          handleInputChange("scheduleTime", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-sm font-medium text-dark-soft mb-2">
                  Additional Measurements
                </label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    handleInputChange("additionalInfo", e.target.value)
                  }
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none font-mono text-sm"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <AlertCircle className="w-4 h-4" />
            <span>
              Changes are auto-saved. Click "Publish" to make listing live.
            </span>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" disabled={isSaving || isPublishing}>
              Cancel
            </Button>
            <Button
              variant="primary"
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
