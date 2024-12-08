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
  FaClinicMedical
} from "react-icons/all";

export const SKILLS_LIST = [
  {
      title: "Medical Skills",
      items: [
          {
              id: "ms-1",
              icon: FaStethoscope,
              name: "Patient Diagnosis and Care",
          },
          {
              id: "ms-2",
              icon: FaUserMd,
              name: "Medical Volunteerism",
          },
          {
              id: "ms-3",
              icon: FaSyringe,
              name: "Basic and Advanced Medical Procedures",
          },
          {
              id: "ms-4",
              icon: FaMicroscope,
              name: "Research and Laboratory Work",
          },
          {
              id: "ms-5",
              icon: FaBookMedical,
              name: "Medical Education and Training",
          },
      ],
  },
  {
      title: "Humanitarian and Interpersonal Skills",
      items: [
          {
              id: "hs-1",
              icon: FaHandsHelping,
              name: "Support for Refugees and Immigrants",
          },
          {
              id: "hs-2",
              icon: FaLanguage,
              name: "Multilingual Communication (Arabic, German, English)",
          },
          {
              id: "hs-3",
              icon: FaProjectDiagram,
              name: "Project Management and Planning",
          },
      ],
  },
  {
      title: "Technical and Professional Skills",
      items: [
          {
              id: "ts-1",
              icon: FaLaptopMedical,
              name: "Medical Informatics",
          },
          {
              id: "ts-2",
              icon: FaRegHospital,
              name: "Hospital and Clinic Operations",
          },
          {
              id: "ts-3",
              icon: FaClinicMedical,
              name: "Oncology Specialization Preparation",
          },
      ],
  },
];
