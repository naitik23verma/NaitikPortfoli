import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../../firebase"; // Ensure the Firebase config is imported here

const db = getDatabase(app);

const VisitorGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const visitRef = ref(db, "visits");
    onValue(visitRef, (snapshot) => {
      const visits = snapshot.val() || {};
      const formattedData = [
        { day: "Sun", count: visits["Sun"] || 0 },
        { day: "Mon", count: visits["Mon"] || 0 },
        { day: "Tue", count: visits["Tue"] || 0 },
        { day: "Wed", count: visits["Wed"] || 0 },
        { day: "Thu", count: visits["Thu"] || 0 },
        { day: "Fri", count: visits["Fri"] || 0 },
        { day: "Sat", count: visits["Sat"] || 0 },
      ];
      setData(formattedData);
    });
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(to right, rgba(0, 4, 255, 0.526), rgba(158, 253, 190, 0.658))",
        padding: "2rem",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <h2 style={{ color: "white", marginBottom: "1rem", fontWeight: "bold", fontSize: "1.5rem" }}>
        Weekly Visitors
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip contentStyle={{ backgroundColor: "#333" }} itemStyle={{ color: "#fff" }} />
          <Line type="monotone" dataKey="count" stroke="#fff" strokeWidth={3} dot={{ fill: "#fff" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorGraph;
