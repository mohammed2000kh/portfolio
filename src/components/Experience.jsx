import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { BsLink45Deg } from "react-icons/bs";
import "react-vertical-timeline-component/style.min.css";
import {
    FaStethoscope,
    FaHandsHelping,
    FaClinicMedical,
    FaMicroscope,
    FaBookMedical,
} from "react-icons/fa";
import { SiMongodb, SiPython, SiPostgresql } from "react-icons/si";

const iconMap = {
    FaStethoscope,
    FaHandsHelping,
    FaClinicMedical,
    FaMicroscope,
    FaBookMedical,
    SiMongodb,
    SiPython,
    SiPostgresql,
};

const Modal = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <div
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50"
            onClick={onClose}
        >
            <div className="relative">
                <img
                    src={image}
                    alt="Expanded view"
                    className="max-w-[90%] max-h-[90%] object-contain rounded-lg"
                />
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white text-lg"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

const Content = ({ link, tech }) => {
    return (
        <div>
            <p className="font-poppins font-normal text-[14px] text-dimWhite mt-4">
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <BsLink45Deg
                            size="1rem"
                            className="inline hover:text-white"
                        />
                    </a>
                )}
            </p>

            {tech && (
                <>
                    <p className="font-poppins font-normal text-dimWhite mt-3"></p>
                    <div className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                        <p className="flex sm:flex-row flex-wrap gap-5">
                            {tech.map((tech, index) => (
                                <span
                                    key={`tech-${index}`}
                                    className="text-dimWhite text-[20px] hover:text-[#8dbbeb] tooltip"
                                >
                                    {iconMap[tech.icon]
                                        ? React.createElement(iconMap[tech.icon])
                                        : null}
                                    <span className="tooltiptext">{tech.name}</span>
                                </span>
                            ))}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

const ExperienceCard = ({ experience, onImageClick }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "transparent",
                border: "0.1px solid white",
                maxWidth: "600px",
                direction:  "ltr",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            iconStyle={{ background: "white" }}
            icon={
                <div
                    className="flex justify-center items-center w-full h-full cursor-pointer"
                    onClick={() => onImageClick(experience.logo)}
                >
                    <img
                        src={experience.logo}
                        alt={experience.organisation}
                        className="w-[100%] h-[100%] object-cover rounded-full"
                    />
                </div>
            }
        >
            <div dir={/^[\u0600-\u06FF]/.test(experience.organisation.charAt(0)) ? 'rtl' : 'ltr'}>
            <div>
                <h3 className="text-white text-[24px] font-bold">
                    {experience.organisation}
                </h3>
                <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsLink45Deg className="inline hover:text-white ml-2" />
                </a>
            </div>

            {experience.position.map((position, index) => (
                <div key={index} className="mt-4">
                    <h4 className="text-white text-[20px] font-semibold">
                        {position.title}
                    </h4>
                    <p className="text-gray-400">{position.duration}</p>
                    {position.content.map((item, idx) => (
                        <div key={idx} className="mt-2">
                            <p className="text-gray-300">{item.text}</p>
                            {position.content.map((info, index) => (
                                <Content key={`content-${index}`} index={index} {...info} />
                            ))}
                        </div>
                    ))}
                </div>
            ))}</div>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(null);

    const experience =
        t("experience.content", { returnObjects: true }) || [];
    const title =
        t("experience.title", { returnObjects: true }) || {
            title: "Default Title",
        };

    return (
        <div id="experience" dir="ltr" className="sm:mb-0 sm:px-16 px-6 py-4 ">
            <motion.h1
                whileInView={{ y: [-20, 0], opacity: [0, 1] }}
                transition={{ duration: 1, type: "spring", stiffness: "120" }}
                className="flex-1 font-Poppins font-semibold ss:text-[55px] sm:text-[45px] ss:leading-[80px] leading-[80px] text-white"
                dir={title.charAt(0)=="ا" ? 'rtl' : 'ltr'}
            >
                {title}
            </motion.h1>

            <div className={`mt-10 flex flex-col `}>
                <VerticalTimeline>
                    {experience.length > 0 ? (
                        experience.map((experience, index) => (
                            
                            <ExperienceCard
                                key={`experience-${index}`}
                                experience={experience}
                                onImageClick={setSelectedImage}
                            />
                        ))
                    ) : (
                        <p className="text-white">لا توجد بيانات حالياً لعرضها.</p>
                    )}
                </VerticalTimeline>
            </div>

            <Modal
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </div>
    );
};

export default Experience;
