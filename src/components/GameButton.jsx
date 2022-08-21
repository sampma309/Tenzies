import React from "react"

export default function GameButton(props) {

    let buttonText = "Start"
    let buttonFunction = props.rollNewValues

    if (props.gameState === 1) {
        buttonText = "Roll"
    } else if (props.gameState === 2) {
        buttonText = "New Game"
    }

    return (
        <div className="button--root">
            <button 
                className="roll-button"
                onClick={props.gameState === 0 ? props.startGame : props.rollNewValues}
            >
                {buttonText}
            </button>
        </div>

    )
}