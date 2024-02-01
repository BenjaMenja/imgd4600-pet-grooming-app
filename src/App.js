import './App.css';
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import Practice from "./pages/practice/Practice";
import Schedule from "./pages/schedule/Schedule";
import Home from "./pages/home/Home";
import Quizzes from "./QuizExample";
import React from "react";

function App() {
  return (
    <div className="App">
        <HashRouter basename="/pet-grooming-app/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Quizzes />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/schedule" element={<Schedule />} />
            </Routes>
        </HashRouter>
    </div>
  );
}



export default App;
