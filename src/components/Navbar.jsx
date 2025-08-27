import React from "react";
import { Search, ShoppingCart, Menu } from "lucide-react";

export default function Navbar() {
  const categories = [
    "All",
    "Sell",
    "Bestsellers",
    "Today's Deals",
    "Mobiles",
    "Prime",
    "Customer Service",
    "Electronics",
    "Fashion",
    "New Releases",
    "Home & Kitchen",
    "Amazon Pay",
    "Computers",
    "Deals",
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top strip */}
      <div className="flex items-center gap-4 bg-[#131921] px-4 py-2 text-white">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-xl font-bold">eF</span>
        </a>

        {/* Location */}
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-xs text-neutral-300">Deliver to</span>
          <span className="font-medium">India</span>
        </div>

        {/* Search */}
        <div className="flex flex-1 items-stretch">
          <select className="hidden sm:block rounded-l-md border border-neutral-200 bg-neutral-100 px-2 text-sm text-black">
            <option>All</option>
            <option>Mobiles</option>
            <option>Books</option>
          </select>
          <input
            type="text"
            placeholder="Search your product..."
            className="w-full px-3 py-2 text-black outline-none"
          />
          <button className="flex items-center justify-center rounded-r-md bg-yellow-400 px-4">
            <Search className="h-5 w-5 text-black" />
          </button>
        </div>

        {/* Account */}
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-xs text-neutral-300">Hello, Sign in</span>
          <span className="font-medium">Account & Lists</span>
        </div>

        {/* Returns */}
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-xs text-neutral-300">Returns</span>
          <span className="font-medium">& Orders</span>
        </div>

        {/* Cart */}
        <a href="#" className="relative flex items-center gap-1">
          <ShoppingCart className="h-6 w-6" />
          <span className="font-medium">Cart</span>
          <span className="absolute -top-2 -right-2 rounded-full bg-yellow-400 px-1 text-xs font-bold text-black">
            2
          </span>
        </a>
      </div>

      {/* Secondary strip */}
      <div className="flex items-center gap-4 bg-[#232f3e] px-4 py-2 text-sm text-white overflow-x-auto">
        <button className="flex items-center gap-1 font-medium">
          <Menu className="h-4 w-4" />
          All
        </button>
        {categories.map((c) => (
          <a
            key={c}
            href="#"
            className="whitespace-nowrap hover:underline"
          >
            {c}
          </a>
        ))}
      </div>
    </header>
  );
}
