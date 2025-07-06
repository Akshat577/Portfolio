import leetcode from '../assets/images/leetcode.png';
import github from '../assets/images/github.png';
import bigmart from '../assets/images/BIG-MART-SALES-PRIDICTION-PROJECT-pptx-1-320.webp'
import snake from '../assets/images/Snake.png'
import css from "../assets/images/css.png";
import figma from "../assets/images/figma.png";
import git from "../assets/images/git.png";
import html from "../assets/images/html.png";
import javascript from "../assets/images/javascript.png";
import nodejs from "../assets/images/nodejs.png";
import reactjs from "../assets/images/reactjs.png";
import tailwind from "../assets/images/tailwind.png";
import xscale from "../assets/images/10xscale.jpeg"
import bitcoin from "../assets/images/Bitcoin.webp"
import creditcard from "../assets/images/creditcard.webp"
import portfolio from "../assets/images/portfolio.png"
const education = [
  {
    title: "IIT Hyderabad",
    degree: "Major in Material Science and Minor in Electrical Engineering",
    place_name: "Hyderabad",
    date: "November 2022 - 2026",
    grade: "CGPA: 9.11 (Current)"
  },
  {
    title: "Mother Mary H.S School",
    degree: "Class XII",
    place_name: "Nagda Junction",
    date: "April 2021 - May 2022",
    grade: "Percentage: 96.4%"
  },
  {
    title: "The Aditya Birla Public School",
    degree: "Class X",
    place_name: "Nagda Junction",
    date: "April 2019 - March 2020",
    grade: "Percentage: 95.4%"
  },
];


const coding = [
  {
    image: leetcode,
    title: "Leetcode",
    description: "",
    url: "https://leetcode.com/u/akshatjain5773/"
  },
  {
    image: github,
    title: "Github",
    description: "10+ Public Repos | 10+ Projects",
    url: "https://github.com/Akshat577"
  },
 
]

const experience = [
  {
    image: xscale,
    title: "Artificial Intelligence / Machine Learning Intern",
    company: "10xScale.Ai",
    date: "Jan 2025 - June 2025",
    description: "During my 6-month internship at 10xScale.Ai, I worked on multiple real-world AI projects, including an AI-powered resume builder, a production-grade WhatsApp medical bot for hospital appointment management, and a robust AI job scraper platform. My responsibilities included designing and implementing solutions using large language models (LLMs), LangChain, LangGraph, and Retrieval Augmented Generation techniques. I developed systems for resume parsing and optimization, built context-aware conversational agents for healthcare, and architected scalable web scraping pipelines leveraging Selenium, OpenAI embeddings, and FAISS vector databases. My work focused on automation, user-centric design, and deploying advanced NLP and ML solutions to solve business challenges efficiently."
  },
 
]

const projects = [
  {
    title: 'Big Mart Sales Prediction',
    image:bigmart,
    github: 'https://github.com/Akshat577/Big-Mart-Sales-Prediction',
    description: 'Machine learning model to predict sales for Big Mart outlets using historical data and feature engineering.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter Notebook'],
  },
  {
    title: 'Snake and Ladder Game',
    image:snake,
    github: 'https://github.com/Akshat577/Snake-and-ladder',
    description: 'Web-based Snakes & Ladders game with animated movement, random dice rolls, and automated opponent.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
  },
  {
    title: 'Bitcoin Price Prediction',
    image:bitcoin,
    github: 'https://github.com/Akshat577/Bitcoin-Price-Prediction',
    description: 'Predictive model for Bitcoin prices using machine learning and historical data analysis.',
    tags: ['Python', 'Pandas', 'Scikit-learn'],
  },
  {
    title: 'Credit Card Fraud Detection',
    image:creditcard,
    github: 'https://github.com/Akshat577/credit-card-fraud-detection',
    description: 'Machine learning solution to detect fraudulent credit card transactions with high accuracy.',
    tags: ['Python', 'Scikit-learn', 'Pandas'],
  },
  {
    title: 'Handwritten Digit Recognition',
    github: 'https://github.com/Akshat577/HandwrittenDigitRecognition',
    description: 'Deep learning model for recognizing handwritten digits using the MNIST dataset.',
    tags: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
  },
  {
    title: 'Portfolio',
    image: portfolio,
    github: 'https://github.com/Akshat577/Portfolio',
    description: 'A personal portfolio website showcasing my skills, projects, achievements, education, and industry experiences.',
    tags: ["ReactJS", "CSS"],
  },
];

const technologies = [
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "ExpressJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
  },
  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Github",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
  }
];

export { education, experience, projects, coding,  technologies };