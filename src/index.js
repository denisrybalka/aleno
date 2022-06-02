import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeContext } from "./context";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Main() {
  const [theme, setTheme] = React.useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeContext.Provider>
  );
}

root.render(<Main />);
