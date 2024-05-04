import React, { useState, useEffect } from 'react';
import Feedback from './Feedback';
import FeedbackChart from './FeedbackChart';

const ImageUpload = ({ apiUrl }) => {
  const [file, setFile] = useState(null);
  const [fileLabel, setFileLabel] = useState('Select a Clothing Photo');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [showRestartButton, setShowRestartButton] = useState(false);

  useEffect(() => {
    if (feedbackGiven || error) {
      setTimeout(() => {
        setShowRestartButton(true);
      }, 3000);
    }
  }, [feedbackGiven, error]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setFileLabel('Photo has been selected');
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
      setPrediction('');
      setError('');
      setFeedbackGiven(false);
      setShowRestartButton(false);
    };
    reader.readAsDataURL(file);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      setTimeout(() => {
        if (response.ok) {
          setPrediction(data.predicted_class);
          setError('');
        } else {
          setError(data.error || 'An unexpected error occurred.');
          setPrediction('');
        }
        setLoading(false);
      }, 5000); // Simulate delay for UX
    } catch (error) {
      setTimeout(() => {
        setError('Network error, please try again.');
        setPrediction('');
        setLoading(false);
      }, 5000);
    }
  };

  const resetUpload = () => {
    setFile(null);
    setFileLabel('Select a Clothing Photo');
    setImagePreviewUrl('');
    setPrediction('');
    setError('');
    setLoading(false);
    setFeedbackGiven(false);
    setShowRestartButton(false);
  };

  return (
    <div>
      {!feedbackGiven && !error && (
        <form onSubmit={handleFormSubmit}>
          <input id="file" type="file" className="fileInput" onChange={handleFileChange} />
          <label htmlFor="file" className={`fileInputLabel ${file ? 'fileSelected' : ''}`}>{fileLabel}</label>
          <button type="submit" className="button">Upload and Predict</button>
        </form>
      )}
      {loading && (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      )}
      {error && (
        <div className="fade-in">
          <p>{error}</p>
        </div>
      )}
      {prediction && !feedbackGiven && !error && (
        <div className="fade-in">
          <p>This image is a {prediction}.</p>
          <img src={imagePreviewUrl} alt="Uploaded" style={{ maxWidth: '50%', display: 'block', margin: 'auto' }} />
          <Feedback prediction={prediction} setFeedbackGiven={setFeedbackGiven} />
        </div>
      )}
      {feedbackGiven && (
        <div className="fade-in">
          <FeedbackChart />
        </div>
      )}
      {showRestartButton && (
        <button className="button fade-in" onClick={resetUpload}>Upload another photo</button>
      )}
    </div>
  );
};

export default ImageUpload;
