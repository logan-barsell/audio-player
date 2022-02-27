import React from 'react';
import { trackInfo } from './trackInfo';

const TrackList = ({ trackIndex, setTrackIndex }) => {

  const renderTracks = trackInfo.map(track => {
    const active = trackIndex === track.id;
    const activeClass = active ? 'active' : '';

    return (
      <div 
        key={track.id}
        className={`${activeClass} song row justify-content-between align-items-center`}
        onClick={()=> setTrackIndex(track.id)}
      >
        <div className="col-auto align-self-center">
          <span>
            {track.name}
          </span>
        </div>
        <div className="col-auto align-self-center">
          <span>
            {track.time}
          </span>
        </div>
      </div>
    );
  });
  return (
    <>
      {renderTracks}
    </>
  );
};

export default TrackList;