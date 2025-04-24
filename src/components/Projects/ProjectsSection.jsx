// import React from "react";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import { motion } from "framer-motion";
// import "./ProjectsSection.css";

// const projects = [
//   {
//     name: "NRK Associates Website 🌐",
//     description:
//       "My first Freelancing work built with HTML,CSS,JS.",
//     tech: ["HTML","CSS","JS"],
//     live: "https://nrk-associates.vercel.app/index.html",
//     github: "https://github.com/yourusername/portfolio",
//     image: "/projects/portfolio.png",
//   },
//   {
//     name: "Tic Tac Toe 🎮",
//     description: "Simple 2-player Tic Tac Toe game using React and custom hooks.",
//     tech: ["React", "CSS"],
//     live: "https://tic-tac-toe-bay-five-35.vercel.app",
//     github: "https://github.com/yourusername/tic-tac-toe",
//     image: "/projects/tictactoe.gif",
//   },
//   {
//     name: "Currency Converter 💱",
//     description:
//       "Real-time currency converter using APIs to fetch live exchange rates.",
//     tech: ["React", "REST API"],
//     live: "https://currency-convert-sooty.vercel.app",
//     github: "https://github.com/yourusername/currency-converter",
//     image: "/projects/currency.png",
//   },
//   {
//     name: "Snake Game 🐍",
//     description: "A nostalgic snake game built with HTML, CSS, and JavaScript.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     live: "https://snake-game-iota-six.vercel.app",
//     github: "https://github.com/yourusername/snake",
//     image: "/projects/snake.gif",
//   },
// ];

// const ProjectCard = ({ project }) => (
//   <div className="project-card">
    
//     <div className="project-content">
//       <h3 className="project-title">{project.name}</h3>
//       <p className="project-desc">{project.description}</p>
//       <div className="project-tech">
//         {project.tech.map((tech, idx) => (
//           <span key={idx} className="tech-tag">
//             {tech}
//           </span>
//         ))}
//       </div>
//       <div className="project-links">
//         <a href={project.live} target="_blank" rel="noopener noreferrer" className="live-btn">
//           Live <FaExternalLinkAlt size={12} />
//         </a>
//         <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
//           GitHub <FaGithub size={14} />
//         </a>
//       </div>
//     </div>
//     <div className="project-glow" />
//   </div>
// );

// const ProjectsSection = () => {
//   return (
//     <section id="projects" className="projects-section">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="section-title"
//       >
//         🚀 My Projects
//       </motion.h2>
//       <div className="project-grid">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <ProjectCard project={project} />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
// import React, { useState } from "react";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
// import "./ProjectsSection.css";

// const projects = [
//   {
//     name: "NRK Associates Website 🌐",
//    description:
// "My first Freelancing work built with HTML,CSS,JS.",
//    tech: ["HTML","CSS","JS"],
//     live: "https://nrk-associates.vercel.app/index.html",
//     github: "https://github.com/yourusername/portfolio",
//     image: "/projects/portfolio.png",
//     codeSnippet: `const Portfolio = () => <div>Welcome to my Portfolio</div>;`,
//   },
//   {
//     name: "Tic Tac Toe 🎮",
//     description: "Simple 2-player Tic Tac Toe game using React and custom hooks.",
//     tech: ["React", "CSS"],
//     live: "https://tic-tac-toe-bay-five-35.vercel.app",
//     github: "https://github.com/yourusername/tic-tac-toe",
//     image: "/projects/tictactoe.gif",
//     codeSnippet: `const checkWinner = (board) => {/* winner logic */};`,
//   },
//   {
//     name: "Currency Converter 💱",
//     description:
//       "Real-time currency converter using APIs to fetch live exchange rates.",
//     tech: ["React", "REST API"],
//     live: "https://currency-convert-sooty.vercel.app",
//     github: "https://github.com/yourusername/currency-converter",
//     image: "/projects/currency.png",
//     codeSnippet: `fetch('https://api.exchangerate-api.com')`,
//   },
//   {
//     name: "Snake Game 🐍",
//     description: "A nostalgic snake game built with HTML, CSS, and JavaScript.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     live: "https://snake-game-iota-six.vercel.app",
//     github: "https://github.com/yourusername/snake",
//     image: "/projects/snake.gif",
//     codeSnippet: `let snake = [{x: 10, y: 10}];`,
//   },
// ];

