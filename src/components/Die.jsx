import React from "react"

export default function Die(props) {
    return (
        <h1 
            className={props.locked ? "dice locked" : "dice unlocked"}
            onClick={() => {
                props.toggleLocked(props.id)}}>
            {props.value} {props.locked}
        </h1>
    )
}