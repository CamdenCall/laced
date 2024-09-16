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
        widgets: {
            profile: {name: "CubicCool", bio: "That is cool", views: 10},
            discord: {enabled: false, userID: 915066315499270194},
            spotify: {enabled: true, songUrl: "https://open.spotify.com/embed/track/2Jh1L9uRykHbTsS4da9FJd?utm_source=generator&theme=0"},
            time : {enabled: true, timezone: "Central Time"},
            socials: {enabled: true, instagram: "test", "cool": "yeah", "nah": "test"}
        },
        style: {
            background: "https://wallpapers-clan.com/wp-content/uploads/2023/11/captivating-total-black-abstract-wallpaper-scaled.jpg",
            mode: ""
        },
        premium: false,
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
            
            <UserWidget linkData={linkData}/>

            {linkData.widgets.discord.enabled && (
                <DiscordWidget userID={linkData.widgets.discord.userID} />
            )}

            {linkData.widgets.time.enabled && (
                <TimeWidget TimeZone={linkData.widgets.time.timezone} />
            )}

            {linkData.widgets.socials.enabled && (
                <SocialWidget 
                    socials={linkData.widgets.socials}
                />
            )}
            {linkData.widgets.spotify.enabled && (
                <SpotifyWidget songURL={linkData.widgets.spotify.songUrl} />
            )}

        </div>

    )
}

export default Card;