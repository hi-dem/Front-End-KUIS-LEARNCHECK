import React from 'react';

const ReviewPage = ({ quizData, currentQuestionIndex, setCurrentQuestionIndex }) => {
    return (
        <div>
            <h2>Review Your Answers</h2>
            {quizData.length > 0 ? (
                <div>
                    <p>{quizData[currentQuestionIndex].question}</p>
                    <ul>
                        {quizData[currentQuestionIndex].options.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))}
                    </ul>
                    <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}>
                        Previous
                    </button>
                    <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
                        Next
                    </button>
                </div>
            ) : (
                <p>No answers to review.</p>
            )}
        </div>
    );
};

export default ReviewPage;
