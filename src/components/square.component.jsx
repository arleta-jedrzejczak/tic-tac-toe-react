import React, { useState } from 'react';

const Square = (props) => {
    const [squareState, setSquareState] = useState({
        id: props.id,
        isClicked: props.isClicked,
        isPlayer1Owned: props.isPlayer1Owned
    });

    const clickHandler = (event) => {
        event.persist();
        console.log(event);
    };

    return (
        <div className="field" onClick={props.clickHandler}>
            {squareState.isClicked &&
            <h2>{squareState.isPlayer1Owned ? 'o' : 'x'}</h2>
            }
        </div>
    )
};

export default Square;
