import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  cpp,
  python,
  cmake,
  csharp,
  android,
  java,
  linux,
  opencv,
  opengl,
  unity,
  unreal,
  pytorch,
  bingo,
  construction,
  mesh,
  news,
  road,
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
    title: "Computer Vision",
    icon: web,
  },
  {
    title: "Computer Graphics",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: backend,
  },
  {
    title: "User Experience",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "C#",
    icon: csharp,
  },
  // {
  //   name: "Java",
  //   icon: java,
  // },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "OpenGL",
    icon: opengl,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Unreal",
    icon: unreal,
  },
];

const experiences = [
  {
    title: "Experimental Mobile News App for Identifying User Reading Patterns",
    company_name: "Academic Project (Java, Android Studio)",
    icon: news,
    iconBg: "#383E56",
    date: "Feb 2020 - Sep 2021",
    points: [
      "Engineered an experimental news app with integrated functionality for tracking user reading habits, such as article reading duration, scrolling speed, and phone battery level, capturing over 1000 instances of detailed user data.",
      "Utilized multiple Android APIs, including motion, environment detection, and audio management, to accurately determine user status during app usage.",
      "Analyzed comprehensive mobile data combined with user survey responses, employing cluster analysis to categorize reading patterns into four distinct types, enhancing understanding of user engagement by 40%.",
    ],
  },
  {
    title: "Digital Mesh Editor",
    company_name: "Academic Project (C++, OpenGL, OpenMesh, Windows Forms)",
    icon: mesh,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Jan 2022",
    points: [
      "Established a 3D model editor with capabilities for skeleton extraction and image-based texture mapping.",
      "Implemented OpenMesh as the model’s data structure to contract mesh and parameterize rectangular images as skin.",
      "Accelerated the rendering process of the 3D model using OpenGL.",
    ],
  },
  {
    title: "Online Carnaval Bingo",
    company_name: "Partner Software Engineer with International Games System Co., Ltd. (Typescript, Cocos Creator)",
    icon: bingo,
    iconBg: "#383E56",
    date: "Apr 2022 - Jun 2022",
    points: [
      "nhanced the game’s framework extensibility by streamlining the game flow and modularizing game states with a Finite State Machine, leading to a 30% improvement in development efficiency",
      "Applied delegate pattern to refactor the relationship between game state and components, reducing coupling and enhancing code cleanliness, resulting in a 25% increase in scalability and maintainability for the game series.",
      "Implemented new game features and refined existing functionalities, including visual effects and roulette mechanics.",
    ],
  },
  {
    title: "Construction Site Attendance System",
    company_name: "Pieceworker (Python, OpenCV, Pytorch)",
    icon: construction,
    iconBg: "#383E56",
    date: "Feb 2022",
    points: [
      "Implemented Object Recognition technology for PPE (Personal protective equipment) compliance, reducing construction site safety issues by 40%.",
      "Engineered an automated attendance system with Facial Recognition, yielding a 60% efficiency improvement.",
      "Created a user interface linked to webcams, displaying recognized worker names and correct PPE usage; automated attendance logging when both criteria are met.",
    ],
  },
  {
    title: "Advanced 3D Road Reconstruction and Virtual Navigation System",
    company_name: "Academic Thesis (Python, OpenCV, Pytorch)",
    icon: road,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Jul 2023",
    points: [
      "Engineered a 3D road model using sequence panoramic images, resulting in a 25% increase in model accuracy and realism, and culminating in a user-friendly virtual environment with improved fidelity and reduced unrealistic object interference.",
      "Constructed a virtual navigation system on Unreal Engine, addressing fragmentation in conventional 3D reconstruction.",
      "Implemented Object Detection and Object Tracking to isolate and remove obstructive objects, which led to a 20% improvement in scene clarity.",
      "Utilized algorithmic to select ten same-site images, identifying the least obstructed views for optimal scene reconstruction.",
      "Applied Image Registration, Stitching, and Color Consistency techniques to seamlessly integrate selected patches, achieving a 30% improvement in visual continuity."
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
