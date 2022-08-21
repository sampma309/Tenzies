import React from "react";

export default function Timer(props) {

    const [time, setTime] = React.useState(0)

    // run timer
    React.useEffect(() => {
        let interval
        if (props.gameState === 1) {
            interval = setInterval(() => {
                setTime(Date.now() - props.startTime)
            }, 100)
        }
        else if (props.gameState === 0) {
            setTime(0)
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
            <h2>Best Time</h2>
            <h2>Time</h2>
            <h2>Dev Time</h2>
            <h2 className="times--best">{(personalBest / 1000).toFixed(3)}</h2>
            <h2 className="times--current">{(time / 1000).toFixed(3)}</h2>
            <h2 className="times--best">5.998</h2>
        </div>
    )
}