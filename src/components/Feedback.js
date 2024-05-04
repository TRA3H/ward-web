import React from 'react';
import firestore from '../firebase-config';
import { collection, addDoc } from "firebase/firestore";

const Feedback = ({ prediction, setFeedbackGiven }) => {
  const handleFeedback = async (correct) => {
    try {
      await addDoc(collection(firestore, "feedback"), {
        prediction,
        correct,
        timestamp: new Date()
      });
      setFeedbackGiven(true);  // Notify that feedback was given
      alert("Thank you for your feedback!");
    } catch (error) {
      console.error("Error writing document: ", error);
      alert(`Failed to record feedback. Error: ${error.message}, Code: ${error.code}`);
  }
  
  };

  return (
    <div className="fade-in">
      <p>Did the AI correctly identify the clothing as "{prediction}"?</p>
      <button className='button' onClick={() => handleFeedback(true)}>Correct</button>
      <button className='button' onClick={() => handleFeedback(false)}>Incorrect</button>
    </div>
  );
};

export default Feedback;
