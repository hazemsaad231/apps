"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import bg from "../../public/bg.jpg";
// import layer from "../../public/Layer.png";
import CategoriesSidebar from "./pages/parts/list";
import CategoriesMain from "./pages/parts/details";
import Slider from "./pages/parts/slider";
import LoadSpinner from "./load/load";
import { Sparkles , TrendingUp } from "lucide-react";


// lucide-react icons
import { RefreshCw, Info, ArrowLeft } from "lucide-react";

export default function Home() {
  const [chances, setChances] = useState([]);
  const [selectedChance, setSelectedChance] = useState(null); // افتراضي null عشان نعرض الكارتس أول
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchChances() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://tadbeer.wj.edu.sa/public/api/invests?type&min_price&max_price&per_page",
        { cache: "no-store" }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const items = data?.data || [];
      setChances(items);
      // مفيش auto-select هنا عشان الكارتس تبان أول
    } catch (err) {
      console.error(err);
      setError("حصل خطأ في تحميل الفرص. حاول تاني.");
      setChances([]);
      setSelectedChance(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchChances();
  }, []);

  const handleCardClick = (item) => {
    setSelectedChance(item);
  };

  const handleBackToCards = () => {
    setSelectedChance(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-max md:py-48 lg:h-max lg:py-56 xl:h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={bg || "/placeholder.svg"}
          alt="Hero Background"
          fill
          className="object-cover w-full h-full"
          placeholder="blur"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-bl from-transparent via-[#262163] to-transparent"></div>

        <div className="relative z-10 text-center px-4">
          <div className="flex flex-col md:flex-row justify-center md:gap-10 lg:gap-12 xl:gap-16 mx-auto">
            <div className="flex flex-col justify-center m-auto gap-6 w-full">
              <h6 className="text-white m-auto text-center font-light text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
                فرص استثمارية واعدة مع
              </h6>
              <h1 className="text-white text-center m-auto font-bold text-[2.6rem] md:text-5xl lg:text-6xl xl:text-7xl">
                تدبير المتخصصة
              </h1>
              <p className="text-white m-auto font-light text-base md:text-md lg:text-lg max-w-lg leading-relaxed">
               شركة متخصصة في تقديم الخدمات المالية والمهنية لدعم نمو وتطور التجارة والأعمال. بفضل خبرتنا العميقة وفريقنا المتخصص، نوفر بيئة استثمارية موثوقة ومبنية على أسس استراتيجية قوية. انضم إلينا واستثمر في مستقبلٍ واعد مليء بالفرص
              </p>
              <div className="text-center m-auto mt-4">
                <Link
                  href="#chances"
                  onClick={()=> handleBackToCards()}
                  className="bg-linear-to-r from-[#dbbb39] to-[#f5d76e] text-white px-6 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-[#dbbb39]/50 hover:scale-105 transition-all"
                >
                  استكشف الفرص الآن
                </Link>
              </div>
            </div>

            <div className="hidden md:flex justify-center relative">
              <div className="relative md:w-60 md:h-60 lg:w-80 lg:h-80 ">
                <Image
                  src={"/Layer.png"}
                  alt="Layer Image"
                  width={320}
                  height={320}
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
         <div className="absolute bottom-0 w-full h-6 bg-white rounded-t-full"></div>
      </section>

      {/* Chances Section */}
      <section className="w-full bg-white pt-10 px-4 md:px-8 lg:px-16" id="chances">
        <div className="max-w-8xl mx-auto">
          {/* Loading */} 
          {loading ? (
            <div className="py-20 flex items-center justify-center">
              <LoadSpinner />
            </div>
          ) : error ? (
            // Error state
            <div className="py-20 text-center">
              <p className="text-red-500 font-semibold mb-4">{error}</p>
              <button
                onClick={fetchChances}
                className="inline-flex items-center gap-2 bg-[#dbbb39] text-white px-6 py-3 rounded-full font-semibold"
              >
                <RefreshCw className="w-4 h-4" />
                حاول ثانية
              </button>
            </div>
          ) : chances.length > 0 ? (
            <>
              {/* هنا الفرق: لو selectedChance موجود هنعرض تفاصيل الفرصة بدل الكروت */}
              {selectedChance ? (
                <div className="pb-28" id="details">
                  <div className="flex items-center gap-4 mb-6">
                    <button
                      onClick={handleBackToCards}
                      className="inline-flex items-center cursor-pointer gap-2 bg-[#f5d76e] border px-3 py-2 rounded-full shadow hover:shadow-md"
                    >
                      <ArrowLeft className="w-4 h-4 text-white" />
                    <span className="text-white mr-2">رجوع</span>
                    </button>
                  </div>

                  <div className="max-w-8xl md:max-w-7xl lg:max-w-6xl xl:max-w-6xl m-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-1 md:col-span-2">
                      <Slider
                        src={(selectedChance.gallery || []).map((i) => i.photo_url)}
                        typeSrc={(selectedChance.gallery || []).map((i) => i.type_photo)}
                      />
                      {/* Sidebar for small screens */}
                      <div className="block md:hidden col-span-1 mt-14">
                        <div className="w-full md:w-60 lg:w-80 h-max rounded-4xl bg-white shadow-lg border p-4 py-10 flex flex-col gap-3 mb-12">
                          <h3 className="text-xl font-extrabold text-[#262163]">استثمر في تدبير</h3>
                          <p className="text-gray-500">سجّل الآن للاستثمار في تدبير، وابدأ بمتابعة مستجدات الشركة وفرص نموها بشكل تلقائي.</p>
                          <div className="bg-[#dbbb39] text-white py-2 px-4 w-max cursor-pointer rounded-full font-semibold">
                            <Link href={`/form/${selectedChance.id}`}>استثمار الآن</Link>
                          </div>
                          <div className="w-full h-0.5 bg-gray-300 my-3"></div>
                          <CategoriesSidebar categories={selectedChance.categories || []} />
                        </div>
                      </div>

                      <div className="py-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#262163] mb-6 flex items-center gap-2">
                          <Info className="w-6 h-6" />
                          ابرز المعومات
                        </h3>
                        <div className="w-full h-0.5 bg-gray-300 my-4"></div>
                        <div className="flex justify-between mt-4">
                          <span className="font-medium text-[#262163]">نوع الاستثمار</span>
                          <span className="font-extrabold text-[#262163]">{selectedChance.type}</span>
                        </div>
                        <div className="flex justify-between mt-4 mb-4">
                          <span className="font-medium text-[#262163]">مبلغ الاستثمار</span>
                          <span className="font-extrabold text-[#262163]">{selectedChance.price} ر.س</span>
                        </div>
                        <CategoriesMain categories={selectedChance.categories || []} />
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="hidden md:block col-span-1">
                      <div className="w-full md:w-60 lg:w-80 h-max rounded-4xl bg-white shadow-lg border p-4 py-10 flex flex-col gap-3 sticky top-20">
                        <h3 className="text-xl font-extrabold text-[#262163]">استثمر في تدبير</h3>
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
              ) : (
                /* Cards area (بتظهر بس لو مفيش selectedChance) */
                <div className="pb-28 max-w-8xl md:max-w-7xl lg:max-w-6xl xl:max-w-6xl m-auto">
              
 <section className="py-6 px-6 bg-linear-to-r from-[#1a1a4d]/2 to-[#dbbb39]/2 border border-[#dbbb39]/40 rounded-2xl">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-linear-to-br from-[#dbbb39] to-[#f5d76e] rounded-2xl">
                <Sparkles className="w-8 h-8 text-[#1a1a4d]" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a4d]">
                  فرصنا
                </h2>
                <p className="text-gray-600 text-sm md:text-base mt-1">استكشف أفضل الفرص الاستثمارية المتاحة</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-[#dbbb39]/30 shadow-md">
              <TrendingUp className="w-5 h-5 text-[#dbbb39]" />
              <span className="text-sm font-semibold text-[#1a1a4d]">
                <span className="text-[#dbbb39] px-1"> {chances.length} </span> فرص متاحة
              </span>
            </div>
          </div>
        </div>
      </section>

                  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-14 md:gap-20 xl:gap-40 mt-14`}>
                    {chances.map((item) => (
                      <div
                        key={item.id}
                        className={`group h-full flex flex-col rounded-3xl overflow-hidden  cursor-pointer transition-all duration-500
                          ${selectedChance?.id === item.id 
                            ? "border-4 border-[#dbbb39] shadow-2xl scale-105" 
                            : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:border-[#dbbb39]/30"
                          }`}
                        onClick={() => handleCardClick(item)}
                      >
                        <div className="flex-1">
                          <div className="relative h-64 overflow-hidden bg-gray-100">
                            {item.gallery?.[0]?.photo_url ? (
                              <Image
                                src={item.gallery[0].photo_url}
                                alt={item.name || "فرصة استثمارية"}
                                fill
                                className="w-full h-full object-center group-hover:scale-110 transition-transform duration-500"
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
                          <div className="flex-1 p-2 md:p-4 flex flex-col justify-between">
                            <h3 className="text-lg text-center md:text-xl font-bold text-[#1a1a4d] line-clamp-2 group-hover:text-[#dbbb39] transition-colors mb-2">
                              {item.name}
                            </h3>
                            <div className="w-full h-0.5 bg-gray-200 my-3"></div>
                                <div className="flex justify-between mt-4">
                          <span className="font-medium text-[#262163]">نوع الاستثمار</span>
                          <span className="font-extrabold text-[#262163]">{item.type}</span>
                        </div>
                        <div className="flex justify-between mt-4 mb-4">
                          <span className="font-medium text-[#262163]">مبلغ الاستثمار</span>
                          <span className="font-extrabold text-[#262163]">{item.price} ر.س</span>
                        </div>
                        <button
                          onClick={() => handleCardClick(item)}
                          className="bg-[#dbbb39] text-[#262163] group-hover:text-[#dbbb39] group-hover:bg-[#262163] py-2 px-4 w-full cursor-pointer rounded-full font-semibold"
                        >
                         تفاصيل الفرصة
                        </button>

                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div className="h-1 w-full bg-[#262163] my-20"></div> */}
                </div>
              )}
            </>
          ) : (
            // No chances (and not loading)
            <div className="py-40 text-center">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2"> لا توجد بيانات</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
