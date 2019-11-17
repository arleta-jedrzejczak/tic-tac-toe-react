import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.clickHandler}>{props.isPlaying ? 'End game' : 'Start game'}</button>
    )
};

export default Button;
