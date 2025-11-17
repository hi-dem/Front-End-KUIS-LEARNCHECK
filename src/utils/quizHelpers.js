// quizHelpers.js

/**
 * Helper function to shuffle an array
 * @param {Array} array - The array to shuffle
 * @returns {Array} - The shuffled array
 */
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

/**
 * Helper function to validate quiz answers
 * @param {Array} answers - The array of answers provided by user
 * @param {Array} correctAnswers - The array of correct answers
 * @returns {Boolean} - True if answers are valid, else false
 */
const validateAnswers = (answers, correctAnswers) => {
    if (answers.length !== correctAnswers.length) return false;
    return answers.every((answer, index) => answer === correctAnswers[index]);
};

module.exports = { shuffleArray, validateAnswers };