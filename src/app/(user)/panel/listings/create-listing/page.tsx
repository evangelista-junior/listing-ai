"use client";

import React, { useState } from "react";
import { Button } from "@/src/components/ui/Button";
import {
  Sparkles,
  Loader,
  Image as ImageIcon,
  File,
  FileText,
  Trash,
} from "lucide-react";
import Image from "next/image";
import staticImage from "@/public/levis29w4.jpg";
import Modal from "./components/Modal";
import { formatDateTimeISO } from "@/src/lib/utils/utils";

const draftListings = [
  {
    id: 1,
    title: "Levi's 501 Jeans 30 Women's Blue Denim",
    sku: "CLT-JNS-001",
    platform: "eBay",
    image: staticImage,
    created: "2 hours ago",
    aiGenerated: {
      listingType: "Buy it Now",
      status: "Draft",
      quantitySold: 0,
      lastUpdated: "2025-09-02 20:40",
      category:
        "Clothes, Shoes & Accessories > Women > Women's Clothing > Jeans",
      itemCondition: "Pre-owned - Excellent",
      itemTitle: "Levi's 501 Jeans 30 Women's Blue Denim Straight Leg Vintage",
      itemDescription: `Levi's 501 Jeans 30 Women's Blue Denim Straight Leg Vintage

Pre-owned - Excellent condition. Minimal signs of wear with light fading. Please see photos.

Waist 30", Inside leg 32", Leg Opening 8"`,
      requiredSpecs: {
        brand: "Levi's",
        colour: "Blue",
        countryOfManufacture: "Unknown",
        department: "Women",
        size: "30",
        style: "Straight",
      },
      recommendedSpecs: {
        closure: "Button",
        ean: "DoesNotApply",
        fabricType: "Denim",
        features: "Pockets",
        fit: "Regular",
        insideLeg: "32 in",
        material: "Denim",
        model: "501",
        rise: "Mid (8.5-10.5 in)",
        sizeType: "Regular",
        type: "Jeans",
        vintage: "Yes",
        waistSize: "30 in",
      },
      optionalSpecs: {
        fabricWash: "Light",
        garmentCare: "Machine Washable",
        handmade: "No",
        pattern: "No Pattern",
        personalise: "No",
        pocketType: "5-Pocket Design",
        productLine: "Levi's 501 Series",
        theme: "Vintage",
        unitQuantity: "1",
        unitType: "Unit",
      },
      productSku: "CLT-JNS-001",
      selectedPlatform: "eBay",
      buyItNowPrice: "45.00",
      allowOffers: true,
      minOfferPrice: "35.00",
      autoAcceptPrice: "42.00",
      scheduleStart: false,
      postagePolicy: "Standard Shipping",
      paymentPolicy: "PayPal",
      returnsPolicy: "30 Days Return",
      additionalInfo: `Waist = 30"
Inside Leg = 32"
Leg Opening = 8"`,
      images: [
        "https://images.unsplash.com/photo-1713880442898-0f151fba5e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwamVhbnMlMjBkZW5pbXxlbnwxfHx8fDE3NjQwNzQzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
      ],
    },
  },
  {
    id: 2,
    title: "Vintage Leather Jacket Brown Medium",
    sku: "CLT-JKT-078",
    platform: "eBay",
    image: staticImage,
    created: "5 hours ago",
    aiGenerated: {
      listingType: "Buy it Now",
      status: "Draft",
      quantitySold: 0,
      lastUpdated: "2025-09-02 15:20",
      category:
        "Clothes, Shoes & Accessories > Men > Men's Clothing > Coats & Jackets",
      itemCondition: "Pre-owned - Good",
      itemTitle: "Vintage Leather Jacket Brown Medium Biker Style Retro 90s",
      itemDescription: `Vintage Leather Jacket Brown Medium Biker Style Retro 90s

Pre-owned - Good condition. Some wear consistent with age. Genuine leather with classic biker styling.

Pit to pit 22", Length 26"`,
      requiredSpecs: {
        brand: "Unbranded",
        colour: "Brown",
        countryOfManufacture: "Unknown",
        department: "Men",
        size: "M",
        style: "Biker",
      },
      recommendedSpecs: {
        closure: "Zip",
        fabricType: "Leather",
        features: "Pockets, Belt",
        fit: "Regular",
        material: "Genuine Leather",
        sizeType: "Regular",
        type: "Jacket",
        vintage: "Yes",
      },
      optionalSpecs: {
        garmentCare: "Professional Leather Clean",
        handmade: "No",
        pattern: "Solid",
        theme: "Vintage, Biker",
        unitQuantity: "1",
        unitType: "Unit",
      },
      productSku: "CLT-JKT-078",
      selectedPlatform: "eBay",
      buyItNowPrice: "89.00",
      allowOffers: true,
      minOfferPrice: "70.00",
      autoAcceptPrice: "85.00",
      scheduleStart: false,
      postagePolicy: "Standard Shipping",
      paymentPolicy: "PayPal",
      returnsPolicy: "30 Days Return",
      additionalInfo: `Pit to pit = 22"
Length = 26"`,
      images: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0fGVufDF8fHx8MTc2NDAzMTA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1520975867597-0af37a22e31e?w=400",
      ],
    },
  },
  {
    id: 3,
    title: "Nike Air Max Trainers Size 9 White",
    sku: "CLT-SNK-112",
    platform: "eBay",
    image: staticImage,
    created: "1 day ago",
    aiGenerated: {
      listingType: "Buy it Now",
      status: "Draft",
      quantitySold: 0,
      lastUpdated: "2025-09-01 10:15",
      category: "Clothes, Shoes & Accessories > Men > Men's Shoes > Trainers",
      itemCondition: "Pre-owned - Very Good",
      itemTitle: "Nike Air Max Trainers Size 9 White Running Shoes Athletic",
      itemDescription: `Nike Air Max Trainers Size 9 White Running Shoes Athletic

Pre-owned - Very Good condition. Light wear on soles. Clean uppers with no major marks.

UK Size 9, EU Size 44`,
      requiredSpecs: {
        brand: "Nike",
        colour: "White",
        countryOfManufacture: "Vietnam",
        department: "Men",
        size: "9",
        style: "Trainers",
      },
      recommendedSpecs: {
        closure: "Lace Up",
        features: "Cushioned, Air Max Technology",
        fit: "Regular",
        material: "Synthetic, Mesh",
        model: "Air Max",
        type: "Trainers",
      },
      optionalSpecs: {
        garmentCare: "Wipe Clean",
        pattern: "Solid",
        productLine: "Nike Air Max",
        unitQuantity: "1",
        unitType: "Pair",
      },
      productSku: "CLT-SNK-112",
      selectedPlatform: "eBay",
      buyItNowPrice: "65.00",
      allowOffers: true,
      minOfferPrice: "50.00",
      autoAcceptPrice: "60.00",
      scheduleStart: false,
      postagePolicy: "Standard Shipping",
      paymentPolicy: "PayPal",
      returnsPolicy: "30 Days Return",
      additionalInfo: `UK Size = 9
EU Size = 44`,
      images: [
        "https://images.unsplash.com/photo-1656944227480-98180d2a5155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc2NDAzMTA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      ],
    },
  },
];

