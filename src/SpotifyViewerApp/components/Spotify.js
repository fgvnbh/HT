import React from 'react';

const Spotify = ({spotify}) => {
    return (
        <div>
            <p>id: {spotify.title}</p>
            <img src={spotify.src} alt="cat"/>
        </div>
    );
};

export default Spotify;
