import React, { useEffect } from 'react';
import '../styles/spotify.scss';
import '../styles/responsive.scss'

const SpotifyWidget = ({ songURL, widgets, setWidgets }) => {

  return (
    <div className='spotify-container'>
      <iframe
        src={songURL}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyWidget;
