//  icons
import {
  FiMessageCircle,
  FiLinkedin,
  FiGithub,
  FiMail,
  FiMapPin,
} 
from 'react-icons/fi';
import {
  VscCode,
  VscRemoteExplorer,
  VscTerminal,
  VscSettingsGear,
}
from 'react-icons/vsc';

// projects images
import Project1 from './assets/img/projects/calculator.jpg';
import Project2 from './assets/img/projects/web.jpg';
import Project3 from './assets/img/projects/stopwatch.jpeg';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nodejs.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/tenth.jpg';
import TestiImage2 from './assets/img/testimonials/twelve.jpg';
import TestiImage3 from './assets/img/testimonials/btech.jpeg';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'projects',
    href: 'projects',
  },
  {
    name: 'Skills',
    href: 'skills',
  },
  {
    name: 'Academics',
    href: 'academics',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiMessageCircle />,
    href: 'https://web.whatsapp.com/',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/aniket0420/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Aniket0420',
  },
];

// companies

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Calculator',
    category: 'Javascript',

  },
  {
    id: '2',
    image: Project2,
    name: 'Marketing Website',
    category: 'Web development',
  },
  {
    id: '3',
    image: Project3,
    name: 'Stopwatch',
    category: 'Javascript',
  },
  
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Javascript',
  },
  {
    name: 'Web development',
  },
  
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
];

// services
export const services = [
  {
    icon: <VscCode />,
    name: 'C / C++',
    description:
      'C++ is a powerful general-purpose programming language. It can be used to develop operating systems, browsers, games, and so on. C++ supports different ways of programming like procedural, object-oriented, functional, and so on. This makes C++ powerful as well as flexible.',
  },
  {
    icon: <VscRemoteExplorer />,
    name: 'HTML / CSS',
    description:
      'CSS is used to control the style of a web document in a simple and easy way. CSS is a language that defines the design and layout of web pages. In other words, CSS controls how web pages look when loaded in a browser. CSS is a technology of the World Wide Web, alongside HTML and JavaScript.',
  },
  {
    icon: <VscTerminal />,
    name: 'Javascript',
    description:
      'JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.',
  },
  {
    icon: <VscSettingsGear />,
    name: 'React Js',
    description:
      'ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application. It was initially developed and maintained by Facebook and later used in its products like WhatsApp & Instagram.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Rani Laxmi Bai Memorial School, Lucknow, Uttar Pradesh.',
    authorName: '2016-2017',
    authorPosition: '95%',
  },
  {
    authorImg: TestiImage2,
    authorText: 'Rani Laxmi Bai Memorial School, Lucknow, Uttar Pradesh.',
    authorName: '2018-2019',
    authorPosition: '80%',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Lovely Professional University, Jalandhar, Punjab.',
    authorName: '2019-2023',
    authorPosition: '82.20%',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at aniket_singh_rathore@example.com',
  },
  {
    icon: <FiMapPin />,
    title:'Current Location',
    subtitle:'Lovely Professional University',
    description:'Happy to connect with you.',
  },
];
