import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Practice from "./pages/practice/Practice";
import Schedule from "./pages/schedule/Schedule";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/pet-grooming-app/" element={<Home />} />
                <Route path="/pet-grooming-app/learn" element={<div>LEARN</div>} />
                <Route path="/pet-grooming-app/practice" element={<Practice />} />
                <Route path="/pet-grooming-app/schedule" element={<Schedule />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}



export default App;
