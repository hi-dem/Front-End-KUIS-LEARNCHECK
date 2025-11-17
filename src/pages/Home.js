import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background text-center">
            <h1 className="text-4xl font-semibold text-primary mb-6">Welcome to LearnCheck!</h1>
            <p className="text-lg text-gray-700 mb-8">Start your learning journey by taking a quiz or review your progress.</p>

            <div className="space-y-4">
                <Link
                    to="/quiz"
                    className="inline-block px-6 py-3 text-white bg-primary rounded-lg text-xl hover:bg-blue-700 transition"
                >
                    Start Quiz
                </Link>

                <Link
                    to="/results"
                    className="inline-block px-6 py-3 text-white bg-secondary rounded-lg text-xl hover:bg-green-600 transition"
                >
                    View Results
                </Link>

                <Link
                    to="/settings"
                    className="inline-block px-6 py-3 text-white bg-gray-600 rounded-lg text-xl hover:bg-gray-700 transition"
                >
                    Settings
                </Link>
            </div>
        </div>
    );
};

export default Home;
