import './styles/card.scss'
import './styles/responsive.scss'
import TimeWidget from './widgets/time';
import DiscordWidget from './widgets/discord';
import UserWidget from './widgets/user';
import SocialWidget from './widgets/socials'
import SpotifyWidget from './widgets/spotify';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
    const discordWidget = false
    const [linkName, setLink] = useState("test");
    const [linkDataStr, setLinkData] = useState(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    //const linkData = linkDataStr ? JSON.parse(linkDataStr) : {};
    const linkData = {
        name: "CubicCool",
        bio: "That is cool",
        premium: false,
        widgets: {
            discord: {"enabled": false, "userID": 915066315499270194},
            spotify: {"enabled": true, "songUrl": "https://open.spotify.com/embed/track/2Jh1L9uRykHbTsS4da9FJd?utm_source=generator&theme=0"},
            time : {"enabled": true, "timezone": "Central Time"},
            socials: {"enabled": true, "instagram": "test", "cool": "yeah", "nah": "test"}
        },
        style: {
            background: "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg",
            mode: "dark"
        },
        views: 10
    }
    /*
    useEffect(() => {
        const fetchLinkData = async () => {
            try {
                const response = await axios.post('http://localhost:3001/link', { linkName });
                if (response.data.linkData) {
                    console.log(response.data.linkData)
                    setLinkData(response.data.linkData);
                } else {
                    setLinkData(null);
                    setMessage(response.data.message);
                }
            } catch (error) {
                setError('Error fetching data: ' + error.message);
            }
        };

        if (linkName) {
            fetchLinkData();
        }
    }, [linkName]);
        if (!linkDataStr) {
        return <div>Loading Bud...</div>
    }
    */
    useEffect(() => {
        if (linkData.style.background !== '') {
            document.body.style.backgroundImage = `url(${linkData.style.background})`;
        }
        if (linkData.style.mode == "dark") {
            const elements = document.querySelectorAll('.mode');
            elements.forEach(element => {
              var name = element.className
              if (name.includes("spotify")) {
                element.classList.add('spotify-dark');
              } else {
                element.classList.add('dark');
              }
            });
        }
    });
    return (
        <div className='card'>
            {/* If  */}
            { linkData.widgets.discord.enabled ? (
                <div className='header'>
                    <UserWidget linkData={linkData}/>
                    <DiscordWidget userID="915066315499270194" />
                </div>
                ) : (
                    <div className='header'>
                        <UserWidget linkData={linkData}/>   
                        {
                            linkData.widgets.hasOwnProperty('time') ? (
                                <TimeWidget TimeZone={linkData.widgets.time.timezone} />
                                
                            ) : linkData.widgets.hasOwnProperty("spotify")  ? (
                                
                                <SpotifyWidget songURL="https://open.spotify.com/embed/track/2Jh1L9uRykHbTsS4da9FJd?utm_source=generator&theme=0"/>
                                
                            ) : linkData.widgets.hasOwnProperty("socials")  (
                                <SocialWidget socials={linkData.widgets.socials} />
                            )
                        }    
                    </div>
                )
            }
            {/* If  */}
            {Object.keys(linkData.widgets).length > 1 && linkData.widgets.discord.enabled ? (
                <div className="card-bottom multi-widget">
                    {
                        linkData.widgets.hasOwnProperty("socials") ? (
                            <SocialWidget socials={linkData.widgets.socials} />
                        ) : null
                    }
                    <div className='widgets'>
                    {
                        linkData.widgets.hasOwnProperty('time') && linkData.widgets.discord.enabled ? (
                            <TimeWidget TimeZone={linkData.widgets.time.timezone} />
                            
                        ) : null
                    }    
                    {
                        linkData.widgets.hasOwnProperty("spotify") && linkData.widgets.discord.enabled ? (
                            <SpotifyWidget songURL="https://open.spotify.com/embed/track/2Jh1L9uRykHbTsS4da9FJd?utm_source=generator&theme=0"/>                            
                        ) : null
                    }
                    </div>
                </div>
                ) : (
                    <div className="card-bottom">
                        { Object.keys(linkData.widgets).length < 3 && linkData.widgets.hasOwnProperty("socials") ? (
                            null
                            ) : (
                                <div className='widgets'>
                                    {
                                        linkData.widgets.hasOwnProperty("time") && linkData.widgets.discord.enabled ? (
                                            <TimeWidget TimeZone={linkData.widgets.time.timezone} />
                                        ) : null
                                    }    
                                    {
                                        linkData.widgets.hasOwnProperty("spotify") &&  linkData.widgets.hasOwnProperty("time") && !linkData.widgets.discord.enabled ? (
                                            <SpotifyWidget songURL="https://open.spotify.com/embed/track/2Jh1L9uRykHbTsS4da9FJd?utm_source=generator&theme=0" />
                                        ) : !linkData.widgets.hasOwnProperty("time") && linkData.widgets.discord.enabled ? (
                                            <SpotifyWidget songURL="https://open.spotify.com/embed/track/2Jh1L9uRykHbTsS4da9FJd?utm_source=generator&theme=0" />
                                        ) : null
                                    }
                                </div>
                            )
                        }

                        {
                            linkData.widgets.hasOwnProperty("socials") && Object.keys(linkData.widgets).length > 1 ? (
                                <SocialWidget socials={linkData.widgets.socials} />
                            ) : null
                        }
                    </div>
                )

            }

        </div>

    )
}

export default Card;