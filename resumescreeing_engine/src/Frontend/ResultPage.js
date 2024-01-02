import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  console.log('ResultPage location:', location);

  // Access correctAnswers and totalQuestions directly from location.state
  const { correctAnswers, totalQuestions } = location.state || {};

  if (!correctAnswers || !totalQuestions) {
    // Handle the case where correctAnswers or totalQuestions are undefined
    return (
      <div>
        <h2>Error</h2>
        <p>Result data is not available.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Test Results</h2>
      <p>{`You got ${correctAnswers} questions correct out of ${totalQuestions}.`}</p>
      {correctAnswers >= 10 ? (
        <p>Congratulations! You've Qualified for the Next Round.</p>
      ) : (
        <p>Sorry, you did not qualify for the next round.</p>
      )}
    </div>
  );
};

export default ResultPage;

