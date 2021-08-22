import { FC } from "react";

interface marqueeProps {
  title: string;
  isPlaying: boolean;
}

const Marquee: FC<marqueeProps> = ({ isPlaying }) => {
  const title = "jose gabriel mercedes geronimo";
  return (
    <div className="marquee">
      <div className={`marquee_text_wrapper ${isPlaying && "playing"}`}>
        <span>{title}&nbsp;&nbsp;&nbsp;</span>
        <span>{title}&nbsp;&nbsp;&nbsp;</span>
        <span>{title}&nbsp;&nbsp;&nbsp;</span>
        <span>{title}&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>
  );
};

export default Marquee;