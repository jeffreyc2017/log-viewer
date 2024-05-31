# info-display

## Description

info-display is a simple npm library that provides utilities for logging messages and displaying them in a customizable log viewer component for React applications.

## Installation

You can install info-display via npm:

```bash
npm install info-display
```

## Usage

### Displayer

The Displayer class allows you to log messages and subscribe to receive updates whenever a new message is logged.

```typescript
import InfoDisplay from "info-display";
import displayer from "./msgUtils";

// Log a message
displayer.log("Hello, world!");

const [messages, setMessages] = useState<string[]>([]);
// Subscribe to log updates
const msgCallback = (messages: string[]) => setMessages([...messages]);
displayer.subscribe(msgCallback);

// Unsubscribe from log updates
displayer.unsubscribe(msgCallback);
```

### InfoDisplay Component

The InfoDisplay component is a React component that displays messages in a scrollable view.

```typescript
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
```

### InfoDisplay Props

- `messages`: An array of strings representing the log messages to display.
- `position` (optional): CSS properties to customize the position of the log viewer.
- `size` (optional): CSS properties to customize the size of the log viewer.
- `style` (optional): Additional CSS styles to apply to the log viewer.

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests on [GitHub](https://github.com/yourusername/info-display).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
