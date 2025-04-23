import React, { useState, useEffect } from 'react';

const getGreeting = (hour) => {
  if (hour < 12) return "☀️ Good Morning!";
  if (hour < 18) return "🌤️ Good Afternoon!";
  return "🌙 Good Evening!";
};

const LiveGreeting = () => {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState(getGreeting(new Date().getHours()));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now);
      setGreeting(getGreeting(now.getHours()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center text-white p-4 rounded-xl bg-gradient-to-r from-blue-600/60 to-green-300/60 shadow-xl mb-4">
      <h2 className="text-2xl font-bold mb-1">{greeting}</h2>
      <p className="text-lg tracking-wide">{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default LiveGreeting;
