import './App.css';
import {useState} from "react";
import Sidebar from "./components/sidebar";
import Prediction from "./components/prediction";

function App() {

  const [valuation, setValuation] = useState(0);

  return (
    <div className="container">
        <Sidebar/>
        <Prediction valuation={valuation} setValuation={setValuation}/>

    </div>
  );
}

export default App;
