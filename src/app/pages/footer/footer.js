import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"


export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full text-white bg-[#262163] clip-slant-top relative overflow-hidden p-4" id="footer">
        {/* Background Image */}


        {/* Overlay */}

        {/* Main Footer Content */}
        <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8 text-sm">
            {/* Company Info */}
            <div className="space-y-2 lg:col-span-2">
              <h3 className="text-lg font-bold text-white mb-10">شركتنا</h3>
              <p className="leading-relaxed">
                حلول مبتكرة وموثوقة لتحقيق أهدافك بكفاءة واحترافية.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="https://sa.linkedin.com/company/tadbeersa" className="transition-colors hover:text-indigo-400" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a  href="https://x.com/TadbeerSA"
 className=" hover:text-indigo-400 transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a  href="https://sa.linkedin.com/company/tadbeersa" className=" hover:text-indigo-400 transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <h3 className="text-md font-bold text-white">روابط سريعة</h3>
              <ul className="space-y-1">
                {["الرئيسية", "عن الشركة", "الخدمات", "المشاريع", "المدونة"].map((link) => (
                  <li key={link}>
                    <Link href="#" className=" hover:text-indigo-400 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-2">
              <h3 className="text-md font-bold text-white">الدعم</h3>
              <ul className="space-y-1">
                {["مركز المساعدة", "الأسئلة الشائعة", "سياسة الخصوصية", "شروط الخدمة", "اتصل بنا"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-indigo-400 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <h3 className="text-md font-bold text-white">تواصل معنا</h3>
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <Mail size={16} className="mt-1 shrink-0" />
                  <a href="mailto:info@tadbeer.sa" className="hover:text-indigo-300 text-xs">
                    info@tadbeer.sa
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <Phone size={16} className="mt-1 shrink-0" />
                  <a href="tel:+966 55 514 4382" className="hover:text-indigo-300 text-xs">
                    0555144382
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <MapPin size={16} className="mt-1 shrink-0" />
                  <p className="text-xs">
                <a href="https://www.google.com/maps/place/21%C2%B033'26.3%22N+39%C2%B010'38.8%22E/@21.557312,39.177437,17z/data=!4m5!3m4!1s0x0:0x0!8m2!3d21.5573125!4d39.1774375?hl=ar-SA">
                6174 محمد بن عبدالعزيز، 3264 Al Amir، جدة 23441، المملكة العربية
                السعودية
                 </a>
              </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 my-4"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
            <p className="text-center md:text-left">
              © {currentYear} جميع الحقوق محفوظة. تم التطوير بواسطة{" "}
              <a href="#" className="text-indigo-400 hover:text-indigo-300">فريقنا</a>
            </p>
            <div className="flex gap-4">
              {["سياسة الخصوصية", "شروط الاستخدام", "ملفات تعريف الارتباط"].map((link) => (
                <Link key={link} href="#" className="hover:text-indigo-400 transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
    </footer>


  )
}
