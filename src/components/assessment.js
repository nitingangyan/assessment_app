import React, { useState } from 'react';

const Assessment = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [index, setIndex] = useState(0);
  var questionIndexes = [];
  while (questionIndexes.length < questions.length) {
    var r = Math.floor(Math.random() * questions.length);
    if (questionIndexes.indexOf(r) === -1) questionIndexes.push(r);
  }

  return <div>Test</div>;
};

export default Assessment;
