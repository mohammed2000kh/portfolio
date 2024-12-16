import { useState } from "react";
import close from '../assets/images/close.svg';
import menu from '../assets/images/menu.svg';
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation();
  
  // دالة لتغيير اللغة
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setToggle(false); // إغلاق القائمة بعد تغيير اللغة
  };

  const navs = t("navs", { returnObjects: true }) || [];

  return (
    <nav className="w-full z-10 flex justify-between items-center absolute left-0 top-0 bg-transparent">
      {/* Logo */}
      <Logo />

      {/* List of links */}
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navs.map((nav, index) => (
          <li
            key={nav.link}
            className={`font-poppins font-semibold cursor-pointer text-[16px] px-4 hover:text-[#5b86cd] sm:mr-6 text-dark_primary`}
          >
            <a key={nav.link + index} href={`${nav.link}`}>{nav.title}</a>
          </li>
        ))}

        {/* زر تغيير اللغة */}
        <li className="font-poppins font-semibold cursor-pointer text-[16px] px-4 sm:mr-6 text-dark_primary relative">
          <div className="bg-transparent border-none cursor-pointer p-2 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 focus:outline-none">
            <select
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="bg-transparent text-dark_primary border-none w-full cursor-pointer focus:outline-none"
            >
              <option value="en" className="p-2 hover:bg-gray-200">
                English
              </option>
              <option value="de" className="p-2 hover:bg-gray-200">
                Deutsch
              </option>
              <option value="ar" className="p-2 hover:bg-gray-200">
                عربي
              </option>
            </select>
          </div>
        </li>
      </ul>

      {/* فقط للأجهزة المحمولة */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-4 cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "opacity-1" : "opacity-0"} p-4 bg-dark_primary
        absolute top-20  mx-4 my-0
        min-w-[140px] rounded-xl sidebar duration-800 transition-all ease-out`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navs.map((nav, index) => (
              <li
                key={`${nav.link} mobile`}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-center
                ${index === navs.length - 1 ? "mb-0" : "mb-4"} text-white w-full`}
                onClick={() => setToggle(!toggle)}
              >
                <a key={`${nav.link} ${index} mobile`} href={`${nav.link}`}>{nav.title}</a>
              </li>
            ))}

            {/* زر تغيير اللغة في النسخة المحمولة */}
            <li className="font-poppins font-semibold cursor-pointer text-[16px] text-center text-white w-full">
              <div className="bg-transparent border-none cursor-pointer p-2 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300 focus:outline-none">
                <select
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="bg-transparent text-white border-none w-full cursor-pointer focus:outline-none"
                >
                  <option value="en" className="p-2 hover:bg-gray-200">
                    English
                  </option>
                  <option value="de" className="p-2 hover:bg-gray-200">
                    Deutsch
                  </option>
                  <option value="ar" className="p-2 hover:bg-gray-200">
                    عربي
                  </option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
