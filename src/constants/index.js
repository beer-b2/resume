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
  carrent,
  jobit,
  tripguide,
  cplus,
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
      "Developing and maintaining web ompany's website using HTML, CSS, JavaScript, and PHP.",
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
