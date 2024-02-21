//Preliminary Evaluation to gather what the user knows
import React, { useState } from 'react';
import {Link} from "react-router-dom";

//These questions are focused on Golden Retrievers
//Maybe have different quiz sets for each implemented dog
function Quizzes() {
    const questions = [
        {
            question: "How many times in a week should you brush your dog's teeth?",
            options: ['5 times', '7 times', '3 times', '1 time'],
            correctAnswer: '3 times',
        },
        {
            question: "When should you trim your dog's nails?",
            options: ['When ', 'When they begin to scrape the floor',
                'Never; the nails are trimmed whenever dogs move around', 'Once every week'],
            correctAnswer: 'When they begin to scrape the floor',
        },
        {
            question: "How often should you bathe and brush your dog?",
            options: ['Roughly once every two weeks', 'When they get visibly dirty',
                'Roughly once a month', 'Only during the spring and summer seasons'],
            correctAnswer: 'Roughly once a month',
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
            <h3>Show what you know about grooming your dog breed!</h3>
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
                    <Link className="nav-button" to="/">
                        Back to Home
                    </Link>
                </div>
            )}
        </>
    );
}

export default Quizzes