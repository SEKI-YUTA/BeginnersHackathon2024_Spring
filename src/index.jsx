import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // useEffect(() => {}, [])でも2回呼ばれるのでReact.StrictModeをコメントアウト
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);
