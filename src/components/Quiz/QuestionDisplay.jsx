import React from 'react';

const QuestionDisplay = ({ question, questionNumber, totalQuestions }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Pertanyaan {questionNumber}/{totalQuestions}
                </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 leading-relaxed">
                {question}
            </h2>
        </div>
    );
};

export default QuestionDisplay;