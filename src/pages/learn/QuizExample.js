import React, { useState } from 'react';
import {Link} from "react-router-dom";

function Quizzes() {
    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            correctAnswer: 'Paris',
        },
        {
            question: 'Which planet is known as the Red Planet?',
            options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
            correctAnswer: 'Mars',
        },
        {
            question: 'What is the largest mammal?',
            options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
            correctAnswer: 'Blue Whale',
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        setSelectedOption('');
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <>
            <h1>Quiz</h1>
            <Link className="nav-button" to="/">
                Back to Home
            </Link>
            <br/><br/>
            {currentQuestion < questions.length ? (
                <div>
                    <h2>{questions[currentQuestion].question}</h2>
                    <ul>
                        {questions[currentQuestion].options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionSelect(option)}
                                className={selectedOption === option ? 'selected' : ''}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleNextQuestion}>Next Question</button>
                </div>
            ) : (
                <div>
                    <h2>Quiz Completed!</h2>
                    <p>Your Score: {score} out of {questions.length}</p>
                </div>
            )}
        </>
    );
}

export default Quizzes

/*
const App = () => {
    return (
        <div className="App">
            <h1>Simple Multiple Choice Quiz</h1>
            <QuizExample />
        </div>
    );
};
 */