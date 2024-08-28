import React, { useState, useEffect } from 'react';
import '../styles/user.scss'
import '../styles/responsive.scss'




const UserWidget = (linkData) => {
  const user = linkData.linkData
  return (
    <div className='user'>
        <div className='profile-container'>
          <img src="https://cdn.discordapp.com/avatars/915066315499270194/6b04aa71ad60eb8377b28ccd49db6c01.png?size=1024" alt='avatar'></img>
        </div>
        <div className='user-info'>
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
        </div>
        <div className='user-views'>
          <img src="/images/views-icon.svg"></img>
          <p>{user.views}</p>
        </div>
    </div>
  );
};

export default UserWidget;
