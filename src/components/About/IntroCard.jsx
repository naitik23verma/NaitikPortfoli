import PixelCard from './PixelCard';
import { FaUserTie } from 'react-icons/fa';

export default function IntroCard() {
  return (
    <PixelCard variant="pink" className="text-white font-sans">
      <div className="flex flex-col items-center justify-center gap-3 absolute p-4">
        <FaUserTie className="text-4xl text-white drop-shadow-md" />
        <h2 className="text-xl font-semibold tracking-wide">Hi, I'm Naitik Verma</h2>
        <p className="text-sm text-center text-gray-200">
          B.Tech CSE @ NIT Bhopal<br />
          Full-Stack Developer (MERN)
        </p>
        <button className="mt-2 px-4 py-1 bg-white text-pink-600 font-bold rounded-md hover:bg-pink-100 transition-all duration-200">
          View Resume
        </button>
      </div>
    </PixelCard>
  );
}
