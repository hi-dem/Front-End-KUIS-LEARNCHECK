import React from 'react';

const Analytics = ({ score, timeTaken, hardestTopic }) => {
    return (
        <div className="analytics">
            <h3>Your Score: {score}</h3>
            <p>Time Taken: {timeTaken} seconds</p>
            <p>Hardest Topic: {hardestTopic}</p>
        </div>
    );
};

export default Analytics;
