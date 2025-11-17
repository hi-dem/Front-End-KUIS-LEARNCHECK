import React from 'react';

const QuizHeader = ({ currentQuestion, totalQuestions, timeRemaining, isWarning }) => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg mb-6 shadow-lg">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Kuis LearnCheck</h1>
                    <p className="text-blue-100">Pertanyaan {currentQuestion} dari {totalQuestions}</p>
                </div>
                <div className={`text-right p-4 rounded-lg ${isWarning ? 'bg-red-500' : 'bg-blue-700'}`}> 
                    <p className="text-sm text-blue-100">Waktu Tersisa</p>
                    <p className="text-3xl font-bold">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</p>
                </div>
            </div>
            <div className="mt-4 bg-blue-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full transition-all duration-300" style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}></div>
            </div>
        </div>
    );
};

export default QuizHeader;