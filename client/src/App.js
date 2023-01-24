import './App.css';
import {useState} from "react";
import Sidebar from "./components/sidebar";
import Prediction from "./components/prediction";

function App() {

  const [valuation, setValuation] = useState(0);

  const toggleTheme = () => {
      console.log("theme toggled");
      document.body.classList.toggle('dark-theme-variables');

      const themeToggler = document.querySelector('.theme-toggler');
      themeToggler.querySelector('span').classList.toggle('active');

  }

  return (
    <div className="container">
        <Sidebar/>
        <Prediction valuation={valuation} setValuation={setValuation}/>
        <div className = "right">
            <div className="top">
                <button id = "menu-btn">
                    <span className="material-icons-sharp">
                        menu
                    </span>
                </button>
                <div className="theme-toggler" onClick={() => toggleTheme()}>
                    <span className="material-icons-sharp active">
                        light_mode
                    </span>
                    <span className="material-icons-sharp">
                        dark_mode
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
