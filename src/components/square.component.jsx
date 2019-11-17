import React from 'react';

const Square = (props) => {
    if (props.isPlaying) {
        return (
            <div className="field" onClick={props.clickHandler}>
                {props.isClicked &&
                <h2>{props.isPlayer1Owned ? 'o' : 'x'}</h2>
                }
            </div>
        )
    } else {
        return(null);
    }
};

export default Square;
