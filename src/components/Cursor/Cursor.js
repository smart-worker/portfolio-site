import { useContext } from "react";
import "./Cursor.scss";
import useMousePosition from "../../hooks/useMousePosition";
import { ThemeContext } from "../../context/ThemeContext";

const Cursor = () => {
  const { x, y } = useMousePosition();

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="cursor-img" style={{ left: `${x}px`, top: `${y}px` }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill={theme === "light" ? "#BE5103" : "#1d1402"}
            stroke="#FFD63A"
            stroke-width="1.75"
            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Cursor;
