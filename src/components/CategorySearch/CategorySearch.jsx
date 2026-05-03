"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const CategorySearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("category") || "");

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      router.push(`/all-books?category=${search}`);
    } else {
      router.push(`/all-books`);
    }
    setSearch("");
  };

  return (
    <form  style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Search for Available Books"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ paddingLeft: "30px" }}
        className="w-full py-4 rounded-lg border border-zinc-200"
      />
      <button onClick={handleSearch}
        type="submit"
        style={{ position: "absolute", right: "5px", top: "7px" }}
        className="btn border-none rounded-full bg-white  text-gray-500"
      >
       <BsSearch size={30} />
      </button>
    </form>
  );
};

export default CategorySearch;