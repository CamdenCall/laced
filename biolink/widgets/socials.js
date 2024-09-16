import React from 'react';
import '../styles/socials.scss'




const SocialWidget = ({ socials }) => {
  return (
    <div className='socials-section'>
        <div className='socials'>
            {Object.entries(socials).map(([platform, url]) => (
            
            <a href={url}>
                <div className='social mode'>
                    <div>
                        <img src="/images/socials/instagram.svg" height="35" />
                        {platform}
                    </div>
                    <img src="/images/link.svg" />
                </div>
            </a>

            ))}

            
        </div>
    </div>
  );
};

export default SocialWidget;
