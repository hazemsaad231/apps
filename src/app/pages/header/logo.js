import Image from "next/image"
const Logo = () => {
    return (


       <div className="hidden md:block">
        <a href="https://tadbeer-nine.vercel.app/">
  <Image
    src="/logo.webp"
    alt="logo"
    width={180}
    height={180}
    className="object-contain"
    priority
  />
</a>
</div>

    );
}
export default Logo
