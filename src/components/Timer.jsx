import React from "react";

export default function Timer(props) {

    const [time, setTime] = React.useState(0)

    React.useEffect(() => {

        let interval
        if (props.gameState === 1) {
            console.log("game started")
            interval = setInterval(() => {
                setTime(Date.now() - props.startTime)
            }, 100)
        }

        return () => clearInterval(interval);
    }, [props.gameState, time]);

    // grab personal best from localStorage and update it if you beat your time
    const personalBest = localStorage.getItem("personalBest") || 0
    React.useEffect(() => {
        if (props.gameState === 2) {
            if (time < personalBest || personalBest === 0) {
                localStorage.setItem("personalBest", time)
            }
        }
    }, [props.gameState])
    

    return (
        <div className="times">
            <h2 className="times--current">{time / 1000}</h2>
            <h2 className="times--best">{personalBest / 1000}</h2>
        </div>
    )
}