// import { useEffect, useRef, useState } from "react";
// import { motion, useMotionValue, useAnimation, useSpring } from "framer-motion";
// import "./RollingGallery.css";
// import JS from "./javascript.jpg";
// import Git from "./github.jpg";
// import Html from "./html.jpg";
// import Css from "./css.jpg";
// import Node from "./nodejs.jpg";
// import C from "./C.jpeg";

// const IMGS = [JS, Git, Html, Css, Node, C];

// const RollingGallery = ({ autoplay = false, pauseOnHover = false }) => {
//   const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

//   const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
//   const faceCount = IMGS.length;
//   const faceWidth = (cylinderWidth / faceCount) * 1.5;
//   const dragFactor = 0.05;
//   const radius = cylinderWidth / (2 * Math.PI);

//   const baseRotation = useMotionValue(0);
//   const rotation = useSpring(baseRotation, {
//     stiffness: 40,
//     damping: 12,
//     mass: 0.3,
//   });

//   const controls = useAnimation();
//   const autoplayRef = useRef();

//   const handleDrag = (_, info) => {
//     baseRotation.set(baseRotation.get() + info.offset.x * dragFactor);
//   };

//   const handleDragEnd = (_, info) => {
//     controls.start({
//       rotateY: baseRotation.get() + info.velocity.x * dragFactor,
//       transition: { type: "spring", stiffness: 60, damping: 20, mass: 0.1, ease: "easeOut" },
//     });
//     baseRotation.set(baseRotation.get() + info.velocity.x * dragFactor);
//   };

//   useEffect(() => {
//     if (autoplay) {
//       autoplayRef.current = setInterval(() => {
//         controls.start({
//           rotateY: baseRotation.get() - (360 / faceCount),
//           transition: { duration: 2, ease: "linear" },
//         });
//         baseRotation.set(baseRotation.get() - (360 / faceCount));
//       }, 2000);

//       return () => clearInterval(autoplayRef.current);
//     }
//   }, [autoplay, baseRotation, controls, faceCount]);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsScreenSizeSm(window.innerWidth <= 640);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMouseEnter = () => {
//     if (autoplay && pauseOnHover) {
//       clearInterval(autoplayRef.current);
//       controls.stop();
//     }
//   };

//   const handleMouseLeave = () => {
//     if (autoplay && pauseOnHover) {
//       controls.start({
//         rotateY: baseRotation.get() - (360 / faceCount),
//         transition: { duration: 2, ease: "linear" },
//       });
//       baseRotation.set(baseRotation.get() - (360 / faceCount));

//       autoplayRef.current = setInterval(() => {
//         controls.start({
//           rotateY: baseRotation.get() - (360 / faceCount),
//           transition: { duration: 2, ease: "linear" },
//         });
//         baseRotation.set(baseRotation.get() - (360 / faceCount));
//       }, 2000);
//     }
//   };

//   return (
//     <div className="gallery-container">
//       <div className="gallery-gradient gallery-gradient-left"></div>
//       <div className="gallery-gradient gallery-gradient-right"></div>
//       <div className="gallery-content">
//         <motion.div
//           drag="x"
//           className="gallery-track"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           style={{
//             rotateY: rotation,
//             width: cylinderWidth,
//             transformStyle: "preserve-3d",
//           }}
//           onDrag={handleDrag}
//           onDragEnd={handleDragEnd}
//           animate={controls}
//         >
//           {IMGS.map((url, i) => (
//             <div
//               key={i}
//               className="gallery-item"
//               style={{
//                 width: `${faceWidth}px`,
//                 transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
//               }}
//             >
//               <img src={url} alt="gallery" className="gallery-img" />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default RollingGallery;
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useSpring } from "framer-motion";
import "./RollingGallery.css";
import JS from "./javascript.jpg";
import Git from "./github.jpg";
import Html from "./html.jpg";
import Css from "./css.jpg";
import Node from "./nodejs.jpg";
import C from "./C.jpeg";

const IMGS = [JS, Git, Html, Css, Node, C];


const RollingGallery = ({ autoplay = true, pauseOnHover = true }) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = IMGS.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.2;
  const radius = cylinderWidth / (2 * Math.PI);

  const baseRotation = useMotionValue(0);
  const rotation = useSpring(baseRotation, {
    stiffness: 30,
    damping: 10,
    mass: 0.3,
  });

  const autoplayRef = useRef();

  // Auto-rotation logic
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        baseRotation.set(baseRotation.get() - (360 / faceCount));
      }, 600);

      return () => clearInterval(autoplayRef.current);
    }
  }, [autoplay, baseRotation, faceCount]);

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hover to pause
  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      clearInterval(autoplayRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      autoplayRef.current = setInterval(() => {
        baseRotation.set(baseRotation.get() - (360 / faceCount));
      }, 2500);
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <motion.div
          className="gallery-track"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
        >
          {IMGS.map((url, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
            >
              <img src={url} alt={`Skill ${i}`} className="gallery-img" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