// const ProjectCard = ({ project }) => {
//   const [showCode, setShowCode] = useState(false);

//   return (
//     <div
//       className="project-card"
//       onMouseEnter={() => document.body.classList.add("cursor-zoom")}
//       onMouseLeave={() => document.body.classList.remove("cursor-zoom")}
//     >
      
//       <div className="project-content">
//         <h3 className="project-title">{project.name}</h3>
//         <p className="project-desc">{project.description}</p>
//         <div className="project-tech">
//           {project.tech.map((tech, idx) => (
//             <span key={idx} className="tech-tag">
//               {tech}
//             </span>
//           ))}
//         </div>
//         <div className="project-links">
//           <a href={project.live} target="_blank" rel="noopener noreferrer" className="live-btn">
//             Live <FaExternalLinkAlt size={12} />
//           </a>
//           <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
//             GitHub <FaGithub size={14} />
//           </a>
//         </div>
//         <button
//           className="toggle-code-btn"
//           onClick={() => setShowCode(!showCode)}
//         >
//           {showCode ? "Hide Code" : "Show Code Snippet"}
//         </button>
//         {showCode && (
//           <SyntaxHighlighter language="javascript" style={darcula} className="code-block">
//             {project.codeSnippet}
//           </SyntaxHighlighter>
//         )}
//       </div>
//       <div className="project-glow" />
//     </div>
//   );
// };

// const ProjectsSection = () => {
//   return (
//     <section id="projects" className="projects-section">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="section-title"
//       >
//         🚀 My Projects
//       </motion.h2>
//       <div className="project-grid">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <ProjectCard project={project} />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./ProjectsSection.css";

const projects = [
  {
    name: "NRK Associates Website 🌐",
 description:
 "My first Freelancing work built with HTML,CSS,JS.",
    tech: ["HTML","CSS","JS"],
    live: "https://nrk-associates.vercel.app/index.html",
    github: "https://github.com/yourusername/portfolio",
    image: "/projects/portfolio.png",
    codeSnippet: `const Portfolio = () => <div>Welcome to my Portfolio</div>;`,
  },
  {
    name: "Tic Tac Toe 🎮",
    description: "Simple 2-player Tic Tac Toe game using React and custom hooks.",
    tech: ["React", "CSS"],
    live: "https://tic-tac-toe-bay-five-35.vercel.app",
    github: "https://github.com/yourusername/tic-tac-toe",
    image: "/projects/tictactoe.gif",
    codeSnippet: `const checkWinner = (board) => {/* winner logic */};`,
  },
  {
    name: "Currency Converter 💱",
    description:
      "Real-time currency converter using APIs to fetch live exchange rates.",
    tech: ["React", "REST API"],
    live: "https://currency-convert-sooty.vercel.app",
    github: "https://github.com/yourusername/currency-converter",
    image: "/projects/currency.png",
    codeSnippet: `fetch('https://api.exchangerate-api.com')`,
  },
  {
    name: "Snake Game 🐍",
    description: "A nostalgic snake game built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://snake-game-iota-six.vercel.app",
    github: "https://github.com/yourusername/snake",
    image: "/projects/snake.gif",
    codeSnippet: `let snake = [{x: 10, y: 10}];`,
  },
];

const ProjectCard = ({ project }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => document.body.classList.add("cursor-zoom")}
      onMouseLeave={() => document.body.classList.remove("cursor-zoom")}
    >
      
      <div className="project-content">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="live-btn">
            Live <FaExternalLinkAlt size={12} />
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
            GitHub <FaGithub size={14} />
          </a>
        </div>
        
        {showCode && (
          <div className="code-wrapper">
            <SyntaxHighlighter language="javascript" style={darcula} className="code-block">
              {project.codeSnippet}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
      <div className="project-glow" />
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        🚀 My Projects
      </motion.h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
