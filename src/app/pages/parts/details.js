"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CategoriesMain({ categories }) {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (categories?.length > 0) {
      setSelectedId(categories[0].id);
    }

    const handler = (e) => {
      const id = e?.detail ?? null;
      setSelectedId(id);
    };

    window.addEventListener("categorySelected", handler);
    return () => window.removeEventListener("categorySelected", handler);
  }, [categories]);

  const selectedCategory = categories.find((c) => String(c.id) === String(selectedId));

  return (
    <>
      {selectedCategory ? (
        <div className="mt-10" id={`cat-detail-${selectedCategory.id}`}>
          <div className="flex gap-2 items-center">
            {selectedCategory.icon_url && (
              <Image
                src={selectedCategory.icon_url}
                alt="الخدمات - صورة"
                width={50}
                height={50}
              />
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-[#262163]">{selectedCategory.name || ""}</h1>
          </div>

          <div className="w-full h-0.5 bg-gray-300 my-4"></div>
          {/* <p className="text-lg text-[#262163] font-medium">{selectedCategory.description || ""}</p> */}

<div
  className="text-lg text-[#262163] font-medium leading-relaxed prose prose-blue max-w-none"
  dangerouslySetInnerHTML={{ __html: selectedCategory.description || "" }}
></div>

        </div>
      ) : null}
    </>
  );
}
