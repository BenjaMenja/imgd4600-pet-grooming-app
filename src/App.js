import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Practice from "./pages/practice/Practice";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/imgd4600-pet-grooming-app/" element={<div>HOME</div>} />
                <Route path="/imgd4600-pet-grooming-app/learn" element={<div>LEARN</div>} />
                <Route path="/imgd4600-pet-grooming-app/practice" element={<Practice />} />
                <Route path="/imgd4600-pet-grooming-app/schedule" element={<div>SCHEDULE</div>} />
            </Routes>
        </Router>
    </div>
  );
}



export default App;
