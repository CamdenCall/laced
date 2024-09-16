import React, { useEffect } from 'react';
import '../styles/spotify.scss';
import '../styles/responsive.scss'

const SpotifyWidget = ({ songURL }) => {

  return (
    <div className='spotify-container mode'>
      <iframe
        src={songURL}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyWidget;
