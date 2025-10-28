
"use client";

import Link from "next/link";

import Logo from "./logo";


export default function Header() {




  return (
    <header>
      <div>
  {/* desktop navbar */}
      <div className="bg-linear-to-r from-transparent via-[#262163]/80 to-transparent">
        <nav className="relative bg-[#262163] text-white flex justify-between items-center px-2 md:px-4 xl:px-8 py-1">

          
  <div className="flex">
            <Logo />
          </div>
        
          <ul>
            <li> <Link href="/#footer" className={`hover:text-indigo-900 hover:bg-white border border-white rounded-full p-2 text-md
              md:px-4 md:py-2 md:text-lg`}>
              تواصل معنا
              </Link></li>
          </ul>

        


        </nav>
      </div>




      






      </div>

    

     
    </header>
  );
}


