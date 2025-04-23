import PixelCard from './PixelCard';
import { FaLaptopCode, FaBolt, FaGamepad, FaMoon, FaGraduationCap } from "react-icons/fa";

const cards = [
  {
    title: "Night Owl Dev 🦉",
    icon: <FaMoon size={40} />,
    text: "I code best at 2AM with a cup of chai & lofi beats.",
    variant: "pink"
  },
  {
    title: "Coder @ NIT Bhopal",
    icon: <FaGraduationCap size={40} />,
    text: "Pursuing BTech in CSE from MANIT. Learning MERN Stack.",
    variant: "blue"
  },
  {
    title: "Builder",
    icon: <FaLaptopCode size={40} />,
    text: "Built a YouTube Clone, Snake Game, and more!",
    variant: "yellow"
  },
  {
    title: "Gamer",
    icon: <FaGamepad size={40} />,
    text: "Tic Tac Toe Champion 😎",
    variant: "default"
  },
  {
    title: "Fast Learner ⚡",
    icon: <FaBolt size={40} />,
    text: "I pick up new tech like lightning ⚡",
    variant: "pink"
  }
];

export default function AboutMeCards() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-10 bg-zinc-900 rounded-xl">
      {cards.map((card, index) => (
        <PixelCard key={index} variant={card.variant}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white space-y-4">
            {card.icon}
            <h2 className="text-lg font-bold">{card.title}</h2>
            <p className="text-sm opacity-80">{card.text}</p>
          </div>
        </PixelCard>
      ))}
    </div>
  );
}
