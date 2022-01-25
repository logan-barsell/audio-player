import React from 'react';
import { trackInfo } from './trackInfo';

const TrackList = ({ trackIndex, setTrackIndex}) => {

  const renderTracks = trackInfo.map(track => {
    const active = trackIndex === track.id ? 'active' : '';
    return (
      <div 
        key={track.id}
        className={`${active} song row justify-content-sm-between justify-content-center`}
        onClick={()=> setTrackIndex(track.id)}
      >
        <div className="col-12">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="grey" className="bi bi-pause-fill" viewBox="0 0 16 16">
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="grey" className="bi bi-play-fill" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
          
          <span className="song-name">
            {track.name}
          </span>
        </div>
        {/* <div className="col-auto">
          <button className="btn btn-secondary" type="button">Lyrics</button>
          <button className="btn btn-primary" type="button">Get Song</button>
        </div> */}
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