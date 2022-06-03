import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeContext, NotificationContext, SidebarContext } from "./context";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Main() {
  const [theme, setTheme] = React.useState(false);
  const [notification, setNotification] = React.useState("");
  const [sidebarActive, setSidebarActive] = React.useState("");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NotificationContext.Provider value={{ notification, setNotification }}>
        <SidebarContext.Provider value={{ sidebarActive, setSidebarActive }}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </SidebarContext.Provider>
      </NotificationContext.Provider>
    </ThemeContext.Provider>
  );
}

root.render(<Main />);
