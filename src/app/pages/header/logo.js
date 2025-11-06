import Image from "next/image"
const Logo = () => {
    return (


       <div className="w-28 sm:w-32 md:w-40 lg:w-44 xl:w-52">
        <a href="https://tadbeer-nine.vercel.app/">
  <Image
    src="/logo.webp"
    alt="logo"
    width={200}
    height={200}
    className="object-contain"
    priority
  />
</a>
</div>

    );
}
export default Logo
