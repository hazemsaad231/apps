"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import bg from "../../public/bg.jpg";
import layer from "../../public/Layer.png";
import CategoriesSidebar from "./pages/parts/list";
import CategoriesMain from "./pages/parts/details";
import Slider from "./pages/parts/slider";
import LoadSpinner from "./load/load";

export default function Home() {
  const [chances, setChances] = useState([]);
  const [selectedChance, setSelectedChance] = useState(null); // <-- الفرصة المعروضة تفاصيلها

  useEffect(() => {
    async function fetchChances() {
      try {
        const res = await fetch(
          "https://tadbeer.wj.edu.sa/public/api/invests?type&min_price&max_price&per_page",
          { cache: "no-store" }
        );
        const data = await res.json();
        setChances(data?.data || []);
        if (data?.data?.length > 0) {
          setSelectedChance(data.data[0]); // عرض أول فرصة افتراضيًا
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchChances();
  }, []);

  const handleCardClick = (item) => {
    setSelectedChance(item); // استبدال التفاصيل بالفرصة المختارة
    window.scrollTo({ top: 600, behavior: "smooth" }); // سكرول تقريبي لمكان التفاصيل
  };

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={bg || "/placeholder.svg"}
          alt="Hero Background"
          fill
          className="object-cover w-full h-full"
          placeholder="blur"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#262163]/80 to-transparent"></div>

        <div className="relative z-10 text-center px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center m-auto lg:items-start gap-6 w-full lg:w-3/4">
              <h6 className="text-white font-light text-[2rem] md:text-3xl lg:text-4xl xl:text-6xl">
                فرص استثمارية واعدة مع
              </h6>
              <h1 className="text-white font-bold text-5xl md:text-5xl lg:text-6xl xl:text-8xl">
                تدبير المتخصصة
              </h1>
              <p className="text-white m-auto font-light text-base md:text-lg max-w-lg leading-relaxed">
               شركة متخصصة في تقديم الخدمات المالية والمهنية لدعم نمو وتطور التجارة والأعمال. بفضل خبرتنا العميقة وفريقنا المتخصص، نوفر بيئة استثمارية موثوقة ومبنية على أسس استراتيجية قوية. انضم إلينا واستثمر في مستقبلٍ واعد مليء بالفرص
              </p>
              <div className="text-center m-auto mt-4">
                <Link
                  href="#chances"
                  className="bg-linear-to-r from-[#dbbb39] to-[#f5d76e] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-[#dbbb39]/50 hover:scale-105 transition-all"
                >
                  استكشف الفرص الآن
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex w-1/2 justify-center relative">
              <div className="relative w-96 h-96">
                <Image
                  src={layer || "/placeholder.svg"}
                  alt="Layer Image"
                  width={320}
                  height={320}
                  placeholder="blur"
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
         <div className="absolute bottom-0 w-full h-16 bg-white rounded-t-full"></div>
      </section>

      {/* Chances Section */}
      <section className="w-full bg-white pt-10 px-4 md:px-8 lg:px-16" id="chances">
        <div className="max-w-7xl mx-auto">
          {chances.length > 0 ? (
            <>
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 py-16">
                {chances.map((item) => (
                  <div
  key={item.id}
  className={`group h-full flex flex-col rounded-3xl overflow-hidden cursor-pointer transition-all duration-500
    ${selectedChance?.id === item.id 
      ? "border-4 border-[#dbbb39] shadow-2xl scale-105" 
      : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:border-[#dbbb39]/30"
    }`}
  onClick={() => handleCardClick(item)}
>
  <div className="relative h-64 overflow-hidden bg-gray-100">
    {item.gallery?.[0]?.photo_url ? (
      <Image
        src={item.gallery[0].photo_url}
        alt={item.name || "فرصة استثمارية"}
        fill
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center bg-gray-200">
        <span className="text-gray-400">صورة غير متوفرة</span>
      </div>
    )}
    <div className="absolute top-4 right-4 bg-linear-to-r from-[#dbbb39] to-[#f5d76e] text-[#1a1a4d] px-3 py-1 rounded-full text-xs font-bold">
      {item.type}
    </div>
  </div>
  <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
    <h3 className="text-lg text-center md:text-xl font-bold text-[#1a1a4d] line-clamp-2 group-hover:text-[#dbbb39] transition-colors mb-2">
      {item.name}
    </h3>
    {(item.min_price || item.max_price) && (
      <div className="mb-4 pb-4 border-t border-gray-100">
        <p className="text-sm text-gray-600 mb-2">نطاق الاستثمار</p>
        <div className="flex items-center justify-between">
          {item.min_price && (
            <span className="text-sm font-semibold text-[#1a1a4d]">
              من: {item.min_price.toLocaleString("ar-SA")} ر.س
            </span>
          )}
          {item.max_price && (
            <span className="text-sm font-semibold text-[#dbbb39]">
              إلى: {item.max_price.toLocaleString("ar-SA")} ر.س
            </span>
          )}
        </div>
      </div>
    )}
  </div>
</div>

                ))}
              </div>

              {/* Divider */}
              <div className="h-1 w-full bg-[#262163] my-20"></div>

              {/* Details Chance Only */}
              {selectedChance && (
                <div className="pt-10 pb-20">
                  <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[80%] m-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-1 md:col-span-2">
                      <Slider
                        src={(selectedChance.gallery || []).map((i) => i.photo_url)}
                        typeSrc={(selectedChance.gallery || []).map((i) => i.type_photo)}
                      />
                            {/* Sidebar */}
                    <div className="block md:hidden col-span-1">
                      <div className="w-full md:w-60 lg:w-80 h-max rounded-4xl bg-white shadow-lg border p-4 py-10 flex flex-col gap-3 mt-16">
                        <h3 className="text-lg font-extrabold text-[#262163]">استثمر في تدبير</h3>
                        <p className="text-gray-500">سجّل الآن للاستثمار في تدبير، وابدأ بمتابعة مستجدات الشركة وفرص نموها بشكل تلقائي.</p>
                        <div className="bg-[#dbbb39] text-white py-2 px-4 w-max cursor-pointer rounded-full font-semibold">
                          <Link href={`/form/${selectedChance.id}`}>استثمار الآن</Link>
                        </div>
                        <div className="w-full h-0.5 bg-gray-300 my-3"></div>
                        <CategoriesSidebar categories={selectedChance.categories || []} />
                      </div>
                    </div>
                      <div className="py-12">
                        <h3 className="text-2xl font-bold text-[#262163] mb-4">ابرز المعومات</h3>
                        <div className="flex justify-between mt-4">
                          <span className="font-medium text-[#262163]">نوع الاستثمار</span>
                          <span className="font-extrabold text-[#262163]">{selectedChance.type}</span>
                        </div>
                        <div className="flex justify-between mt-4 mb-4">
                          <span className="font-medium text-[#262163]">مبلغ الاستثمار</span>
                          <span className="font-extrabold text-[#262163]">{selectedChance.price} ر.س</span>
                        </div>
                        <div className="border-2 border-[#262163] p-4 py-8 text-[#262163] bg-[#262163]/15 rounded-4xl my-8">
                          يقدّم الرئيس التنفيذي لشركة تدبير عرضًا تفصيليًا في فيديو مدته ١٥ دقيقة، يستعرض فيه استراتيجية الشركة، أبرز الإنجازات، والوضع المالي الحالي.
                        </div>
                        <CategoriesMain categories={selectedChance.categories || []} />
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="hidden md:block col-span-1">
                      <div className="w-full md:w-60 lg:w-80 h-max rounded-4xl bg-white shadow-lg border p-4 py-10 flex flex-col gap-3 sticky top-20">
                        <h3 className="text-lg font-extrabold text-[#262163]">استثمر في تدبير</h3>
                        <p className="text-gray-500">سجّل الآن للاستثمار في تدبير، وابدأ بمتابعة مستجدات الشركة وفرص نموها بشكل تلقائي.</p>
                        <div className="bg-[#dbbb39] text-white py-2 px-4 w-max cursor-pointer rounded-full font-semibold">
                          <Link href={`/form/${selectedChance.id}`}>استثمار الآن</Link>
                        </div>
                        <div className="w-full h-0.5 bg-gray-300 my-3"></div>
                        <CategoriesSidebar categories={selectedChance.categories || []} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <LoadSpinner />
          )}
        </div>
      </section>
    </div>
  );
}
