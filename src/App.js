import { useContext } from "react";
import { ThemeContext } from "./context";

import Sidebar from "./components/Sidebar";
import SearchEngine from "./pages/SearchEngine/SearchEngine";

import "./App.scss";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme ? "theme-light" : "theme-dark"}`}>
      <div className="app-body">
        <Sidebar />
        <div className="content">
          <SearchEngine />
        </div>
      </div>
    </div>
  );
}

export default App;
