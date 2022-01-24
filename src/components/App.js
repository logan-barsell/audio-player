import './App.css';
import React from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => (
  <AudioPlayer
    src="http://example.com/audio.mp3"
    onPlay={e => console.log("onPlay")}
  />
);


const App = () => {
  return (
    <div id="audio-player" className="row container justify-content-center">
      <div className="col-6">
        <Player />
        {/* <div className="song">
          <span>Song Name</span>
          <span>Song Length</span>
        </div> */}
      </div>
    </div>
  );
};

export default App;