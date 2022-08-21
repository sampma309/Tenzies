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
        <div className="buttons">
            <button 
                className="buttons--roll"
                onClick={buttonFunction}
            >
                {buttonText}
            </button>

            {/* Reset button */}
            {props.gameState === 1 &&
            <button 
                className="buttons--reset"
                onClick={props.resetBoard}
            >
            Reset
            </button>}
        </div>

    )
}