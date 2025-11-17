import React, { createContext, useState, useContext } from 'react';

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
    const [quizData, setQuizData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const nextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const addScore = (newScore) => {
        setScore(score + newScore);
    };

    return (
        <QuizContext.Provider value={{ quizData, setQuizData, currentQuestionIndex, nextQuestion, score, addScore }}>
            {children}
        </QuizContext.Provider>
    );
};
