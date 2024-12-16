import React from "react";
import Button from "./Button";
import { SOCIAL_MEDIA, RESUME_LINK, ABOUT_ME } from '../constants'
import { useTranslation } from "react-i18next";
// import { AiFillGithub } from "react-icons/ai";

// استيراد الصورة الخاصة بك
// import personalImage from '../assets/images/personal.jpg';

const Footer = () => {
  const { t,i18n } = useTranslation();
	const isArabic = i18n.language === 'ar';
  const about = t("about_me", { returnObjects: true }) || [];
  const personalImage = "/MedicalLogo.jpg";

  return (
    <footer id="contact" className="bg-secondaryLinear sm:px-16 px-6">
      <div
        className={`flex md:flex-row flex-col-reverse py-6 xl:max-w-[1280px] w-full mx-auto gap-y-4 items-center justify-center`}
      >
        <div className={"md:flex-1 flex-col flex justify-center items-center md:items-start"}>
          <h2 className="text-xl font-bold font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-[25px]">
            {about.name}
          </h2>
          <p
            className={`font-poppins font-normal text-center md:text-left text-dimWhite text-[20px] leading-[30.8px] max-w-[470px] mt-5`}
          >
            {about.tagLine}
          </p>
          <div className="flex flex-row mt-4">
            {SOCIAL_MEDIA.map((social, index) => (
              <a
                href={social.link}
                target="_blank"
                key={social.id}
                index={index}
                className={`${isArabic?`ml-5`:`mr-5`}  text-[30px] hover:text-[#F5F9FD]`}
              >
                {React.createElement(social.icon)}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2">
            <a href={RESUME_LINK} target="_blank">
              <Button styles={`mt-10 mr-3 ${isArabic?`text-[16px]`:``}`} text={about.resume} icon="AiFillGithub" />
            </a>
            {/* <a href={REPO_LINK} target="_blank">
            <Button
              styles="mt-10 inline-flex items-center justify-center"
              text="Star"
              icon={AiFillGithub}
            />
          </a> */}
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <img
            src={personalImage}
            alt="Mohammad Abdel Razzaq Khalifa"
            className="w-[200px] h-[200px] border-2 border-dark_primary relative z-[5] rounded-full"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
