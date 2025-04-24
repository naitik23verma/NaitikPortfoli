// import Nav from "./components/Nav/Nav"
// import About from "./components/About/About"
// import Home from "./components/Home/Home"
// import "./App.css"

// import Loader from "./components/Loader.jsx"; // or the correct path to your Loader.jsx

// import Projects from "./components/Projects/Projects"
// import Contact from "./components/Contact/Contact"
// import Footer from "./components/Footer/Footer"
// import React, { useState, useEffect } from "react";


// // function App() {
// //   const [loading, setLoading] = useState(true);
// //   useEffect(() => {
// //     fetch("https://visitor-tracker-93mc.onrender.com", {
// //       method: "POST",
// //     });
// //   }, []);
  
// //   useEffect(() => {
// //     const timer = setTimeout(() => setLoading(false), 2000);
// //     return () => clearTimeout(timer);
// //   const [loading, setLoading] = useState(true);})

// //   useEffect(() => {
// //     const timer = setTimeout(() => setLoading(false), 2000);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   if (loading) return <Loader />;
// //   return (
// //     <>
      
// //       <Nav></Nav>
      
// //       <Home/>
// //       <About/>
// //       <Projects/>
// //       <Contact/>
// //       <Footer/>
// //     </>
// //   )
// // }

// // export default App
// const API_BASE =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:5000"
//     : "https://visitor-tracker-93mc.onrender.com";

// function App() {
//   const [loading, setLoading] = useState(true);

//   // 1️⃣ Track the visit on mount
//   useEffect(() => {
//     fetch(`${API_BASE}/api/visit`, {
//       method: "POST",
//     }).catch((err) => console.error("Visit tracking failed:", err));
//   }, []);

//   // 2️⃣ Simple 2s loader
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   // 3️⃣ Show loader while loading
//   if (loading) {
//     return <Loader />;
//   }

//   // 4️⃣ Render app once loaded
//   return (
//     <>
//       <Nav />
//       <Home />
//       <About />
//       <Projects />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;
// import React, { useState, useEffect } from "react";
// import Nav from "./components/Nav/Nav";
// import About from "./components/About/About";
// import Home from "./components/Home/Home";
// import "./App.css";
// import Loader from "./components/Loader.jsx"; // or the correct path to your Loader.jsx
// import Projects from "./components/Projects/Projects";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";

// const API_BASE =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:5000"
//     : "https://visitor-tracker-93mc.onrender.com";

// function App() {
//   const [loading, setLoading] = useState(true);

//   // 1️⃣ Track the visit on mount
//   useEffect(() => {
//     fetch(`${API_BASE}/api/visit`, {
//       method: "POST",
//     }).catch((err) => console.error("Visit tracking failed:", err));
//   }, []);

//   // 2️⃣ Simple 2s loader
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   // 3️⃣ Show loader while loading
//   if (loading) {
//     return <Loader />;
//   }

//   // 4️⃣ Render app once loaded
//   return (
//     <>
//       <Nav />
//       <Home />
//       <About />
//       <Projects />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;
// src/App.jsx
import SkillsRadar from "./components/Skills/SkillsRadar";
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Loader from "./components/Loader";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);
  if (loading) return <Loader />;
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <SkillsRadar />
      <Footer />

    </>
  );
}

export default App;
