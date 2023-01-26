import SagaraIcon from "/public/icons/ic-sagara.svg";
import SoluvasIcon from "/public/icons/ic-soluvas.svg";
import MagprotechIcon from "/public/icons/ic-magprotech.svg";
import { IExperiencesData } from "@/types/data";

export const experienceDatas: IExperiencesData[] = [
  {
    company: "Soluvas",
    role: "Front-End Developer",
    icon: SoluvasIcon,
    entryDate: "Oct 2022 - Jan 2023",
    status: "Full-Time",
    desc: [
      "Work closely with Project Manager and collaborating with designers to ensure good visual integration with the code",
      "Develop web application using Typescript, Material UI, React JS and Next JS",
      "Working collaboratively with other developer using gitlab",
      "Managing application’s state using Redux",
      "Working with asynchronous HTTP requests to REST endpoints using axios and perform CRUD operations",
    ],
  },
  {
    company: "Sagara Technology",
    role: "Front-End Engineer",
    icon: SagaraIcon,
    entryDate: "Aug 2022 - Nov 2022",
    status: "Internship",
    desc: [
      "Work closely with Project Manager and Team Leader",
      "Continuing internal website projects using React JS",
      "Managing application’s state using Redux, especially redux thunk and redux persist",
      "Working with asynchronous HTTP requests to REST endpoints using axios and perform CRUD operations",
    ],
  },
  {
    company: "Magprotech",
    role: "Embedded System Engineer",
    icon: MagprotechIcon,
    entryDate: "Aug 2022 - Nov 2022",
    status: "Contract",
    desc: [
      "Building an automatic disinfection chamber and automatic fish feeder project.",
      "Creating a software program using arduino and designing the electrical system",
      "Building electrical instrumentation that can be connected each other, both wired and wireless.",
      "Implementing Internet of Things in several project",
    ],
  },
];
