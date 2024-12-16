import { motion } from 'framer-motion';
import Lottie from "react-lottie-player";
import Hero_person from "../assets/images/Hero/main_comp2.json";
import { useTranslation } from "react-i18next";
import { SOCIAL_MEDIA } from "../constants";
import Button from './Button';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  const info = t("info", { returnObjects: true }) || [];
  const { link: linkedInLink } = SOCIAL_MEDIA[0];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Hero_person,
    progressiveLoad: true,
    rendererSettings: {
      preserveAspectRatio: "xMaxYmax meet"
    }
  };

  return (
    <motion.section
      initial={{ x: -100, opacity: 0.25 }}
      animate={{ x: 0, opacity: 1.5 }}
      transition={{ duration: 1 }}
      id="home" className="overflow-hidden bg-primaryLinear md:bg-none w-full">
      <div className="relative flex laptop:flex-row flex-col justify-around items-center">
        <div
          data-aos="slide-right"
          data-aos-delay="500"
          className="absolute hidden md:block w-screen h-full top-0 right- bg-primaryLinear bottom-0 -z-10"
        >
        </div>

        {/* first col */}
        <div className={`pb-20 ${isArabic ? `px-20` : `px-20`} pt-10 mt-10 laptop:pl-10 w-auto flex flex-col`}>
          <div className='flex flex-col justify-between items-center w-full p-1'>
            <h2 className={`flex-1 flex flex-col items-center font-Inria text-center font-semibold ${isArabic ? `text-[62px]` : `text-[52px]`} text-white leading-[75px] p-4`}>
              {info.title}
              <br className='xs:hidden block' /> {" "}
              {info.sub1 + " "}
              <br className='block' /> {" "}
              {info.sub2}
            </h2>
            <div className="flex flex-col w-full items-center ">
              <h1 className={` text-dark_primary font-Poppins ${isArabic ? `text-[66px]` : `text-[56px]`} leading-[70px]`}>
                {info.firstName}
                <span className="text-dark_primary"> <h1 className="text-[56px] sm:text-inherit text-center font-Poppins leading-[75px]" >{info.LastName}</h1></span>
              </h1>
            </div>
          </div>

          <br />

          <div className="text-center">
            {info.info_content.map((content, i) => (
              <motion.div
                whileInView={{ y: [20, 0], opacity: [0, 1] }}
                transition={{ duration: 1, type: 'spring', stiffness: "120" }}
                key={i}
                className={`flex items-center w-auto xs:w-80 gap-4 ${i === 1 && " flex-row-reverse text-right"}  `}>
                <h3>{content.count}</h3>
                <p className={` ${isArabic ? `text-[18px]` : `text-[15px]`} text-light_secondary`}>{content.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 1, type: 'spring', stiffness: "120" }}
          >
            <a href={linkedInLink} target="_blank">
              <Button styles={`w-full bg-letsConnect ${isArabic ? `text-[25px]` : `text-[15px]`} font-bold mt-3`} text={info.lets_connect} />
            </a>
          </motion.div>
        </div>

        {/* sec col */}
        <div className={`md:h-[37rem] pointer-events-none ${isArabic ? `mt-24` : `mt-16`} `}>
          <Lottie 
            loop 
            animationData={Hero_person} 
            play 
            {...defaultOptions}  
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'  // تجعل الأنيميشن يملأ الحاوية
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
