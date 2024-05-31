import React, { useEffect, useState } from "react";
import InfoDisplay from "./InfoDisplay";
import displayer from "./msgUtils";
import "./App.css";

const App: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const logCallback = (logs: string[]) => setMessages([...logs]);
    displayer.subscribe(logCallback);

    // Example logs
    displayer.log("Log message 1");
    displayer.log("Log message 2");
    displayer.log("Log message 3");

    return () => {
      displayer.unsubscribe(logCallback);
    };
  }, []);

  return (
    <div className="app">
      <h1>Info Display Example</h1>
      <InfoDisplay
        messages={messages}
        position={{ bottom: "10px", left: "10px", right: "20px" }} // Custom position
        size={{ width: "80%", height: "300px" }} // Custom size
        style={{
          // Custom styles
          backgroundColor: "#e0e0e0",
          fontFamily: "Courier New, monospace",
          fontSize: "14px",
          color: "#333",
        }}
      />
    </div>
  );
};

export default App;
