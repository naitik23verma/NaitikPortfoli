import React, { useEffect, useState } from "react";
import RollingGallery from './RollingGallery';
import VisitorGraph from "./VisitorGraph";
import trackVisitor from "../../VisitorTracker.js"; // Import trackVisitor function
import "./About.css"
function About() {
  const [showChat, setShowChat] = useState(false);

  // Toggle chat visibility
  const handleChatToggle = () => setShowChat(prev => !prev);

  // Track visitors when component mounts
  useEffect(() => {
    trackVisitor(); // Call the function to track visitors
  }, []);

  return (
    <div className="full">
      <div id="about">
        <div className="leftabout">
          <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
          </div>
          <div className="aboutdetails">
            <div className="personalinfo">
              <h1>Personal Info</h1>
              <ul>
                <li><span>NAME </span>: NAITIK VERMA</li>
                <li><span>AGE </span>: 18 YEARS</li>
                <li><span>GENDER </span>: MALE</li>
                <li><span>LANGUAGE KNOWN </span>: HINDI, ENGLISH</li>
              </ul>
            </div>
            <div className="education">
              <h1>Education</h1>
              <ul>
                <li><span>DEGREE </span>: B-TECH</li>
                <li><span>BRANCH </span>: COMPUTER SCIENCE & ENGINEERING</li>
                <li><span>CGPA </span>: 9.5</li>
              </ul>
            </div>
            <div className="skills">
              <h1>SKILLS</h1>
              <ul>
                <li>MERN STACK WEB DEVELOPMENT</li>
                <li>C PROGRAMMING</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rightabout">
          <RollingGallery autoplay={true} pauseOnHover={true} className="rolling" />
        </div>
      </div>

      <div className="second">
        <div className="visitors">
          <VisitorGraph />
        </div>

        <button
          onClick={handleChatToggle}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "rgba(0, 4, 255, 0.8)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          {showChat ? "Close Chat" : "Chat with Project"}
        </button>

        {/* Show Project ChatBot only when 'showChat' is true */}
        {showChat && (
          <ProjectChatBot
            name="Naitik"
            techStack={["React", "Node.js", "Express", "MongoDB"]}
            github="https://github.com/your-repo"
            live="https://your-live-site.com"
            projectLink="https://your-live-site.com"
            description="I'm a Netflix clone project using MERN stack!"
            avatar="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
            onClose={() => setShowChat(false)}
          />
        )}
      </div>
    </div>
  );
}

export default About;
