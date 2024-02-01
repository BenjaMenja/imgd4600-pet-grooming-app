import './App.css';
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import Practice from "./pages/practice/Practice";

function App() {
  return (
    <div className="App">
        <HashRouter basename="/pet-grooming-app/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<div>
                   LEARN
                   <Link className="nav-button" to="/">
                      Back to Home
                   </Link>
                </div>} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/schedule" element={<Schedule />} />
            </Routes>
        </HashRouter>
    </div>
  );
}



export default App;
