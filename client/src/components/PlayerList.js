import React from 'react';
import { Player } from './Player'

export const PlayerList = ({ players }) => {
    return (
        <div className='players-container'>
            {players.map(player => (
                <Player player={player} key={player.id} />
            ))}
        </div>
    );
};