import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quiz from '../components/Quiz';
import ProgressBar from '../components/ProgressBar';

const QuizPage = () => {
    const [quizData, setQuizData] = useState([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Mengambil data soal dari backend atau menggunakan data dummy
        axios.get('/api/tutorials/1') // Ganti dengan API nyata nanti
            .then((response) => {
                setQuizData(response.data);
            });
    }, []);

    const handleQuizProgress = (index) => {
        setProgress((index / quizData.length) * 100);
    };

    return (
        <div className="quiz-page bg-background text-center p-6">
            <h1 className="text-3xl font-semibold text-primary mb-6">Quiz Time</h1>
            <ProgressBar progress={progress} />
            <Quiz data={quizData} onProgress={handleQuizProgress} />
        </div>
    );
};

export default QuizPage;
