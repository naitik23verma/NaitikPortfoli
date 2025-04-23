// import React from 'react';
// import Orb from './Orb';
// import Name from "./Name.jsx";
// import myimage from "./myimage.png"
// import BlurText from "./BlurText";
// import TypingEffect from "react-typing-effect"
// import ShinyText from './ShinyText';
// import "./Home.css"

// import HireMe from "./HireMe"
// // const data=[
// //   {
// //     label:'HireMe',
// //     to:'/HireMe'
// //   }
// // ]

// function Home() {
 
//   const handleHireMeClick = () => {
//     navigate("/HireMe");
//   };
//   const handleAnimationComplete = () => {
//     console.log('Animation completed!');
//   };
//   return (

//     <div id="home">


//       <div className="lefthome">

//         <div className="blur">
//           <BlurText style={{ width: '100%', height: '600px', position: 'relative' }}
//             text="Hello, It's Me"
//             delay={150}
//             animateBy="words"
//             direction="top"
//             onAnimationComplete={handleAnimationComplete}
//             className="text-5xl font-bold mb-8 text-white"
//           />
//         </div>

//         <div className="name">
//           <Name />
//         </div>
//         <div className="typing">
//           <TypingEffect
//             text={["WEB DEVELOPER", "INNOVATIVE", "PROGRAMMER"]}
//             speed={100}
//             eraseSpeed={100}
//             eraseDelay={500}
//             cursor='|'
//           />
//         </div>
//         {/* <button
//   className="shiny-button"
//   disabled={false}
// >
//   <ShinyText text="Just some shiny text!" speed={3} />
// </button> */}
//         {/* <button className="shiny-button" disabled={false}>
//           <span className="shiny-text-wrapper">
//             <ShinyText text="Just some shiny text!" speed={3} />
//           </span>
//         </button> */}
//         <button onClick={handleHireMeClick} className="shiny-button home" href="1.AnimatedPortfolio\src\components\Home\HireMe.jsx">
//   <span className="shiny-text">HIRE ME!</span>
// </button>





//       </div>
//       <div className="righthome">
//         <div className='orb' style={{ width: '100%', height: '600px', position: 'relative' }}>
//           <Orb
//             hoverIntensity={0.5}
//             rotateOnHover={true}
//             hue={0}
//             forceHoverState={false}
//           />
//           {/* <img src={myimage} className='image'></img> */}
//         </div>


//       </div>
//     </div>
//   )
// }

// export default Home

// import React, { useState } from 'react';
// import Orb from './Orb';
// import Name from "./Name.jsx";
// import myimage from "./myimage.png"
// import BlurText from "./BlurText";
// import TypingEffect from "react-typing-effect"
// import ShinyText from './ShinyText';
// import "./Home.css"


// function Home() {


 
//   const handleAnimationComplete = () => {
//     console.log('Animation completed!');
//   };

//   return (
//     <div id="home">
      
//         <div className="lefthome">
//           <div className="blur">
//             <BlurText style={{ width: '100%', height: '600px', position: 'relative' }}
//               text="Hello, It's Me"
//               delay={150}
//               animateBy="words"
//               direction="top"
//               onAnimationComplete={handleAnimationComplete}
//               className="text-5xl font-bold mb-8 text-white"
//             />
//           </div>

//           <div className="name">
//             <Name />
//           </div>
//           <div className="typing">
//             <TypingEffect
//               text={["WEB DEVELOPER", "INNOVATIVE", "PROGRAMMER"]}
//               speed={100}
//               eraseSpeed={100}
//               eraseDelay={500}
//               cursor='|'
//             />
//           </div>
//           <button className="shiny-button home">
//             <span className="shiny-text">HIRE ME!</span>
//           </button>
//         </div>
      

//       <div className="righthome">
//         <div className='orb' style={{ width: '100%', height: '600px', position: 'relative' }}>
//           <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React, { useState } from 'react';
import Orb from './Orb';
import Name from "./Name.jsx";
import myimage from "./myimage.png"
import BlurText from "./BlurText";
import TypingEffect from "react-typing-effect"
import ShinyText from './ShinyText';
import HireMe from './HireMe'; // Import the HireMe component
import "./Home.css"

function Home() {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div id="home">
      
      <div className="lefthome">
        <div className="blur">
          <BlurText style={{ width: '100%', height: '600px', position: 'relative' }}
            text="Hello, It's Me"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-5xl font-bold mb-8 text-white"
          />
        </div>

        <div className="name">
          <Name />
        </div>
        <div className="typing">
          <TypingEffect
            text={["WEB DEVELOPER", "INNOVATIVE", "PROGRAMMER"]}
            speed={100}
            eraseSpeed={100}
            eraseDelay={500}
            cursor='|'
          />
        </div>
        
        {/* Add the Hire Me button */}
        <HireMe isOpen={isHireMeOpen} setIsOpen={setIsHireMeOpen} />
      </div>

      <div className="righthome">
        <div className='orb' style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
        </div>
      </div>

      {/* Pass isHireMeOpen and setIsHireMeOpen to HireMe component */}
      
    </div>
  );
}

export default Home;
