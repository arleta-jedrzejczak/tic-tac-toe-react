import React from 'react';

const Score = (props) => {
    if (props.isWon)
        return (
            <div>The winner is {props.isPlayerOne ? 'Player 1' : 'Player 2'}</div>
        );
    if (props.isDraw)
        return (
            <div>Draw!</div>
        );
    return null;
};

export default Score;
