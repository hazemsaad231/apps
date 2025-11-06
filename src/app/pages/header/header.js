
"use client";

import Link from "next/link";

import Logo from "./logo";


export default function Header() {




  return (
    <header>
      <div>
  {/* desktop navbar */}
      <div className="bg-[#262163]  p-2 md:p-0.5 shadow-md h-16 md:h-20">
        <nav className="relative flex justify-between items-center px-1 md:px-4 xl:px-6">

          
  <div className="flex">
            <Logo />
          </div>
        
          <ul>
            <li className={`bg-[#f5d76e] border border-white text-white px-2 md:px-4 lg:px-6 py-2 rounded-full text-sm md:text-md lg:text-lg shadow-lg hover:shadow-[#dbbb39]/50 hover:scale-105 transition-all`}> <Link href="#footer" >
              تواصل معنا
              </Link></li>
          </ul>

        


        </nav>
      </div>




      






      </div>

    

     
    </header>
  );
}


