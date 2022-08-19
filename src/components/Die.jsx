import React from "react"

export default function Die(props) {
    return (
        // <div onClick={() => props.toggleLocked(props.id)}>
        //     <h4>{props.value}</h4>
        // </div>
        <button onClick={() => props.toggleLocked(props.id)}>{props.value} {props.locked}</button>
    )
}