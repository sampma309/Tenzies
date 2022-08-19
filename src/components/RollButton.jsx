import React from "react"

export default function RollButton(props) {
    return (
        <div className="roll-button">
            <button onClick={props.rollNewValues}>Roll</button>
        </div>

    )
}