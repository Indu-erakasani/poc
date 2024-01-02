


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import { Paper, Typography, Radio, Button } from '@material-ui/core';
// import questions from './Questions';
// import ResultPage from "./ResultPage";
// import { useAuth } from "/home/dlakshmi/Documents/ResourcingBot/resumescreeing_engine/src/Authcontext.js";

// const useStyles = makeStyles((theme) => ({
//   questionContainer: {
//     marginBottom: theme.spacing(2),
//     padding: theme.spacing(2),
//     border: '1px solid #ccc',
//     borderRadius: theme.shape.borderRadius,
//     textAlign: 'center', // Center-align the content
//   },
//   optionLabel: {
//     display: 'block',
//     padding: '8px',
//     cursor: 'pointer',
//   },
//   selectedOption: {
//     backgroundColor: '#add8e6', // Light blue background for the selected option
//   },
//   submitButton: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const Question = ({ question, index, handleOptionChange, submitQuestion, selectedAnswers }) => {
//   const classes = useStyles();

//   return (
//     <Paper className={classes.questionContainer}>
//       <Typography variant="body1" gutterBottom>
//         {index + 1}. {question.category} - {question.question}
//       </Typography>
//       {question.options.map((option, i) => (
//         <div key={i}>
//           <label
//             className={`${classes.optionLabel} ${selectedAnswers[index] === option ? classes.selectedOption : ''}`}
//           >
//             <Radio
//               color="primary"
//               checked={selectedAnswers[index] === option}
//               onChange={() => handleOptionChange(index, option)}
//             />
//             {option}
//           </label>
//         </div>
//       ))}
//       <Button
//         variant="contained"
//         color="primary"
//         className={classes.submitButton}
//         onClick={() => {
//           // Check if an option is selected
//           if (selectedAnswers[index] === null) {
//             alert('Please select an option before submitting.');
//           } else {
//             submitQuestion(index);
//           }
//         }}
//       >
//         Submit
//       </Button>
//     </Paper>
//   );
// };

// const Test = () => {
//   const classes = useStyles();
//   const navigate = useNavigate(); // Use the useNavigate hook
//   const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [lastQuestionSubmitted, setLastQuestionSubmitted] = useState(false);
//   const [remainingTime, setRemainingTime] = useState(600); // 10 minutes in seconds
//   const { token } = useAuth();
//   useEffect(() => {
//     let timer;
//     if (remainingTime > 0 && !lastQuestionSubmitted) {
//       timer = setInterval(() => {
//         setRemainingTime((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (remainingTime === 0 && !lastQuestionSubmitted) {
//       // Automatically submit the test when time is up
//       submitTest();
//     }

//     return () => {
//       clearInterval(timer);
//     };
//   }, [remainingTime, lastQuestionSubmitted]);

//   const handleOptionChange = (questionIndex, selectedValue) => {
//     setSelectedAnswers((prevAnswers) => {
//       const newAnswers = [...prevAnswers];
//       newAnswers[questionIndex] = selectedValue;
//       return newAnswers;
//     });
//   };

//   const submitQuestion = (questionIndex) => {
//     if (questionIndex === questions.length - 1) {
//       setLastQuestionSubmitted(true);
//     } else {
//       setCurrentQuestion((prevQuestion) => prevQuestion + 1);
//     }
//   };




// // const submitTest = () => {
// //     const correctAnswers = questions.reduce((count, q, index) => {
// //       const answer = selectedAnswers[index];
// //       if (answer === q.correctAnswer) {
// //         count++;
// //       }
// //       return count;
// //     }, 0);
  
// //     console.log(`Candidate got ${correctAnswers} questions correct out of ${questions.length}.`);
  
// //     // Navigate to the result page with the state
// //     navigate("/ResultPage", { state: { correctAnswers, totalQuestions: questions.length } });
// //   };
  

// // const submitTest = async () => {
// //   const correctAnswers = questions.reduce((count, q, index) => {
// //     const answer = selectedAnswers[index];
// //     if (answer === q.correctAnswer) {
// //       count++;
// //     }
// //     return count;
// //   }, 0);

// //   console.log(`Candidate got ${correctAnswers} questions correct out of ${questions.length}.`);

