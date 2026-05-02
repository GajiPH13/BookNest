"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const CategoryClient = ({ categories }) => {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  return (
    <div className="mb-5 flex flex-col gap-2 bg-white shadow-2xl p-3 rounded-lg">
      {categories.map((category) => {
        const value = category.name.toLowerCase();
        const isActive = activeCategory === value;

        return (
          <Link key={category.id} href={`?category=${value}`}>
            <button
              className={`btn w-full rounded-lg transition
                ${
                  isActive
                    ? "bg-[#b2c3eb] text-white"
                    : "bg-white border-none shadow-2xl text-black hover:bg-[#386eeca0] hover:text-white hover:transform hover:scale-105"
                }
              `}
            >
              {category.name}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryClient;