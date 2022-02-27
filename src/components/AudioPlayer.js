import cover from './images/ledzep.jpg';

import React, { useState } from 'react';
import PlayerControls from 'react-h5-audio-player';
import TrackList from './TrackList';
import { trackInfo } from './trackInfo';

const AudioPlayer = () => {

  

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? trackInfo.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < trackInfo.length - 1 ? currentTrack + 1 : 0
    );
  };

  const [playing, setPlaying] = useState(false);


  return(
    <>
      <div>
        <img id="cover-img" src={cover} alt="album cover"/>
      
        <PlayerControls
          src={trackInfo[trackIndex].src}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          showSkipControls={true}
          showJumpControls={false}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          layout='stacked-reverse'
        />
      </div>
      <TrackList trackIndex={trackIndex} setTrackIndex={setTrackIndex} />
    </>
  );
  
};

export default AudioPlayer;
