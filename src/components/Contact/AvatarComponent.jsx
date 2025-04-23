import Lottie from "lottie-react";
import avatarAnimation from "./Animation - 1744837740170 (1).json";  // Replace with your file path
import "./AvatarComponent.css"
export default function AvatarComponent() {
  return (
    <div className="avatar-container">
      <Lottie animationData={avatarAnimation} loop={true} />
    </div>
  );
}
