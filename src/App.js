import React from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header-div'>
          <h1 className="headerTitle">Ward the Clothing Classifier</h1>
        </div>
        <div className='description-div'>
          <p className="headerDescription">
            Easily classify various clothing items with our advanced AI model. Just upload an image to get started!
          </p>
        </div>
        <ImageUpload apiUrl="https://traehserver.ddns.net/predict" />
      </header>
    </div>
  );
}

export default App;
