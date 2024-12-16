import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaStethoscope,
  FaUserMd,
  FaRegHospital,
  FaHandsHelping,
  FaLanguage,
  FaProjectDiagram,
  FaMicroscope,
  FaSyringe,
  FaLaptopMedical,
  FaBookMedical,
  FaClinicMedical,
} from "react-icons/fa";

// خريطة الأيقونات
const iconMap = {
  FaStethoscope,
  FaHandsHelping,
  FaClinicMedical,
  FaMicroscope,
  FaBookMedical,
  FaUserMd,
  FaRegHospital,
  FaLanguage,
  FaProjectDiagram,
  FaSyringe,
  FaLaptopMedical,
};

export const SkillIcon = ({ icon, name, styles}) => {
  return (
    <div className="flex flex-col">
      <span className={`hover:text-[#a8b6f1] ${styles ?? ""}`}>
        {React.createElement(icon)}
      </span>
      <p className={`font-poppins text-[#caddf7] ${/^[\u0600-\u06FF]/.test(name.charAt(0)) ? `text-[15px]` : `text-[12px]` }  mt-2`}>{name}</p>
    </div>
  );
};

const SkillCard = ({ title, items }) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  return (
    <motion.div
      whileInView={{ x: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 1, type: "spring", stiffness: 120 }}
      className={`mt-4 ${isArabic?`border-r`:`border-l`}  border-gray-200 dark:border-gray-700 mx-0 sm:mx-4`}
    >
      {/* mt-4 border-l border-gray-200 dark:border-gray-700 mx-0 sm:mx-4 */}
      <div className={`relative w-3 h-3 bg-bg_light_primary rounded-full top-5  border dark:border-gray-900 dark:bg-white ${isArabic ? `left-[6.2px]`:`right-[6.2px]`} `}>
      {/* relative w-3 h-3 bg-bg_light_primary rounded-full top-5 right-[6.2px] border dark:border-gray-900 dark:bg-white */}
      </div>
      <div className={`flex flex-row items-center sm:mb-6 mb-0 ${isArabic?`mr-6`:`ml-6`} `}>
        <h4 className={`font-poppins font-semibold ${isArabic?`text-[30px]`:`text-[20px]`}  leading-[32px]`}>
          {title}
        </h4>
      </div>
      <br />
      <div className={`grid grid-cols-3 gap-8 ${isArabic?`mr-8`:`ml-8`} `}>
        {items.map((item, index) => (
          <SkillIcon
            key={item.id || `skill-${index}`}
            icon={iconMap[item.icon]}
            name={item.name}
            styles="text-[30px] text-white"
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { t } = useTranslation();

  const title = t("skills.title", { returnObjects: false }) || "Skills"; 
  const skills = t("skills.list", { returnObjects: true }) || [];

  return (
    <section id="skills" className="sm:mb-0 sm:px-16 px-6 py-4">
      <motion.h1
        whileInView={{ y: [-20, 0], opacity: [0, 1] }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
        className="flex-1 font-Poppins font-semibold ss:text-[55px] sm:text-[45px] ss:leading-[80px] leading-[80px] text-white"
      >
        {title}
      </motion.h1>
      <div className="flex md:flex-row flex-col sm:py-10 py-6">
        <motion.div className="ml-4 mb-6 flex-1 flex gap-3 items-start justify-between flex-col custom-MediaQuery1:flex-row">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
