import axios from 'axios';

const API_URL = 'https://your-backend-api.com/api';

export const getQuizData = async (moduleId) => {
    try {
        const response = await axios.get(`${API_URL}/tutorials/${moduleId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching quiz data", error);
        throw error;
    }
};

export const submitAnswer = async (answer, questionId) => {
    try {
        const response = await axios.post(`${API_URL}/submit-answer`, {
            answer,
            questionId,
        });
        return response.data;
    } catch (error) {
        console.error("Error submitting answer", error);
        throw error;
    }
};
