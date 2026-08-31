export const likes = [
  "Lebron James",
  "Batman",
  "Cards",
  "The Nice Guys",
  "Gym",
  "Russel Westbrook",
  "Steak",
  "Lamar Jackson",
  "Play Station",
  "Jayden Daniels",
  "Sushi",
  "Bed",
  "Better Call Saul",
];

export const skills = [
  "Java",
  "Python",
  "C",
  "Bash",
  "Javascript",
  "html",
  "CSS",
  "React",
  "Git",
  "Linux",
  "Agile",
  "Figma",
  "Jira",
];

// stock images
/*
  https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg 
  https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFraW5nJTIwcGhvdG98ZW58MHx8MHx8fDA%3D
  https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631.jpg
*/
export const projects = [
    { 
      path: "projects/Honeypot.png", title: "Honeypot Project", description: "Engineered Linux containers simulating academic institutions to study attack behavior under distinct welcome banner messages, analyzing over 9,000 attacks to uncover patterns in attacker behavior.", languages: "Bash Scripting, Python, Git", link: "", 
    },
    { 
      path: "projects/BrowserBuddy.png", title: "Browser Buddy Extension", description: "Created a virtual wellness pet browser extension in under 24 hours at Bitcamp Hackathon. The extension implements a pomodoro timer to help users take active breaks and gamify working sessions with XP and shop tokens for the customizable pet.", languages: "React, TypeScript, Git, CSS", link: "", 
    },
    { 
      path: "projects/Maze.png", title: "Maze Solver", description: "Converted large-scale mazes into graphs, mapping all nodes to an x-y coordinate system. Found the optimal solution 100% of the time using Dijkstra's algorithm, breadth-first and depth-first searches.", languages: "Java", link: "", 
    },  
    { 
      path: "projects/TouchGrass.png", title: "Touching Grass App", description: "Developed the foundational components of a social media app in 36 hours during the Bitcamp Hackathon. While the app was in its early stages, it allowed users to take photos of environmental destruction, earn points and track progress, inspired by Instagram and Pokemon Go.", languages: "React Native, JavaScript, CSS, Git", link: "", 
    },
    { 
      path: "projects/Soccer.png", title: "Dynamic Soccer Ball", description: "Prototyped an app for a dynamic soccer ball that tracks training sessions and statistics, allowing users to compare with friends. Went through the product management lifecycle, from conceptualizing to MVP creation, financial planning, and prototyping.", languages: "Figma", link: "https://www.figma.com/proto/riuULK8sholAHFUfmXm2FR/Dynamic-Soccer-Ball-App?node-id=2-2&p=f&t=9Dyg8KCzjmHoqDVz-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",
    },
];

export const technologies = [
  {
    name: "Java",
    icon: "java",
    category: "Languages"
  },
  {
    name: "Python",
    icon: "python",
    category: "Languages"
  },
  {
    name: "C/C#/C++",
    icon: "CCC",
    category: "Languages"
  },
  {
    name: "JavaScript",
    icon: "javascript",
    category: "Languages"
  },
  {
    name: "TypeScript",
    icon: "typescript",
    category: "Languages"
  },
  {
    name: "HTML/CSS",
    icon: "htmlcss",
    category: "Languages"
  },
  {
    name: "Bash Shell",
    icon: "bash",
    category: "Languages"
  },
  {
    name: "SQL",
    icon: "sql",
    category: "Languages"
  },

  {
    name: "React.js",
    icon: "react",
    category: "Frameworks"
  },
  {
    name: "Node.js",
    icon: "node",
    category: "Frameworks"
  },
  {
    name: ".NET",
    icon: "net",
    category: "Frameworks"
  },
  {
    name: "Flask",
    icon: "flask",
    category: "Frameworks"
  },
  {
    name: "Git",
    icon: "git",
    category: "Dev Tools"
  },
  {
    name: "Linux",
    icon: "linux",
    category: "Dev Tools"
  },
  {
    name: "Docker",
    icon: "docker",
    category: "Dev Tools"
  },
  {
    name: "Matlab",
    icon: "matlab",
    category: "Dev Tools"
  },

];

export const experiences = [
  {
    company: "Leidos",
    role: "Software Engineering Intern",
    date: "May 2025 - Aug 2025",
    location: "Edgewood, MD",
    description: "Developed end-to-end facial comparison service in C#/.NET with rigorous unit testing. Boosted accuracy by 30%, eliminated a third-party dependency, saved $10,000s, and delivered project 25% ahead of schedule.",
    logo: "./experiences/leidos.jpg",
    zoom: 1.5, 
  },
  {
    company: "DSH",
    role: "Software Engineering Intern",
    date: "May 2025 - Present",
    location: "Remote",
    description: "Assisting production of an AI-powered job application platform, generating tailored resumes and cover letters for specific roles. Creating features with Python, Flask and React working directly with the CEO.",
    logo: "./experiences/dalex.jpg",
    link: "https://www.linkedin.com/company/dalex-softworks-holdings/",
    zoom: 1.0, 
  },
  {
    company: "NGC",
    role: "Software Engineering Intern",
    date: "May 2024 - Aug 2025",
    location: "Linthicum, MD",
    description: "Led website development by coordinating meetings, communicating with stakeholders and delegating tasks; boosting awareness of services for 100s. Created app to simplify 20+ steps, cutting approval pipeline times 50%.",
    logo: "./experiences/northrop.png",
    zoom: 0.8,
  },
  {
    company: "Breakerspace",
    role: "Cybersecurity Research Assistant",
    date: "Jan 2025 - Present",
    location: "UMD",
    description: "Building fraud prevention tools to protect older adults from online scams. Prototyping a browser extension for real-time URL verification and produced a web scraper in Python to analyze 25,000 accounts identifying suspicious features.",
    logo: "./experiences/breakerspace.png",
    link: "https://breakerspace.cs.umd.edu/",
    zoom: 1.5, 
  },
  {
    company: "US News App Dev",
    role: "Full Stack Engineer",
    date: "Sep 2024 - May 2025",
    location: "UMD",
    description: "Assembled a data verification tool to optimize US News's content validation process. Automated Jupyter Notebook generation, implemented dynamic data page features and enhanced frontend design improving overall UI/UX.",   
    logo: "./experiences/usnews.png",
    zoom: 2, 
  },
];

