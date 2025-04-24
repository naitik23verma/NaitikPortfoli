import React from "react";
import "./SkillsRadar.css"
import GradientCountUp from './GradientCountUp'
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip,
} from "recharts";
import { ResponsiveContainer } from "recharts"; // make sure this is imported
const data = [
    { subject: "HTML", A: 100 },
    { subject: "CSS", A: 94 },
    { subject: "JavaScript", A: 92 },
    { subject: "Node.js", A: 80 },
    { subject: "React.js", A: 97 },
    { subject: "TailwindCSS", A: 85 },
    { subject: "SQL", A: 50 },
    { subject: "MongoDB", A: 75 },
];

const SkillsRadar = () => {
    return (
        <div className="Skills">
            <div className="leftSkill">
                <div><GradientCountUp /></div>
                <div className="map-container" style={{ marginTop: '7rem', borderRadius: '1rem', overflow: 'hidden' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.143826946515!2d77.40370917526691!3d22.60378013372271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c427ab32a48b1%3A0x82e46592c144aa7c!2sMANIT%20Bhopal!5e0!3m2!1sen!2sin!4v1682526917427!5m2!1sen!2sin"
                        width="70%"
                        height="300"

                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="rightSkill">
                <div className="SkillsRadar">
                    <div style={{
                        background: "linear-gradient(135deg, rgba(0,4,255,0.526), rgba(158,253,190,0.658))",
                        borderRadius: "20px",
                        padding: "40px",
                        maxWidth: "700px",
                        margin: "50px auto",
                        boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                        maxHeight: "80vh",
                        color: "#fff"
                    }}>
                        <h2 style={{
                            textAlign: "center",
                            marginBottom: "30px",
                            fontSize: "2rem",
                            fontWeight: "bold",
                            letterSpacing: "1px"
                        }}>
                            My Skills Radar
                        </h2>
                        <ResponsiveContainer width="100%"  aspect={1}>
                            <RadarChart outerRadius="75%" data={data}>
                                <PolarGrid stroke="#ffffff33" />
                                <PolarAngleAxis dataKey="subject" stroke="#fff" />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#ddd" />
                                <Radar
                                    name="Skill"
                                    dataKey="A"
                                    stroke="#00fff2"
                                    fill="#00fff2"
                                    fillOpacity={0.6}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#111", border: "none", color: "#00fff2" }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsRadar;
