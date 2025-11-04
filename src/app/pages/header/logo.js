import Image from "next/image"
const Logo = () => {
    return (
       <div>
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
