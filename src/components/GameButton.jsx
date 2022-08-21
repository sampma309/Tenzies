import React from "react"

export default function GameButton(props) {
    return (
        <div className="button--root">
            <button 
                className="roll-button"
                onClick={props.rollNewValues}>
                Roll
            </button>
        </div>

    )
}