import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Router>
      <QuizProvider>
        <Routes>
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/results" element={<ResultPage />} />
          <Route path="/" element={<Navigate to="/quiz" replace />} />
        </Routes>
      </QuizProvider>
    </Router>
  );
}

export default App;