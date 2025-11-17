import React, { useState } from 'react';

const Quiz = ({ data, onProgress }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = () => {
        const correctAnswer = data[currentIndex].correctAnswer;
        if (answer === correctAnswer) {
            setFeedback('Correct!');
        } else {
            setFeedback(`Incorrect! The correct answer is: ${correctAnswer}`);
        }

        setTimeout(() => {
            onProgress(currentIndex + 1);
            setCurrentIndex(currentIndex + 1);
            setAnswer('');
            setFeedback('');
        }, 2000);
    };

    if (currentIndex >= data.length) {
        return <div className="text-2xl text-gray-800">Quiz Finished!</div>;
    }

    return (
        <div className="quiz-question bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-primary mb-4">{data[currentIndex].question}</h2>
            {data[currentIndex].options.map((option, index) => (
                <button
                    key={index}
                    onClick={handleAnswerChange}
                    value={option}
                    className="block w-full px-4 py-2 mb-2 text-left bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none"
                >
                    {option}
                </button>
            ))}
            <button onClick={handleSubmit} className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Submit
            </button>
            {feedback && <p className="mt-2 text-lg text-gray-700">{feedback}</p>}
        </div>
    );
};

export default Quiz;