// //   try {
// //     // Make a POST request to the backend API
// //     const response = await fetch('http://localhost:4000/api/handleSubmission', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({
// //         correctAnswers,
// //         totalQuestions: questions.length,
// //       }),
// //     });

// //     // Check if the request was successful (status code 2xx)
// //     if (response.ok) {
// //       const result = await response.json();
// //       console.log('Backend response:', result);

// //       // Navigate to the result page with the state
// //       navigate('/ResultPage', { state: { correctAnswers, totalQuestions: questions.length } });
// //     } else {
// //       // Handle error cases
// //       console.error('Error:', response.status, response.statusText);
// //       // You might want to display an error message to the user
// //     }
// //   } catch (error) {
// //     console.error('Error:', error.message);
// //     // Handle network-related errors
// //     // You might want to display an error message to the user
// //   }
// // };






// // const submitTest = async () => {
// //   const correctAnswers = questions.reduce((count, q, index) => {
// //     const answer = selectedAnswers[index];
// //     if (answer === q.correctAnswer) {
// //       count++;
// //     }
// //     return count;
// //   }, 0);

// //   console.log(`Candidate got ${correctAnswers} questions correct out of ${questions.length}.`);

// //   // Log the token before making the API call
// //   const token = localStorage.getItem('token');
// //   console.log("token1:",token);
// //   // Log the headers before making the API call
// //   const headers = {
// //     'Content-Type': 'application/json',
// //     'Authorization': `Bearer ${token}`,
// //   };
// //   console.log('Headers:', headers);

// //   try {

// //     // Make a POST request to the backend API
// //     const response = await fetch('http://localhost:4000/api/handleSubmission', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'Authorization': `Bearer ${token}`, // Include the token in the Authorization header

// //       },
 

// //       credentials: "include", // Include credentials in the request
// //       body: JSON.stringify({
// //         correctAnswers,
// //         totalQuestions: questions.length,
// //       }),

// //     });
// //     console.log("handlesubmission response:",response);

// //     // Check if the request was successful (status code 2xx)
// //     if (response.ok) {
     
// //       const result = await response.json();
// //       console.log('Backend response:', result);

// //       // Navigate to the result page with the state
// //       navigate('/ResultPage', { state: { correctAnswers, totalQuestions: questions.length } });
// //     } else {
// //       // Handle error cases
// //       console.error('Error:', response.status, response.statusText);
// //       // You might want to display an error message to the user
// //     }
// //   } catch (error) {
// //     console.error('Error:', error.message);
// //     // Handle network-related errors
// //     // You might want to display an error message to the user
// //   }
// // };






// const submitTest = async () => {
//   const correctAnswers = questions.reduce((count, q, index) => {
//     const answer = selectedAnswers[index];
//     if (answer === q.correctAnswer) {
//       count++;
//     }
//     return count;
//   }, 0);

//   console.log(`Candidate got ${correctAnswers} questions correct out of ${questions.length}.`);

//   // Log the token before making the API call
//   // const token = localStorage.getItem('token');
 
//   console.log("token1:", token);

//   try {
//     // Make a POST request to the backend API
//     const response = await fetch('http://localhost:4000/api/handleSubmission', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       },
//       credentials: "include", // Include credentials in the request
      
//       body: JSON.stringify({
//         correctAnswers,
//         totalQuestions: questions.length,
//       }),
       
//     });
                 
//     console.log("handlesubmission response:", response);

//     // Check if the request was successful (status code 2xx)
//     if (response.ok) {
//       const result = await response.json();
//       console.log('Backend response:', result);
    
//       // Navigate to the result page with the state
//       navigate('/ResultPage', { state: { correctAnswers, totalQuestions: questions.length } });
//     } else {
//       // Handle error cases
//       console.error('Error:', response.status, response.statusText);
//       // You might want to display an error message to the user
//     }
//   } catch (error) {
//     console.error('Error:', error.message);
//     // Handle network-related errors
//     // You might want to display an error message to the user
//   }
// };







// // const submitTest = async () => {
// //   const correctAnswers = questions.reduce((count, q, index) => {
// //     const answer = selectedAnswers[index];
// //     if (answer === q.correctAnswer) {
// //       count++;
// //     }
// //     return count;
// //   }, 0);

// //   console.log(`Candidate got ${correctAnswers} questions correct out of ${questions.length}.`);

// //   // Log the token before making the API call
// //   const token = localStorage.getItem('token');
// //   console.log("token1:", token);

