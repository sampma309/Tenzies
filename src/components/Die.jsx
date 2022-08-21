import React from "react"

export default function Die(props) {

    // hide text if game hasn't started
    const styles = {fontSize: props.gameState === 0 ? "0rem" : "3rem"}

    return (
        <h1 
            className={props.locked ? "dice locked" : "dice unlocked"}
            onClick={() => {
                props.toggleLocked(props.id)}}
            style={styles}
        >
            {props.value}
        </h1>
    )
}