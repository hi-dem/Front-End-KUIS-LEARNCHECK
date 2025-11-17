import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <nav className="flex justify-between">
                <Link to="/" className="font-bold text-xl">LearnCheck!</Link>
                <div className="space-x-4">
                    <Link to="/quiz" className="hover:underline">Quiz</Link>
                    <Link to="/results" className="hover:underline">Results</Link>
                    <Link to="/settings" className="hover:underline">Settings</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
