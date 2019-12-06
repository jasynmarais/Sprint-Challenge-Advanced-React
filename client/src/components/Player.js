import React from 'react';

export const Player = ({ player }) => (
    <div className='player-card'>
      <h2>{player.id + 1}</h2>
      <ul>
        <li data-testid='player-name'>
          <span>Name:</span> {player.name}
        </li>
        <li data-testid='player-country'>
          <span>Country:</span> {player.country}
        </li>
        <li>
          <span>Searches:</span> {player.searches}
        </li>
      </ul>
    </div>
  );
