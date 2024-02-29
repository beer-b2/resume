import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  python,
  php,
  figma,
  wordpress,
  sql,
  canva,
  dubaiPolice,
  byjus,
  rahnamashipbuilding,
  analytica,
  carConnect,
  LinearApp,
  hoverEffect,
  RahnamaShipbuilding,
  cplus,
  github,
  byjusDesign,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Content Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "canva",
    icon: canva,
  },
];

const experiences = [
  {
    title: "Hardware Repair Intern",
    company_name: "Dubai Police",
    icon: dubaiPolice,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Jul 2022",
    points: [
      "Diagnosed and resolved hardware and software issues with PCs, laptops, and routers, ensuring efficient system functionality.",
      "Optimized network connectivity by configuring and setting up computers, contributing to a 20% increase in overall system accessibility.",
    ],
  },

  {
    title: "Software Developer Intern",
    company_name: "Analytica FZE",
    icon: analytica,
    iconBg: "#383E56",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Developed Python-based web applications using open source code.",
      "Utilized JavaScript libraries for web application enhancements.",
      "Applied Python for machine learning and computer vision functionalities, contributing to project success.",
      "Elevated code quality through thorough reviews, resulting in a notable 15% improvement in overall maintainability.",
    ],
  },

  {
    title: "Web Developer - IT Engineer",
    company_name: "Rahnama Shipbuilding",
    icon: rahnamashipbuilding,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Developing and maintaining web company's website using HTML, CSS, JavaScript, and PHP.",
      "Configured and installed PC and network infrastructure, ensuring seamless operations and optimizing workflow efficiency through the integration of streamlined technologies.",
    ],
  },

  {
    title: "Developer",
    company_name: "BYJU'S",
    icon: byjus,
    iconBg: "#383E56",
    date: "March 2023 - Up to now",
    points: [
      "Developed user-friendly web interfaces using React, Tailwind, JavaScript, jQuery and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Car Connect",
    description:
      "A demo of a web-based platform that allows users to search for cars of their choice to rent, providing car details and daily rates. This platform offers a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carConnect,
    source_code_link: "https://github.com/beer-b2/carConnect/tree/main",
    platform: github,
  },
  {
    name: "LinearApp Website Rebuilt",
    description:
      "Rebuilt the Liner app website landing page by recreating a unique and modern UI design.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: LinearApp,
    source_code_link: "https://github.com/beer-b2/LinearApp-Website-Rebuilt",
    platform: github,
  },
  {
    name: "Hover Effect",
    description:
      "A custom cursor with a mask hover effect revealing text underneath.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: hoverEffect,
    source_code_link: "https://github.com/beer-b2/Secret-Message/tree/main",
    platform: github,
  },
  {
    name: "Rahnama Shipbuilding",
    description:
      "The first landing page I created for a client was developed without any prior experience in web development.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: RahnamaShipbuilding,
    source_code_link: "https://rahnamaholding.com",
    platform: github,
  },

  {
    name: "Designs at BYJU'S",
    description:
      "Some of the designs I created for BYJU'S marketing team during my tenure include...",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "canva",
        color: "pink-text-gradient",
      },
    ],
    image: byjusDesign,
    source_code_link:
      "https://www.figma.com/file/PUtJ4Sp4CbABMdZ9fcaqOg/Designs-at-BYJU'S?type=design&mode=design&t=JvJGLruk57MIbSII-1",
    platform: figma,
  },
];

export { services, technologies, experiences, projects };
