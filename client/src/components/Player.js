import React from 'react';

export const Player = ({ player }) => {
    return (
        <div className='player-card'>
            <h3>{player.id + 1}</h3>
            <ul>
                <li>
                    <span>Name:</span> {player.name}
                </li>
                <li>
                    <span>Country:</span> {player.country}
                </li>
                <li>
                    <span>Searches:</span> {player.searches}
                </li>
            </ul>
        </div>
    );
};