// //   try {
// //     // Make a POST request to the backend API
// //     const response = await submitTestToBackend(correctAnswers);

// //     console.log("handlesubmission response:", response);

// //     // Check if the request was successful (status code 2xx)
// //     if (response.ok) {
// //       const result = await response.json();
// //       console.log('Backend response:', result);

// //       // Navigate to the result page with the state
// //       navigate('/ResultPage', { state: { correctAnswers, totalQuestions: questions.length } });
// //     } else {
// //       // Handle error cases
// //       console.error('Error:', response.status, response.statusText);
// //       // You might want to display an error message to the user
// //     }
// //   } catch (error) {
// //     console.error('Error:', error.message);
// //     // Handle network-related errors
// //     // You might want to display an error message to the user
// //   }
// // };

// // const submitTestToBackend = async (correctAnswers) => {
// //   return await fetch(`http://localhost:4000/api/handleSubmission`, {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json',
// //       'Authorization': `Bearer ${token}`,
// //     },
// //     credentials: "include", // Include credentials in the request
// //     body: JSON.stringify({
// //       correctAnswers,
// //       totalQuestions: questions.length,
// //     }),
// //   });
// // };




  
//   return (
//     <div>
//       {currentQuestion < questions.length && (
//         <div>
//           <Typography variant="h6">Remaining Time: {Math.floor(remainingTime / 60)}:{remainingTime % 60}</Typography>
//           <Question
//             question={questions[currentQuestion]}
//             index={currentQuestion}
//             handleOptionChange={handleOptionChange}
//             submitQuestion={submitQuestion}
//             selectedAnswers={selectedAnswers}
//           />
//         </div>
//       )}
//       {lastQuestionSubmitted && (
//         <Button variant="contained" color="primary" onClick={submitTest} className={classes.submitButton}>
//           Submit Test
//         </Button>
//       )}
//     </div>
//   );
// };

// export default Test;



















import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Radio, Button } from '@material-ui/core';
import questions from './Questions';
import ResultPage from "./ResultPage";

import { useAuth } from "/home/indhu/Documents/RESOURCING-BOT/RESOURCING-BOT/resumescreeing_engine/resumescreeing_engine/src/Authcontext.js";

// import * as faceapi from "/home/dlakshmi/Documents/ResourcingBot/resumescreeing_engine/src/Frontend/face-api.js";

// import { detectFaces } from '/home/dlakshmi/Documents/ResourcingBot/resumescreeing_engine/src/face-api.js';
// import { detectFaces } from '/home/dlakshmi/Documents/ResourcingBot/resumescreeing_engine/src/face-api.js'; 

const useStyles = makeStyles((theme) => ({
  questionContainer: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    border: '1px solid #ccc',
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center', // Center-align the content
  },
  optionLabel: {
    display: 'block',
    padding: '8px',
    cursor: 'pointer',
  },
  selectedOption: {
    backgroundColor: '#add8e6', // Light blue background for the selected option
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  videoContainer: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  },
  video: {
    width: '200px',
    height: '200px',
  },
}));

const Question = ({ question, index, handleOptionChange, submitQuestion, selectedAnswers }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.questionContainer}>
      <Typography variant="body1" gutterBottom>
        {index + 1}. {question.category} - {question.question}
      </Typography>
      {question.options.map((option, i) => (
        <div key={i}>
          <label
            className={`${classes.optionLabel} ${selectedAnswers[index] === option ? classes.selectedOption : ''}`}
          >
            <Radio
              color="primary"
              checked={selectedAnswers[index] === option}
              onChange={() => handleOptionChange(index, option)}
            />
            {option}
          </label>
        </div>
      ))}
      <Button
        variant="contained"
        color="primary"
        className={classes.submitButton}
        onClick={() => {
          // Check if an option is selected
          if (selectedAnswers[index] === null) {
            alert('Please select an option before submitting.');
          } else {
            submitQuestion(index);
          }
        }}
      >
        Submit
      </Button>
    </Paper>
  );
};

