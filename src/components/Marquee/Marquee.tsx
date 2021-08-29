import { FC } from "react";

interface marqueeProps {
  title: string;
  isPlaying: boolean;
  duration: number;
  direction: "normal" | "reverse";
  handleClick?: () => void;
}

const Marquee: FC<marqueeProps> = ({
  title,
  isPlaying,
  duration,
  direction,
  handleClick,
}) => {
  return (
    <div
      className="marquee check-hover"
      onClick={handleClick}
    >
      <div
        className={`marquee_text_wrapper ${isPlaying && "playing"}`}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction,
        }}
      >
        <span>{title}&nbsp;&nbsp;&nbsp;</span>
        <span>{title}&nbsp;&nbsp;&nbsp;</span>
        <span>{title}&nbsp;&nbsp;&nbsp;</span>
        <span>{title}&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>
  );
};

export default Marquee;
