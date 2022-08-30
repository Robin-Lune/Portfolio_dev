import React from "react";
import useMousePosition from "./useMousePosition";
const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  
  return (
    <div 
      style={{ 
        position: "fixed",
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: "none"
      }}
      className="cursor__circle"

    >
      <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: "translate(-50%, -50%)",
        }}
      >
        <circle
          cx="25"
          cy="25"
          r="8"
        />
      </svg>
    </div>
  );
};

export default Cursor;