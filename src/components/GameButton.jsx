import React from "react"

export default function GameButton(props) {

    let buttonText
    let buttonFunction

    // Determine button text and purpose
    if (props.gameState === 0) {
        buttonText = "Start"
        buttonFunction = props.startGame
    } else if (props.gameState === 1) {
        buttonText = "Roll"
        buttonFunction = props.rollNewValues
    } else if (props.gameState === 2) {
        buttonText = "New Game"
        buttonFunction = props.startGame
    }

    return (
        <div className="button--root">
            <button 
                className="roll-button"
                onClick={buttonFunction}
            >
                {buttonText}
            </button>
        </div>

    )
}