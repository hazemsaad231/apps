import Image from "next/image"
const Logo = () => {
    return (


       <div className="hidden md:block">
  <Image
    src="/logo.webp"
    alt="logo"
    width={180}
    height={180}
    className="object-contain"
    priority
  />
</div>

    );
}
export default Logo
