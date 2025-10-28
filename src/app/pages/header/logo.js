import Image from "next/image"
const Logo = () => {
    return (
       <div className="">
  <Image
    src="/logo.webp"
    alt="logo"
    width={140}
    height={140}
    className="object-contain"
    priority
  />
</div>

    );
}
export default Logo


// export const SmallLogo = () => {
//     return (
//         <div className="z-20">
//                          <Image
//                            src="/logo.webp"
//                            alt="logo"
//                            width={120}
//                            height={120}
//                            className="w-[100px] h-[100px] object-contain"
//                            priority
//                          />
//                        </div>

//     );
// }
