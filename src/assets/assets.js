import menuClose from "./menu_close.svg";
import menuOpen from "./menu_open.svg";
import heroImage from "./hero_image.jpg";
import aboutImage from "./about_image.jpg";
import cssIcon from "./css3.svg";
import jsIcon from "./javascript.svg";
import figmaIcon from "./figma.svg";
import reactIcon from "./react.svg";
import htmlIcon from "./html.svg";
import framerIcon from "./framer-motion.svg";
import githubIcon from "./github.svg";
import tailwindcssIcon from "./tailwindcss.svg";
import arrowIcon from "./arrow_icon.svg";
import project1_img from "./project_1.svg";
import project2_img from "./project_2.svg";
import project3_img from "./project_3.svg";
import project4_img from "./project_4.svg";
import project5_img from "./project_5.svg";
import project6_img from "./project_6.svg";

export const assets = {
  menuOpen,
  menuClose,
  heroImage,
  aboutImage,
  arrowIcon,
};

export const skillsData = [
  { id: 1, image: htmlIcon, title: "Html", desctiption: "Markup Language" },
  { id: 2, image: cssIcon, title: "CSS", desctiption: "Style Language" },
  {
    id: 3,
    image: jsIcon,
    title: "JavaScript",
    desctiption: "Programming Language",
  },
  {
    id: 4,
    image: tailwindcssIcon,
    title: "TailwindCss",
    desctiption: "Utility-first Framework",
  },
  {
    id: 5,
    image: reactIcon,
    title: "ReactJS",
    desctiption: "JavaScript Library",
  },
  { id: 6, image: figmaIcon, title: "Figma", desctiption: "Design Tool" },
  {
    id: 7,
    image: framerIcon,
    title: "Framer Motion",
    desctiption: "Animation Library",
  },
  {
    id: 8,
    image: githubIcon,
    title: "Githup",
    desctiption: "Code Hosting",
  },
];

export const servicesData = [
  {
    id: 1,
    title: "Responsive Design",
    description:
      "Ensuring the site works well on different screen sizes and devices.",
  },
  {
    id: 2,
    title: "SEO Optimization",
    description:
      "Implementing strategies to ensure the website is search-engine friendly, focusing on page titles, meta tags, and URLs.",
  },
  {
    id: 3,
    title: "API Integration",
    description:
      "Connecting front-end applications with back-end services or third-party APIs for dynamic data loading.",
  },
  {
    id: 4,
    title: "Animation & Transitions",
    description:
      "Adding interactive animations using JavaScript libraries like Framer Motion.",
  },
  {
    id: 5,
    title: "Dynamic content rendering ",
    description:
      "Updating web pages with new content based on user interactions, API data, or real-time updates without reloading the page.",
  },
  {
    id: 6,
    title: "Frontend Frameworks Integration",
    description:
      " Implementing frameworks like React to build dynamic applications.",
  },
];

export const projectsData = [
  {
    id: 100,
    image: project1_img,
    title: "Portifolio",
    description: "Web development is the process of building, programming ",
  },
  {
    id: 101,
    image: project2_img,
    title: "Portifolio",
    description: "Web development is the process of building, programming ",
  },
  {
    id: 102,
    image: project3_img,
    title: "Portifolio",
    description: "Web development is the process of building, programming ",
  },
  {
    id: 103,
    image: project4_img,
    title: "Test",
    description: "Web development is the process of building, programming ",
  },
  {
    id: 104,
    image: project5_img,
    title: "Food Web",
    description: "Web development is the process of building, programming ",
  },
  {
    id: 105,
    image: project6_img,
    title: "Ecommece",
    description: "Web development is the process of building, programming ",
  },
];
