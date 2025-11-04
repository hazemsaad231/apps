"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function CategoriesSidebar({ categories }) {
  const [activeId, setActiveId] = useState(null);

  // لما الصفحة تفتح أول مرة خليه يختار أول عنصر
  useEffect(() => {
    if (categories?.length > 0) {
      setActiveId(categories[0].id);
      window.dispatchEvent(new CustomEvent("categorySelected", { detail: categories[0].id }));
    }
  }, [categories]);

  const handleClick = (id) => {
    setActiveId(id);
    window.dispatchEvent(new CustomEvent("categorySelected", { detail: id }));
  };

  return (
    <ul className="space-y-1 text-lg cursor-pointer">
      {categories.map((cat) => (
        <li
          key={cat.id}
          onClick={() => handleClick(cat.id)}
          className={`flex items-center gap-2 font-normal py-2 px-3 rounded-full transition-colors
            ${
              activeId === cat.id
                ? "border border-[#262163] text-[#262163] bg-[#262163]/10 "
                : "text-[#262163] hover:bg-[#262163]/10 "
            }`}
        >
          {cat.icon_url && cat.icon_url.startsWith("http") && (
            <Image
              src={cat.icon_url}
              alt="الخدمات - صورة"
              width={30}
              height={30}
              className="inline-block"
              priority
            />
          )}
          {cat.name}
        </li>
      ))}
    </ul>
  );
}
