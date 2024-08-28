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
    const background = ""
    const widgets = {
        time: {
            timezone: "Central Time"
        },
        spotify: {
            test: "wow"
        },
        socials: {
            instagram: "test",
            cool: "test",
            nah: "test"
        }

    };
    const [linkName, setLink] = useState("test");
    const [linkDataStr, setLinkData] = useState(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const linkData = linkDataStr ? JSON.parse(linkDataStr) : {};
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

    useEffect(() => {
        if (background !== '') {
            document.body.style.backgroundImage = `url(${background})`;
        }
    }, [background]);
    if (!linkDataStr) {
        return <div>Loading Bud...</div>
    }
    return (
        <div className='card' custom-bg={background}>
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
                            widgets.hasOwnProperty('time') ? (
                                <TimeWidget TimeZone={widgets.time.timezone} />
                                
                            ) : widgets.hasOwnProperty("spotify")  ? (
                                
                                <SpotifyWidget songURL="https://open.spotify.com/embed/track/2Jh1L9uRykHbTsS4da9FJd?utm_source=generator&theme=0"/>
                                
                            ) : widgets.hasOwnProperty("socials")  (
                                <SocialWidget socials={widgets.socials} />
                            )
                        }    
                    </div>
                )
            }
            {/* If  */}
            {Object.keys(widgets).length > 1 && linkData.widgets.discord.enabled ? (
                <div className="card-bottom multi-widget">
                    {
                        widgets.hasOwnProperty("socials") ? (
                            <SocialWidget socials={widgets.socials} />
                        ) : null
                    }
                    <div className='widgets'>
                    {
                        widgets.hasOwnProperty('time') && linkData.widgets.discord.enabled ? (
                            <TimeWidget TimeZone={widgets.time.timezone} />
                            
                        ) : null
                    }    
                    {
                        widgets.hasOwnProperty("spotify") && linkData.widgets.discord.enabled ? (
                            <SpotifyWidget songURL="https://open.spotify.com/embed/track/2Jh1L9uRykHbTsS4da9FJd?utm_source=generator&theme=0"/>                            
                        ) : null
                    }
                    </div>
                </div>
                ) : (
                    <div className="card-bottom">
                        { Object.keys(widgets).length < 3 && widgets.hasOwnProperty("socials") ? (
                            null
                            ) : (
                                <div className='widgets'>
                                    {
                                        widgets.hasOwnProperty("time") && linkData.widgets.discord.enabled ? (
                                            <TimeWidget TimeZone={widgets.time.timezone} />
                                        ) : null
                                    }    
                                    {
                                        widgets.hasOwnProperty("spotify") &&  widgets.hasOwnProperty("time") && !linkData.widgets.discord.enabled ? (
                                            <SpotifyWidget songURL="https://open.spotify.com/embed/track/2Jh1L9uRykHbTsS4da9FJd?utm_source=generator&theme=0" />
                                        ) : !widgets.hasOwnProperty("time") && linkData.widgets.discord.enabled ? (
                                            <SpotifyWidget songURL="https://open.spotify.com/embed/track/2Jh1L9uRykHbTsS4da9FJd?utm_source=generator&theme=0" />
                                        ) : null
                                    }
                                </div>
                            )
                        }

                        {
                            widgets.hasOwnProperty("socials") && Object.keys(widgets).length > 1 ? (
                                <SocialWidget socials={widgets.socials} />
                            ) : null
                        }
                    </div>
                )

            }

        </div>

    )
}

export default Card;