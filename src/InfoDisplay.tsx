import React, { useEffect, useRef, CSSProperties } from "react";
import "./InfoDisplay.css";

interface InfoDisplayProps {
  messages: string[];
  position?: CSSProperties; // Customizable position
  size?: CSSProperties; // Customizable size
  style?: CSSProperties; // Customizable styles
}

const InfoDisplay: React.FC<InfoDisplayProps> = ({
  messages,
  position,
  size,
  style,
}) => {
  const InfoDisplayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (InfoDisplayRef.current) {
      InfoDisplayRef.current.scrollTop = InfoDisplayRef.current.scrollHeight;
    }
  }, [messages]);

  const customizeStyle: CSSProperties = {
    ...position,
    ...size,
    ...style,
  };

  return (
    <div className="info-display" ref={InfoDisplayRef} style={customizeStyle}>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
};

export default InfoDisplay;
