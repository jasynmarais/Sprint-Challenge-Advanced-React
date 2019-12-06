import React from 'react';
import { Player } from './Player'

export const PlayerList = ({ players }) => {
    if (!players || !players.length) {
        return <div style={{ textAlign: 'center' }}>Loading...</div>;
    }
    return (
        <div className='players-container'>
            {players.map(player => (
                <Player player={player} key={player.id} />
            ))}
        </div>
    );
};