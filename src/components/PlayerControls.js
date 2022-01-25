import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import TrackList from './TrackList';
import { trackInfo } from './trackInfo';

const PlayerControls = () => {

  

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


  return(
    <>
      <AudioPlayer
        src={trackInfo[trackIndex].src}
        onPlay={e => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        layout='stacked-reverse'
      />
      <TrackList trackIndex={trackIndex} setTrackIndex={setTrackIndex} />
    </>
  );
  
};

export default PlayerControls;
