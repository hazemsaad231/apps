// import bg from "../../../../public/bg.jpg";
import Image from "next/image";
import Link from "next/link";




export const Hero = ({handleBackToCards}) => {
    
    return (
        <div>
                <section className="relative w-full h-screen md:h-max md:py-48 lg:h-max lg:py-56 xl:h-screen flex items-center justify-center overflow-hidden">
        {/* <Image
          src={bg}
          alt="Hero Background"
          fill
          placeholder="blur"
          className="object-cover w-full h-full"
          priority
        /> */}
        <div className="absolute inset-0 bg-linear-to-bl from-transparent via-[#262163] to-[#262163]/80"></div>

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
                />
              </div>
            </div>
          </div>
        </div>
         <div className="absolute bottom-0 w-full h-6 bg-white rounded-t-full"></div>
      </section>
 
        </div>
    );
}