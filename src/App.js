import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Practice from "./pages/practice/Practice";
import Quizzes from "./QuizExample";
import React from "react";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/pet-grooming-app/" element={<div>HOME</div>} />
                <Route path="/pet-grooming-app/learn" element={<div>LEARN</div>} />
                <Route path="/pet-grooming-app/practice" element={<Practice />} />
                <Route path="/pet-grooming-app/schedule" element={<div>SCHEDULE</div>} />
                <Route path="/pet-grooming-app/quizzes" element={<Quizzes/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}



export default App;
