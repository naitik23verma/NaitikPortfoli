
import CountUp from "./CountUp";
import React from "react";

import "./GradientCountUp.css";


const GradientCountUp = () => {
    const totalProjects = 10; // ✅ Make sure it's a number

    return (
        <div className="countup-container">
            <span className="gradient-text">
                <CountUp
                    from={0}
                    to={10}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    end={totalProjects} suffix="+" />
            </span>
            <p className="description-text">Projects Completed</p>
        </div>
    );
};

export default GradientCountUp;
