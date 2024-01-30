import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/pet-grooming-app/" element={<div>HOME</div>} />
                <Route path="/pet-grooming-app/learn" element={<div>LEARN</div>} />
                <Route path="/pet-grooming-app/practice" element={<div>PRACTICE</div>} />
                <Route path="/pet-grooming-app/schedule" element={<div>SCHEDULE</div>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}



export default App;
