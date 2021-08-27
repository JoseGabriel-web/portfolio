import { FC } from "react";
import {
  useHandleMouseOver,
  useHandleMouseLeave,
} from "@context/customCursor/CustomCursorProvider";

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
  const handleMouseOver = useHandleMouseOver();
  const handleMouseLeave = useHandleMouseLeave();
  return (
    <div
      className="marquee"
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
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
