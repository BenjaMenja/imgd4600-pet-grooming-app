import './App.css';
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import Practice from "./pages/practice/Practice";
import Schedule from "./pages/schedule/Schedule";
import ChooseDog from "./pages/home/ChooseDog";
import Home from "./pages/home/Home";
import Quiz from "./pages/learn/QuizExample";
import React from "react";

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chooseDog" element={<ChooseDog />} />
                <Route path="/starterQuiz" element={<Quiz />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/schedule" element={<Schedule />} />
            </Routes>
        </HashRouter>
    </div>
  );
}



export default App;
