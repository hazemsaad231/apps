
"use client";

import Link from "next/link";

import Logo from "./logo";


export default function Header() {




  return (
    <header>
      <div>
  {/* desktop navbar */}
      <div className="bg-linear-to-r from-[#262163] to-[#262163] shadow-md">
        <nav className="relative flex justify-between items-center px-2 md:px-4 xl:px-8 py-1">

          
  <div className="flex">
            <Logo />
          </div>
        
          <ul>
            <li> <Link href="#footer" className={`block bg-white  text-[#262163] rounded-full py-1 px-4 hover:bg-[#262163] hover:text-white text-md`}>
              تواصل معنا
              </Link></li>
          </ul>

        


        </nav>
      </div>




      






      </div>

    

     
    </header>
  );
}


