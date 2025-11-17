const mockQuizzes = [
  {
    id: 1,
    title: 'JavaScript Basics',
    questions: [
      {
        question: 'What is the syntax for creating a function in JavaScript?',
        answers: ['function = myFunction()', 'function myFunction()', 'create myFunction()', 'myFunction: function()'],
        correctAnswer: 'function myFunction()'
      },
      {
        question: 'What is the output of 2 + 2 in JavaScript?',
        answers: ['4', '22', 'undefined', 'error'],
        correctAnswer: '4'
      }
    ]
  },
  {
    id: 2,
    title: 'HTML Basics',
    questions: [
      {
        question: 'What does HTML stand for?',
        answers: ['Hyper Text Markup Language', 'High Text Markup Language', 'Hyperlink and Text Markup Language', 'None of the above'],
        correctAnswer: 'Hyper Text Markup Language'
      },
      {
        question: 'Which HTML tag is used to define an internal style sheet?',
        answers: ['<style>', '<css>', '<script>', '<html>'],
        correctAnswer: '<style>'
      }
    ]
  }
];

export default mockQuizzes;