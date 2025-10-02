import React from "react";
import ReactDOM from "react-dom/client";
import Projects from "./pages/Projects"; // ✅ Correct import

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Projects />  {/* ✅ Correct usage */}
  </React.StrictMode>
);
