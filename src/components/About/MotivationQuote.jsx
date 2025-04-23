import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Push yourself, because no one else is going to do it for you.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t stop when you’re tired. Stop when you’re done."
];

export default function MotivationQuote() {
  const [quote, setQuote] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
    setShow(false);
    setTimeout(() => setShow(true), 100); // trigger animation
  };

  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 p-6">
      <button
        onClick={handleClick}
        className="px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-[rgba(0,4,255,0.526)] to-[rgba(158,253,190,0.658)] shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-md"
      >
        ✨ Need Motivation?
      </button>

      <AnimatePresence>
        {show && (
          <motion.div
            key={quote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl text-lg text-white bg-gradient-to-r from-[rgba(0,4,255,0.2)] to-[rgba(158,253,190,0.2)] p-4 rounded-xl shadow-md backdrop-blur-sm"
          >
            <q>{quote}</q>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