export default function CreateListingPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [allowOffers, setAllowOffers] = useState(false);
  const [scheduleStart, setScheduleStart] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [selectedDraft, setSelectedDraft] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    // Simular geração de AI
    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
    }, 2000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Mock image upload
    if (e.target.files) {
      const files = Array.from(e.target.files);
      // In real app, you'd upload these and get URLs
      setUploadedImages((prev) => [
        ...prev,
        ...files.map(() => "https://via.placeholder.com/150"),
      ]);
    }
  };

  const handleDraftSelection = (draft: any) => {
    setSelectedDraft(draft);
    setIsModalOpen(true);
  };

  const handlePublish = (listingId: number) => {
    console.log("Publishing listing:", listingId);
    // Here you would implement the actual publish logic
  };

  const handleDelete = (listingId: number) => {
    console.log("Publishing listing:", listingId);
    // Here you would implement the actual publish logic
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="mb-2">Create New Listing</h1>
        <p className="text-gray-600">
          Fill in the product details and platform-specific settings to create
          your listing.
        </p>
      </div>

      <form
        onSubmit={handleGenerate}
        className="space-y-6 border-2 border-transparent bg-linear-to-br from-primary to-auxiliar rounded-xl"
      >
        <div className="rounded-xl bg-white-soft p-3 space-y-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-black mb-6">
              Product Information
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Product Images *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {uploadedImages.map((img, index) => (
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
                  <label className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <ImageIcon
                      className="w-8 h-8 text-gray-400 mb-2"
                      aria-hidden="true"
                    />
                    <p className="text-xs text-gray-600 text-center px-2">
                      Upload Image
                    </p>
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  PNG, JPG up to 10MB. Upload at least one image.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Product SKU */}
                <div>
                  <label
                    htmlFor="productSku"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Product SKU *
                  </label>
                  <input
                    type="text"
                    id="productSku"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="e.g., CLT-JNS-001"
                    required
                  />
                </div>

                {/* Platform */}
                <div>
                  <label
                    htmlFor="platform"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Platform *
                  </label>
                  <select
                    id="platform"
                    value={selectedPlatform}
                    onChange={(e) => setSelectedPlatform(e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    required
                  >
                    <option value="">Select platform</option>
                    <option value="amazon">Amazon</option>
                    <option value="ebay">eBay</option>
                    <option value="shopify">Shopify</option>
                    <option value="etsy">Etsy</option>
                    <option value="walmart">Walmart</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {selectedPlatform && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-black mb-2">
                {selectedPlatform.charAt(0).toUpperCase() +
                  selectedPlatform.slice(1)}{" "}
                Settings
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Configure platform-specific listing options
              </p>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Listing Type */}
                  <div>
                    <label
                      htmlFor="listingType"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Listing Type
                    </label>
                    <select
                      id="listingType"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    >
                      <option value="fixed">Fixed Price</option>
                      <option value="auction">Auction</option>
                      <option value="classified">Classified Ad</option>
                    </select>
                  </div>

                  {/* Buy It Now Price */}
                  <div>
                    <label
                      htmlFor="buyItNowPrice"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Buy It Now Price *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <input
                        type="number"
                        id="buyItNowPrice"
                        step="0.01"
                        className="w-full pl-6 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        placeholder="0.00"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Allow Offers */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="allowOffers"
                    checked={allowOffers}
                    onChange={(e) => setAllowOffers(e.target.checked)}
                    className="w-4 h-4 mt-1 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <div>
                    <label
                      htmlFor="allowOffers"
                      className="block text-sm font-medium text-black cursor-pointer"
                    >
                      Allow Offers
                    </label>
                    <p className="text-xs text-gray-500 mt-1">
                      Let buyers send you price offers on this item
                    </p>
                  </div>
                </div>

                {/* Offer Settings (conditional) */}
                {allowOffers && (
                  <div className="grid md:grid-cols-2 gap-6 pl-7">
                    <div>
                      <label
                        htmlFor="minOfferPrice"
                        className="block text-sm font-medium text-black mb-2"
                      >
                        Minimum Offer Price
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <input
                          type="number"
                          id="minOfferPrice"
                          step="0.01"
                          className="w-full pl-6 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                          placeholder="0.00"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="autoAcceptPrice"
                        className="block text-sm font-medium text-black mb-2"
                      >
                        Auto-Accept Offer Price
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <input
                          type="number"
                          id="autoAcceptPrice"
                          step="0.01"
                          className="w-full pl-6 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Schedule Start Date and Time */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="scheduleStart"
                    checked={scheduleStart}
                    onChange={(e) => setScheduleStart(e.target.checked)}
                    className="w-4 h-4 mt-1 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <div className="flex-1">
                    <label
                      htmlFor="scheduleStart"
                      className="block text-sm font-medium text-black cursor-pointer"
                    >
                      Schedule Start Date and Time
                    </label>
                    <p className="text-xs text-gray-500 mt-1">
                      Schedule when this listing goes live
                    </p>
                  </div>
                </div>

                {/* Schedule Date/Time (conditional) */}
                {scheduleStart && (
                  <div className="grid md:grid-cols-2 gap-6 pl-7">
                    <div>
                      <label
                        htmlFor="scheduleDate"
                        className="block text-sm font-medium text-black mb-2"
                      >
                        Start Date
                      </label>
                      <input
                        type="date"
                        id="scheduleDate"
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="scheduleTime"
                        className="block text-sm font-medium text-black mb-2"
                      >
                        Start Time
                      </label>
                      <input
                        type="time"
                        id="scheduleTime"
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Policies */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="postagePolicy"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Postage Policy
                    </label>
                    <select
                      id="postagePolicy"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    >
                      <option value="">Select policy</option>
                      <option value="standard">Standard Shipping</option>
                      <option value="express">Express Shipping</option>
                      <option value="free">Free Shipping</option>
                      <option value="calculated">Calculated Shipping</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="paymentPolicy"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Payment Policy
                    </label>
                    <select
                      id="paymentPolicy"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    >
                      <option value="">Select policy</option>
                      <option value="paypal">PayPal</option>
                      <option value="card">Credit/Debit Card</option>
                      <option value="immediate">Immediate Payment</option>
                      <option value="flexible">Flexible Payment</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="returnsPolicy"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Returns Policy
                    </label>
                    <select
                      id="returnsPolicy"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    >
                      <option value="">Select policy</option>
                      <option value="30days">30 Days Return</option>
                      <option value="60days">60 Days Return</option>
                      <option value="noreturn">No Returns</option>
                      <option value="buyerpays">Returns - Buyer Pays</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-black mb-6">
              Additional Measurements
            </h2>

            <div>
              <label
                htmlFor="additionalInfo"
                className="block text-sm font-medium text-black mb-2"
              >
                Additional Info
              </label>
              <textarea
                id="additionalInfo"
                rows={8}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none font-mono text-sm"
                placeholder="Pit to pit = 
Length = 

Waist = 
Inside Leg = 
Leg Opening ="
                defaultValue={`Pit to pit = 
Length = 

Waist = 
Inside Leg = 
Leg Opening =`}
              ></textarea>
              <p className="text-xs text-gray-500 mt-2">
                Add product measurements and additional details. Customize as
                needed for your product type.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="primary"
              className="flex-1 flex items-center justify-center gap-2"
              type="submit"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" aria-hidden="true" />
                  Creating Listing...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" aria-hidden="true" />
                  Save and Next
                </>
              )}
            </Button>
            <Button variant="outline" className="flex-1" type="button">
              <File className="w-5 h-5 " />
              Save
            </Button>
          </div>
        </div>
      </form>

      <div className="mt-9">
        <h2 className="text-xl font-bold text-black mb-3">Draft Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {draftListings.map((draft) => (
            <div
              key={draft.id}
              className="bg-white rounded-xl border-2 border-gray-300 shadow-sm p-6 cursor-pointer"
            >
              <p className="text-base md:text-base xl:text-xl font-bold text-black">
                {draft.title}
              </p>
              <div className="w-full max-h-2/3 aspect-square  border-2 border-gray-300 rounded-lg overflow-hidden mb-3">
                <Image
                  src={draft.image}
                  alt={draft.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs text-gray-600 space-y-2">
                <p>
                  <strong>SKU: </strong>
                  {draft.sku}
                </p>
                <p>
                  <strong>Platform: </strong>
                  {draft.platform}
                </p>
                <p>
                  <strong>Created: </strong>
                  {draft.created}
                </p>
                <p>
                  <strong>Last Updated: </strong>
                  {formatDateTimeISO(draft.aiGenerated.lastUpdated)}
                </p>
              </div>

              <div className="flex justify-center items-center gap-3">
                <Button
                  variant="outline"
                  className="mt-3 text-xs lg:text-base w-full"
                  type="button"
                  onClick={() => handleDraftSelection(draft)}
                >
                  <FileText className="w-4 h-4 mr-1" aria-hidden="true" />
                  Review
                </Button>
                <Button
                  variant="danger"
                  className="mt-3 text-xs lg:text-base w-full"
                  type="button"
                  onClick={() => handleDelete(draft.id)}
                >
                  <Trash className="w-4 h-4 mr-1" aria-hidden="true" />
                  Delete
                </Button>
              </div>
            </div>
          ))}

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            listing={selectedDraft}
            onPublish={handlePublish}
          />
        </div>
      </div>
    </div>
  );
}