const Test = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  // const { token } = useAuth();

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [lastQuestionSubmitted, setLastQuestionSubmitted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(600);
  const [stream, setStream] = useState(null);
  const [videoElement, setVideoElement] = useState(null);
  
  useEffect(() => {
    accessUserCamera();
    // setupFaceDetection();

    let timer;
    if (remainingTime > 0 && !lastQuestionSubmitted) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0 && !lastQuestionSubmitted) {
      submitTest();
    }

    return () => {
      clearInterval(timer);
      stopUserCamera();
    };
  }, [remainingTime, lastQuestionSubmitted]);

  const accessUserCamera = async () => {
    try {
      const userMediaStream = await navigator.mediaDevices.getUserMedia({ video: true,audio: true  });
      setStream(userMediaStream);

      if (videoElement) {
        videoElement.srcObject = userMediaStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopUserCamera = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  // const setupFaceDetection = async () => {
  //   await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
  //   await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
  //   await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
  // };

  // const detectFaces = async () => {
  //   if (videoElement) {
  //     const result = await faceapi.detectSingleFace(videoElement, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
  //     if (result) {
  //       console.log('Face detected:', result);
  //       return result;
  //     } else {
  //       console.log('No face detected');
  //       return null;
  //     }
  //   }
  // };
  const handleOptionChange = (questionIndex, selectedValue) => {
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = selectedValue;
      return newAnswers;
    });
  };
  const submitQuestion = async (questionIndex) => {
    if (questionIndex === questions.length - 1) {
      setLastQuestionSubmitted(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }

  //   // Check for face detection when submitting a question
  //   const faceResult = await detectFaces();
  //   if (faceResult) {
  //     // Do something with the face detection result, e.g., trigger an alert
  //     // In this example, an alert is shown if two faces are detected
  //     if (faceResult.detection.score > 0.5) {
  //       alert('Malpractice Error: Multiple faces detected!');
  //     }
  //   }


   };


  // const submitTest = () => {
  //   const correctAnswers = questions.reduce((count, q, index) => {
  //     const answer = selectedAnswers[index];
  //     if (answer === q.correctAnswer) {
  //       count++;
  //     }
  //     return count;
  //   }, 0);
  
  //   console.log(`Candidate got ${correctAnswers} questions correct out of ${questions.length}.`);
  
  //   // Navigate to the result page with the state
  //   navigate("/ResultPage", { state: { correctAnswers, totalQuestions: questions.length } });
  //   stopUserCamera();
  // };
  
  const submitTest = async () => {
    const correctAnswers = questions.reduce((count, q, index) => {
      const answer = selectedAnswers[index];
      if (answer === q.correctAnswer) {
        count++;
      }
      return count;
    }, 0);
  
    console.log(`Candidate got ${correctAnswers} questions correct out of ${questions.length}.`);

    // Log the token before making the API call
    const token = localStorage.getItem('token');
   
    console.log("token1:", token);
  
    try {
      // Make a POST request to the backend API
      const response = await fetch('http://localhost:4000/api/handleSubmission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: "include", // Include credentials in the request
        
        body: JSON.stringify({
          correctAnswers,
          totalQuestions: questions.length,
        }),
         
      });
                   
      console.log("handlesubmission response:", response);
  
      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const result = await response.json();
        console.log('Backend response:', result);
      
        // Navigate to the result page with the state
        navigate('/ResultPage', { state: { correctAnswers, totalQuestions: questions.length } });
      } else {
        // Handle error cases
        console.error('Error:', response.status, response.statusText);
        // You might want to display an error message to the user
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle network-related errors
      // You might want to display an error message to the user


    }
    stopUserCamera();

  };
  

  
  return (
    <div>
      {/* Display circular video element for camera access */}
      {stream && (
        <div className={classes.videoContainer}>
          <video
            ref={(video) => setVideoElement(video)}
            autoPlay
            muted
            className={classes.video}
          />
        </div>
      )}

      {currentQuestion < questions.length && (
        <div>
          <Typography variant="h6">Remaining Time: {Math.floor(remainingTime / 60)}:{remainingTime % 60}</Typography>
          <Question
            question={questions[currentQuestion]}
            index={currentQuestion}
            handleOptionChange={handleOptionChange}
            submitQuestion={submitQuestion}
            selectedAnswers={selectedAnswers}
          />
        </div>
      )}

      {lastQuestionSubmitted && (
        <Button variant="contained" color="primary" onClick={submitTest} className={classes.submitButton}>
          Submit Test
        </Button>
      )}
    </div>
  );
};

export default Test;