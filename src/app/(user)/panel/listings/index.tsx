"use client";

import React from "react";
import {
  TrendingUp,
  FileText,
  DollarSign,
  Eye,
  ArrowUpRight,
  Trash2,
  Download,
  Edit,
  CheckCircle,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import Image from "next/image";
import staticImage from "@/public/levis29w4.jpg";
import Link from "next/link";

type SortField =
  | "title"
  | "sku"
  | "platform"
  | "status"
  | "views"
  | "createdBy"
  | "created"
  | "sold"
  | "stock";

type SortDirection = "asc" | "desc" | null;

interface Listing {
  id: number;
  title: string;
  sku: string;
  platform: string;
  status: string;
  views: number;
  created: string;
  createdBy: string;
  image: typeof staticImage; // TODO: Adjust
  createdTimestamp: number;
  sold: number;
  stock: number;
}

const allListings: Listing[] = [
  {
    id: 1,
    title: "Classic Blue Denim Jeans",
    sku: "CLT-JNS-001",
    platform: "Amazon",
    status: "Active",
    views: 1243,
    created: "2 hours ago",
    createdBy: "John Doe",
    createdTimestamp: Date.now() - 2 * 60 * 60 * 1000,
    image: staticImage,
    sold: 45,
    stock: 120,
  },
  {
    id: 2,
    title: "Premium White Cotton T-Shirt",
    sku: "CLT-TSH-045",
    platform: "eBay",
    status: "Active",
    views: 856,
    created: "5 hours ago",
    createdBy: "Sarah Smith",
    createdTimestamp: Date.now() - 5 * 60 * 60 * 1000,

    image: staticImage,
    sold: 32,
    stock: 85,
  },
  {
    id: 3,
    title: "Oversized Black Hoodie",
    sku: "CLT-HDI-023",
    platform: "Shopify",
    status: "Draft",
    views: 0,
    created: "1 day ago",
    createdBy: "Mike Johnson",
    createdTimestamp: Date.now() - 24 * 60 * 60 * 1000,

    image: staticImage,
    sold: 0,
    stock: 200,
  },
  {
    id: 4,
    title: "Limited Edition Sneakers",
    sku: "CLT-SNK-112",
    platform: "Amazon",
    status: "Active",
    views: 2104,
    created: "2 days ago",
    createdBy: "Emily Davis",
    createdTimestamp: Date.now() - 2 * 24 * 60 * 60 * 1000,

    image: staticImage,
    sold: 78,
    stock: 22,
  },
  {
    id: 5,
    title: "Vintage Leather Jacket",
    sku: "CLT-JKT-078",
    platform: "Etsy",
    status: "Active",
    views: 3421,
    created: "3 days ago",
    createdBy: "John Doe",
    createdTimestamp: Date.now() - 3 * 24 * 60 * 60 * 1000,

    image: staticImage,
    sold: 124,
    stock: 56,
  },
  {
    id: 6,
    title: "Summer Floral Dress",
    sku: "CLT-DRS-092",
    platform: "Amazon",
    status: "Active",
    views: 1876,
    created: "4 days ago",
    createdBy: "Sarah Smith",
    createdTimestamp: Date.now() - 4 * 24 * 60 * 60 * 1000,

    image: staticImage,
    sold: 67,
    stock: 143,
  },
  {
    id: 7,
    title: "Athletic Running Shoes",
    sku: "CLT-SHO-156",
    platform: "eBay",
    status: "Draft",
    views: 234,
    created: "5 days ago",
    createdBy: "Mike Johnson",
    createdTimestamp: Date.now() - 5 * 24 * 60 * 60 * 1000,

    image: staticImage,
    sold: 8,
    stock: 92,
  },
  {
    id: 8,
    title: "Casual Khaki Shorts",
    sku: "CLT-SRT-203",
    platform: "Shopify",
    status: "Active",
    views: 987,
    created: "6 days ago",
    createdBy: "Emily Davis",
    createdTimestamp: Date.now() - 6 * 24 * 60 * 60 * 1000,

    image: staticImage,
    sold: 39,
    stock: 161,
  },
  {
    id: 9,
    title: "Striped Polo Shirt",
    sku: "CLT-PLO-321",
    platform: "Amazon",
    status: "Inactive",
    views: 456,
    created: "1 week ago",
    createdBy: "John Doe",
    createdTimestamp: Date.now() - 7 * 24 * 60 * 60 * 1000,

    image: staticImage,
    sold: 15,
    stock: 35,
  },
  {
    id: 10,
    title: "Wool Winter Scarf",
    sku: "CLT-SCF-445",
    platform: "Etsy",
    status: "Active",
    views: 1654,
    created: "1 week ago",
    createdBy: "Sarah Smith",
    createdTimestamp: Date.now() - 8 * 24 * 60 * 60 * 1000,

    image: staticImage,
    sold: 52,
    stock: 78,
  },
  {
    id: 11,
    title: "Designer Sunglasses",
    sku: "CLT-SNG-567",
    platform: "Amazon",
    status: "Active",
    views: 2987,
    created: "2 weeks ago",
    createdBy: "Mike Johnson",
    createdTimestamp: Date.now() - 14 * 24 * 60 * 60 * 1000,

    image: staticImage,
    sold: 103,
    stock: 47,
  },
  {
    id: 12,
    title: "Canvas Backpack",
    sku: "CLT-BAG-789",
    platform: "eBay",
    status: "Draft",
    views: 123,
    created: "2 weeks ago",
    createdBy: "Emily Davis",
    createdTimestamp: Date.now() - 15 * 24 * 60 * 60 * 1000,

    image: staticImage,
    sold: 4,
    stock: 196,
  },
];

export default function Listings() {
  const [selectedListings, setSelectedListings] = React.useState<number[]>([]);
  const [sortField, setSortField] = React.useState<SortField | null>(null);
  const [sortDirection, setSortDirection] = React.useState<SortDirection>(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(10);
  const [showFilters, setShowFilters] = React.useState(false);
  const [filters, setFilters] = React.useState({
    platform: "",
    status: "",
    search: "",
    createdBy: "",
  });

  // Filter listings
  const filteredListings = React.useMemo(() => {
    return allListings.filter((listing) => {
      if (filters.platform && listing.platform !== filters.platform)
        return false;
      if (filters.status && listing.status !== filters.status) return false;
      if (filters.createdBy && listing.createdBy !== filters.createdBy)
        return false;
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        return (
          listing.title.toLowerCase().includes(searchLower) ||
          listing.sku.toLowerCase().includes(searchLower)
        );
      }
      return true;
    });
  }, [filters]);

  // Sort listings
  const sortedListings = React.useMemo(() => {
    if (!sortField || !sortDirection) return filteredListings;

    return [...filteredListings].sort((a, b) => {
      let aValue: any = a[sortField];
      let bValue: any = b[sortField];

      // Handle special cases
      if (sortField === "created") {
        aValue = a.createdTimestamp;
        bValue = b.createdTimestamp;
      }

      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredListings, sortField, sortDirection]);

  // Paginate listings
  const totalPages = Math.ceil(sortedListings.length / itemsPerPage);
  const paginatedListings = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedListings.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedListings, currentPage, itemsPerPage]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Toggle direction or reset
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortField(null);
        setSortDirection(null);
      } else {
        setSortDirection("asc");
      }
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedListings(paginatedListings.map((listing) => listing.id));
    } else {
      setSelectedListings([]);
    }
  };

  const handleSelectListing = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedListings([...selectedListings, id]);
    } else {
      setSelectedListings(
        selectedListings.filter((listingId) => listingId !== id)
      );
    }
  };

  const handleBulkAction = (action: string) => {
    console.log(`Performing ${action} on listings:`, selectedListings);
    // Here you would implement the actual bulk action
    // For now, just clear selection after action
    setSelectedListings([]);
  };

  const isAllSelected =
    paginatedListings.length > 0 &&
    selectedListings.length === paginatedListings.length &&
    paginatedListings.every((listing) => selectedListings.includes(listing.id));
  const isSomeSelected = selectedListings.length > 0;

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-4 h-4 text-gray-400" />;
    }
    if (sortDirection === "asc") {
      return <ArrowUp className="w-4 h-4 text-primary" />;
    }
    return <ArrowDown className="w-4 h-4 text-primary" />;
  };

  const uniquePlatforms = Array.from(
    new Set(allListings.map((l) => l.platform))
  );
  const uniqueStatuses = Array.from(new Set(allListings.map((l) => l.status)));
  const uniqueCreators = Array.from(
    new Set(allListings.map((l) => l.createdBy))
  );

  return (
    <div className="max-w-7xl  mx-auto">
      <div className="mb-8">
        <h1>Listings</h1>
      </div>

      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/panel/listings/create-listing">
            <Button variant="primary" aria-label="Create new Listing">
              <FileText className="w-4 h-4 " />
              Create Listing
            </Button>
          </Link>
          <Button
            variant="white"
            onClick={() => setShowFilters(!showFilters)}
            className={
              showFilters
                ? "bg-primary text-white hidden"
                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
            }
          >
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>
      </div>

      {showFilters && (
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Product or SKU"
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Platform
              </label>
              <select
                value={filters.platform}
                onChange={(e) =>
                  setFilters({ ...filters, platform: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              >
                <option value="">All Platforms</option>
                {uniquePlatforms.map((platform) => (
                  <option key={platform} value={platform}>
                    {platform}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={filters.status}
                onChange={(e) =>
                  setFilters({ ...filters, status: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              >
                <option value="">All Statuses</option>
                {uniqueStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Created By
              </label>
              <select
                value={filters.createdBy}
                onChange={(e) =>
                  setFilters({ ...filters, createdBy: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              >
                <option value="">All Creators</option>
                {uniqueCreators.map((creator) => (
                  <option key={creator} value={creator}>
                    {creator}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-3 flex justify-end">
            <button
              onClick={() =>
                setFilters({
                  platform: "",
                  status: "",
                  search: "",
                  createdBy: "",
                })
              }
              className="text-sm text-primary hover:underline"
            >
              Clear all filters
            </button>
          </div>
        </div>
      )}

      {/* Bulk Actions Bar */}
      {isSomeSelected && (
        <div className="px-6 py-4 bg-linear-to-br from-primary to-auxiliar flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-white" aria-hidden="true" />
            <span className="text-white font-medium">
              {selectedListings.length}{" "}
              {selectedListings.length === 1 ? "item" : "items"} selected
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleBulkAction("edit")}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
            >
              <Edit className="w-4 h-4" aria-hidden="true" />
              Edit
            </button>
            <button
              onClick={() => handleBulkAction("export")}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Export
            </button>
            <button
              onClick={() => handleBulkAction("delete")}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" aria-hidden="true" />
              Delete
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-scroll">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer"
                  aria-label="Select all listings"
                />
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort("title")}
              >
                <div className="flex items-center gap-2">
                  Product
                  <SortIcon field="title" />
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort("sku")}
              >
                <div className="flex items-center gap-2">
                  SKU
                  <SortIcon field="sku" />
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort("platform")}
              >
                <div className="flex items-center gap-2">
                  Platform
                  <SortIcon field="platform" />
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center gap-2">
                  Status
                  <SortIcon field="status" />
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort("views")}
              >
                <div className="flex items-center gap-2">
                  Views
                  <SortIcon field="views" />
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort("sold")}
              >
                <div className="flex items-center gap-2">
                  Sold
                  <SortIcon field="sold" />
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort("stock")}
              >
                <div className="flex items-center gap-2">
                  Stock
                  <SortIcon field="stock" />
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort("createdBy")}
              >
                <div className="flex items-center gap-2">
                  Created By
                  <SortIcon field="createdBy" />
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort("created")}
              >
                <div className="flex items-center gap-2">
                  Created
                  <SortIcon field="created" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedListings.map((listing) => (
              <tr
                key={listing.id}
                className={`hover:bg-gray-50 transition-colors ${
                  selectedListings.includes(listing.id) ? "bg-blue-50" : ""
                }`}
              >
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedListings.includes(listing.id)}
                    onChange={(e) =>
                      handleSelectListing(listing.id, e.target.checked)
                    }
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer"
                    aria-label={`Select ${listing.title}`}
                  />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                      <Image
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="font-medium text-black">
                      {listing.title}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-mono text-gray-600">
                    {listing.sku}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-600">
                    {listing.platform}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      listing.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : listing.status === "Draft"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {listing.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {listing.views.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {listing.sold.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {listing.stock.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {listing.createdBy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {listing.created}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing{" "}
          <span className="font-medium">
            {(currentPage - 1) * itemsPerPage + 1}
          </span>{" "}
          to{" "}
          <span className="font-medium">
            {Math.min(currentPage * itemsPerPage, sortedListings.length)}
          </span>{" "}
          of <span className="font-medium">{sortedListings.length}</span>{" "}
          results
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Show first, last, current, and adjacent pages
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg transition-colors ${
                      currentPage === page
                        ? "bg-linear-to-r from-primary to-auxiliar text-white"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                );
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return (
                  <span key={page} className="px-2 text-gray-400">
                    ...
                  </span>
                );
              }
              return null;
            })}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
