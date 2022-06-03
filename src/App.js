import { useContext } from "react";
import { ThemeContext, NotificationContext } from "./context";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SearchEngine from "./pages/SearchEngine/SearchEngine";
import Notification from "./components/Notification";

import "./App.scss";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { notification, setNotification } = useContext(NotificationContext);

  return (
    <div className={`app ${theme ? "theme-light" : "theme-dark"}`}>
      <div className="app-body">
        <Sidebar />
        <div className="content">
          <Header/>
          <SearchEngine />
        </div>
        <Notification notification={notification}/>
      </div>
    </div>
  );
}

export default App;
