import 'react-h5-audio-player/lib/styles.css';
import './App.css';

import React from 'react';
import AudioPlayer from './AudioPlayer';


const App = () => {
  return (
    <div id="audio-player" className="row justify-content-center">
      <div className="col-md-6 col-10">
        <AudioPlayer />
      </div>
    </div>
  );
};

export default App;