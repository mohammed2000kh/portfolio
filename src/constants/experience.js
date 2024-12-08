import MedicalLogo from "../assets/images/Experience/MedicalLogo.JPG";
import HospitalLogo from "../assets/images/Experience/HospitalLogo.JPG";
import ResearchLogo from "../assets/images/Experience/3.JPG";

import {
    FaStethoscope,
    FaClinicMedical,
    FaHandsHelping,
    FaMicroscope,
    FaBookMedical,
    SiPython,
    SiMongodb,
    SiReact,
    SiPostgresql
} from "react-icons/all";

export const EXPERIENCES = [
  {
    organisation: "Global Health Initiative",
    logo: MedicalLogo,
    link: "https://www.globalhealth.org/",
    positions: [
      {
        title: "Medical Volunteer",
        duration: "June 2022 - Current",
        content: [
          {
            text: "Provided healthcare services to underserved communities through outreach programs and mobile clinics.",
            tech: [
              {
                id: "m-1",
                icon: FaStethoscope,
                name: "Clinical Diagnosis",
              },
              {
                id: "m-2",
                icon: FaHandsHelping,
                name: "Humanitarian Aid",
              },
            ]
          },
        ],
      },
    ],
  },
  {
    organisation: "City General Hospital",
    logo: HospitalLogo,
    link: "https://www.cityhospital.com/",
    positions: [
      {
        title: "Resident Doctor",
        duration: "Jan 2020 - May 2024",
        content: [
          {
            text: "Conducted patient rounds, assisted in surgeries, and managed daily ward operations.",
            tech: [
              {
                id: "h-1",
                icon: FaClinicMedical,
                name: "Hospital Operations",
              },
              {
                id: "h-2",
                icon: SiMongodb,
                name: "Electronic Medical Records (EMR)",
              },
            ]
          },
        ],
      },
    ],
  },
  {
    organisation: "National Research Center",
    logo: ResearchLogo,
    link: "https://www.nrc-research.org/",
    positions: [
      {
        title: "Medical Researcher",
        duration: "Aug 2018 - Dec 2019",
        content: [
          {
            text: "Participated in oncology research focusing on new treatment methodologies and patient care improvement.",
            tech: [
              {
                id: "r-1",
                icon: FaMicroscope,
                name: "Lab Research",
              },
              {
                id: "r-2",
                icon: FaBookMedical,
                name: "Medical Documentation",
              },
            ]
          },
        ],
      },
      {
        title: "Data Analyst",
        duration: "Jan 2018 - July 2018",
        content: [
          {
            text: "Analyzed medical data for trends and patterns using Python and PostgreSQL.",
            tech: [
              {
                id: "d-1",
                icon: SiPython,
                name: "Python",
              },
              {
                id: "d-2",
                icon: SiPostgresql,
                name: "PostgreSQL",
              },
            ]
          },
        ],
      },
    ],
  },
];
