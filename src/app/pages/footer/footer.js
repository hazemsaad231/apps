import Link from "next/link"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react"


export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full text-white bg-[#262163]" id="footer">
        {/* Background Image */}


        {/* Overlay */}

        {/* Main Footer Content */}
        <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8 text-sm">
            {/* Company Info */}
            <div className="space-y-2 lg:col-span-2">
              <h3 className="text-lg font-bold text-white">شركتنا</h3>
              <p className="leading-relaxed">
                حلول مبتكرة وموثوقة لتحقيق أهدافك بكفاءة واحترافية.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="#" className="hover:text-indigo-400 transition-colors" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="#" className="transition-colors" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="#" className=" hover:text-indigo-400 transition-colors" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="#" className=" hover:text-indigo-400 transition-colors" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white">روابط سريعة</h3>
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
              <h3 className="text-sm font-semibold text-white">الدعم</h3>
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
              <h3 className="text-sm font-semibold text-white">تواصل معنا</h3>
              <div className="space-y-2">
                <div className="flex gap-2 items-start">
                  <Mail size={16} className="mt-1 shrink-0" />
                  <a href="mailto:info@example.com" className="hover:text-indigo-300 text-xs">
                    info@example.com
                  </a>
                </div>
                <div className="flex gap-2 items-start">
                  <Phone size={16} className="mt-1 shrink-0" />
                  <a href="tel:+966123456789" className="hover:text-indigo-300 text-xs">
                    +966 (123) 456-789
                  </a>
                </div>
                <div className="flex gap-2 items-start">
                  <MapPin size={16} className="mt-1 shrink-0" />
                  <p className="text-xs">الرياض، المملكة العربية السعودية</p>
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
