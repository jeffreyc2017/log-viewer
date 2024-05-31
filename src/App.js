"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const InfoDisplay_1 = __importDefault(require("./InfoDisplay"));
const msgUtils_1 = __importDefault(require("./msgUtils"));
require("./App.css");
const App = () => {
    const [messages, setMessages] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const logCallback = (logs) => setMessages([...logs]);
        msgUtils_1.default.subscribe(logCallback);
        // Example logs
        msgUtils_1.default.add("message 1");
        msgUtils_1.default.add("message 2");
        msgUtils_1.default.add("message 3");
        return () => {
            msgUtils_1.default.unsubscribe(logCallback);
        };
    }, []);
    return (react_1.default.createElement("div", { className: "app" },
        react_1.default.createElement("h1", null, "Info Display Example"),
        react_1.default.createElement(InfoDisplay_1.default, { messages: messages, position: { bottom: "10px", left: "10px", right: "20px" }, size: { width: "80%", height: "300px" }, style: {
                // Custom styles
                backgroundColor: "#e0e0e0",
                fontFamily: "Courier New, monospace",
                fontSize: "14px",
                color: "#333",
            } })));
};
exports.default = App;
