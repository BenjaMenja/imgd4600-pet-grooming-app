import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>HOME</div>} />
                <Route path="/learn" element={<div>LEARN</div>} />
                <Route path="/practice" element={<div>PRACTICE</div>} />
                <Route path="/schedule" element={<div>SCHEDULE</div>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}



export default App;
