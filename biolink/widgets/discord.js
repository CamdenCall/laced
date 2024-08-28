import React, { useEffect, useState } from 'react';
import getDiscord from '../lib/getdiscord';
import '../styles/discord.scss'
import '../styles/responsive.scss'



const DiscordWidget = ({ userID }) => {
  const [discordUser, setDiscordUser] = useState(null);
  const [discordActivity, setDiscordActivity] = useState(null)
  useEffect(() => {
    const fetchDiscordUser = async () => {
      try {
        const user = await getDiscord(userID);
        setDiscordUser(user);
        if (user.activity.length === 1) {
            setDiscordActivity(user.activity[0])
        } else {
            setDiscordActivity(user.activity[1])
        }
      } catch (error) {
        console.error('Error fetching Discord user:', error);
      }
    };

    fetchDiscordUser();
  }, [userID]);

  if (!discordUser){
    return <div>Loading...</div>
  }
  console.log(discordActivity)
  return (
    <div className='discord-widget'>
        <svg className="discord-connect" data-status="offline" width="60" height="45.45" viewBox="0 0 157 124" fill="none" xmlns="http://www.w3.org/2000/svg" id="animatedGradient">
            <path d="M87.8181 61.6061H118.121M118.121 61.6061L154.485 1M118.121 61.6061L154.485 122.212M118.121 61.6061H156" stroke="url(#paint0_linear_45_3)" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6"/>
            <path d="M75.0093 34.4176C69.5724 31.9609 63.8514 30.187 57.9774 29.1362C57.14 28.9864 56.2966 29.3872 55.8887 30.1399C55.2946 31.236 54.7421 32.354 54.2324 33.4915C54.23 33.4968 54.2264 33.5008 54.2212 33.5037C54.2186 33.5052 54.2161 33.5059 54.2142 33.5063C54.2126 33.5066 54.2108 33.5068 54.2082 33.5064C48.0918 32.66 41.8875 32.66 35.7711 33.5064C35.7684 33.5068 35.7666 33.5067 35.765 33.5063C35.7631 33.506 35.7607 33.5052 35.7581 33.5037C35.7528 33.5008 35.7493 33.4969 35.7469 33.4916C35.2372 32.3545 34.685 31.2369 34.0913 30.1411C33.6829 29.3874 32.8381 28.9864 31.9998 29.1375C26.1238 30.1961 20.4005 31.9735 14.9598 34.4297C14.621 34.5827 14.3331 34.8281 14.1281 35.1327C2.9964 51.6664 -0.107791 67.8299 1.32791 83.7507C1.3793 84.3206 1.674 84.8415 2.13769 85.1787C8.52048 89.8203 15.6203 93.3903 23.1564 95.7482C23.9662 96.0015 24.8503 95.7121 25.3508 95.0217C26.7496 93.0922 28.0173 91.0717 29.1457 88.9738C29.7262 87.8943 29.1906 86.6051 28.1105 86.1728C26.4551 85.5101 24.8406 84.7506 23.2754 83.8982C23.2762 83.8974 23.2772 83.8965 23.2786 83.8955L23.3688 83.8269C23.369 83.8268 23.3693 83.8266 23.3696 83.8264C23.3703 83.8261 23.3713 83.8257 23.3731 83.8255C23.3761 83.8252 23.3797 83.8255 23.3839 83.8274C30.1682 86.9114 37.5394 88.5088 44.9999 88.5088C52.4533 88.5088 59.8176 86.9145 66.5966 83.8361C66.6031 83.8332 66.6159 83.8323 66.6283 83.842L66.6591 83.8661C66.67 83.8746 66.6756 83.8827 66.6792 83.891C66.6833 83.9002 66.6852 83.9104 66.6851 83.9194C65.1275 84.7657 63.5214 85.5204 61.875 86.1796C60.7953 86.6119 60.2596 87.9007 60.84 88.98C61.9677 91.0775 63.2361 93.0969 64.6365 95.0244C65.1367 95.713 66.0186 96.0017 66.8271 95.75C74.3711 93.4006 81.4778 89.8316 87.8631 85.1848C88.3272 84.8471 88.6205 84.325 88.6722 83.7577C90.3516 65.3262 85.5039 49.307 75.8335 35.1102C75.6283 34.8088 75.3432 34.5685 75.0093 34.4176ZM30.7139 73.3114C27.1144 73.3114 23.9689 70.0147 23.9689 65.7514C23.9689 61.4707 27.0081 58.1575 30.7004 58.1575C34.409 58.1575 37.5192 61.4861 37.4522 65.7356C37.3845 70.0349 34.3743 73.3114 30.7139 73.3114ZM59.2858 73.3114C55.6811 73.3114 52.5476 70.0165 52.5476 65.7514C52.5476 61.4713 55.5863 58.1575 59.2858 58.1575C62.9974 58.1575 66.0844 61.482 66.0174 65.7356C65.9496 70.0361 62.9452 73.3114 59.2858 73.3114Z" stroke="#5865F2" strokeWidth="3"/>
            <defs>
                <linearGradient id="paint0_linear_45_3" x1="88" y1="62" x2="156" y2="62" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" offset="0%"/>
                    <stop offset="100%" stopColor="#4F4F4F" stopOpacity="0"/>
                </linearGradient>
            </defs>
        </svg>
        <div className="discord">
            <div className="profile">
                <div className="top">
                    <h2>{discordUser.username}</h2>
                    <div className='status'>
                        {discordUser.status === 'online' ? (
                            <img className="status-icon" src="/images/online.svg" alt="Online" />
                        ) : discordUser.status === 'offline' ? (
                            <img className="status-icon" src="/images/offline.svg" alt="Offline" />
                        ) : discordUser.status === 'idle' ? (
                            <img className="status-icon" src="/images/idle.svg" alt="Idle" />
                        ) : discordUser.status === 'dnd' ? (
                            <img className="status-icon" src="/images/dnd.svg" alt="Idle" />
                        ) : (
                            <img className="status-icon" src="/images/offline.svg" alt="Offline" />
                        )}
                        {
                            discordUser.status === null ? (
                                <p>Offline</p>
                            ) : (
                                <p>{discordUser.status}</p>
                            )
                        }
                        
                    </div>
                </div>
                <div className='activity'>
                    { discordUser.activity.length == 0 ? (
                        <p>N0NE</p>
                    ) : discordUser.activity.length === 1 && discordUser.activity[0].type === 4 ? (
                        discordUser.activity[0].emoji && discordUser.activity[0].emoji.name ? (
                            <p>{discordUser.activity[0].emoji.name} {discordUser.activity[0].state}</p>
                        ) : (
                            <p>{discordUser.activity[0].state}</p>
                        )                                
                    ) : (
                        <div className='rpc'>
                            { discordActivity.assets.largeImage === !null ? (
                                <img
                                    src={`https://cdn.discordapp.com/app-assets/${discordActivity.applicationId}/${discordActivity.assets.largeImage}.png`}
                                    alt="activity"
                                />
                            ): null}
                   
                            <div>
                                {discordActivity.type === 0 ? (
                                    <p>Playing <span>|</span> {discordActivity.name}</p>
                                ) : discordActivity.type === 1 ? (
                                    <p>Streaming <span>|</span> {discordActivity.name}</p>
                                ) : discordActivity.type === 2 ? (
                                    <p>Listening <span>|</span> {discordActivity.name}</p>
                                ) : discordActivity.type === 3 ? (
                                    <p>Watching <span>|</span> {discordActivity.name}</p>
                                ): null}
                                <p>{discordActivity.details}</p>
                                
                            </div>
                            { discordActivity.assets.largeImage === !null ? (
                                <img src={`https://cdn.discordapp.com/app-assets/${discordActivity.applicationId}/${discordActivity.assets.smallImage}.png`} alt="activity-icon" id='activity-icon'/>
                            ): null}
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    



  );
};

export default DiscordWidget;
