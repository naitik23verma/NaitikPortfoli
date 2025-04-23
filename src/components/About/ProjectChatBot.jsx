import React, { useState, useRef, useEffect } from "react";
import "./ProjectChatBot.css";

const responses = [
  { keywords: ["hello", "hi"], answer: "Hey there! 👋 I'm Naitik." },
  { keywords: ["tech", "stack"], answer: "I'm built using React, Node.js, Express, and MongoDB!" },
  { keywords: ["snake"], answer: "The Snake Game is made using canvas and pure JavaScript." },
  { keywords: ["tic", "toe"], answer: "Tic Tac Toe is built in React with win detection logic." },
  { keywords: ["currency", "convert"], answer: "The Currency Converter uses real-time exchange rates via API." },
  { keywords: ["github"], answer: "You can check the GitHub link on the project card!" },
  { keywords: ["live", "site"], answer: "The live project link is also on the card for you to try!" },
];

const getResponse = (input) => {
  const msg = input.toLowerCase();
  for (let r of responses) {
    if (r.keywords.some(k => msg.includes(k))) return r.answer;
  }
  return "Hmm... I didn't get that. Ask me about Snake Game, Tic Tac Toe, or Currency Converter.";
};

const ProjectChatBot = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([
    { from: "bot", text: "Hey! I'm Naitik. Ask me about my projects 🎮" },
  ]);

  const dragRef = useRef(null);
  const [pos, setPos] = useState({ x: 20, y: 80 });

  const handleSend = () => {
    if (!input.trim()) return;
    const reply = getResponse(input);
    setChat([...chat, { from: "user", text: input }, { from: "bot", text: reply }]);
    setInput("");
  };

  // Dragging Logic
  useEffect(() => {
    const el = dragRef.current;
    let isDragging = false, offset = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      if (document.activeElement) document.activeElement.blur(); // 👈 this line blurs any focused element
      isDragging = true;
      offset = {
        x: e.clientX - el.getBoundingClientRect().left,
        y: e.clientY - el.getBoundingClientRect().top
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };
    

    const onMouseMove = (e) => {
      if (!isDragging) return;
      setPos({
        x: window.innerWidth - e.clientX < 300 ? window.innerWidth - 320 : e.clientX - offset.x,
        y: e.clientY - offset.y
      });
    };

    const onMouseUp = () => {
      isDragging = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    el.addEventListener("mousedown", onMouseDown);
    return () => el.removeEventListener("mousedown", onMouseDown);
  }, []);

  return (
    <div
      className="chatbot-wrapper"
      ref={dragRef}
      style={{ bottom: pos.y, right: pos.x }}
    >
      <div className="chatbot-header">
        <span>🤖 Naitik</span>
        <button onClick={onClose}>×</button>
      </div>
      <div className="chatbot-body">
        {chat.map((c, i) => (
          <div key={i} className={`msg ${c.from}`}>{c.text}</div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ProjectChatBot;
