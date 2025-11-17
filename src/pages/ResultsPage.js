import React from 'react';
import Analytics from '../components/Analytics';

const ResultsPage = ({ score, timeTaken, hardestTopic }) => {
    return (
        <div className="results-page">
            <h1>Results</h1>
            <Analytics score={score} timeTaken={timeTaken} hardestTopic={hardestTopic} />
        </div>
    );
};

export default ResultsPage;
