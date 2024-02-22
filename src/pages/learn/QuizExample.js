import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Quiz.css";

function Quizzes() {
    const questions = [
        {
            question: "How many times in a week should you brush your dog's teeth?",
            options: ['5 times', '7 times', '3 times', '1 time'],
            correctAnswer: '3 times',
        },
        {
            question: "When should you trim your dog's nails?",
            options: [
                'When they begin to scrape the floor',
                'Once a month',
                'Never; the nails are trimmed whenever dogs move around',
                'Once every week',
            ],
            correctAnswer: 'When they begin to scrape the floor',
        },
        {
            question: 'How often should you bathe and brush your dog?',
            options: [
                'Roughly once every two weeks',
                'When they get visibly dirty',
                'Roughly once a month',
                'Only during the spring and summer seasons',
            ],
            correctAnswer: 'Roughly once a month',
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [feedback, setFeedback] = useState({});
    const [selectedOption, setSelectedOption] = useState('');
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [currentQuestion]: { isCorrect, selectedOption },
        }));

        if (currentQuestion + 1 === questions.length) {
            setQuizCompleted(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption('');
        }
    };

    return (
        <>
            <h1>Quiz</h1>
            <h3>Show what you know about grooming your dog breed!</h3>
            <br />
            <br />
            {!quizCompleted ? (
                <div>
                    <h2>{questions[currentQuestion].question}</h2>
                    <ul>
                        {questions[currentQuestion].options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionSelect(option)}
                                className={selectedOption === option ? 'selected' : ''}
                            >
                                <button className="option-button">{option}</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleNextQuestion}>Next Question</button>
                </div>
            ) : (
                <div>
                    <h2>Quiz Completed!</h2>
                    <ul>
                        {questions.map((question, index) => (
                            <li key={index}>
                                {question.question}
                                {feedback[index] && (
                                    <p style={{ color: feedback[index].isCorrect ? 'green' : 'red' }}>
                                        Your answer: {feedback[index].selectedOption} -{' '}
                                        {feedback[index].isCorrect ? 'Correct' : 'Incorrect'}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Link className="nav-button" to="/">
                        Back to Home
                    </Link>
                </div>
            )}
        </>
    );
}

export default Quizzes;
