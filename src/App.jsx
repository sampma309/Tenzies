import React from "react";
import GameButton from "./components/GameButton";
import Header from "./components/Header";
import Die from "./components/Die";
import Timer from "./components/Timer";
import defaultDice from "../defaultDice.js"

export default function App() {

  const [dice, setDice] = React.useState(defaultDice)
  const [gameState, setGameState] = React.useState(0) // 0 = pre-game, 1 = in game, 2 = finished game
  const [startTime, setStartTime] = React.useState(0)

  function rollNewValues() {
    setDice(prevDice => prevDice.map(die => {
      return die.locked
      ? {...die}
      : {...die, value: Math.ceil(6 * Math.random())}
    }))
  }

  function toggleLocked(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id
      ? {...die, locked: !die.locked}
      : {...die}
    }))
    console.log(dice)

  }

  // End game if all dice are equal and locked
  if (gameState !== 2) {
    let gameOverFlag = 1
    for (let i = 0; i < dice.length; i++) {
      if (dice[i].value !== dice[0].value || dice[i].locked !== true) {
        gameOverFlag = 0
      }
    }
    if (gameOverFlag === 1) {
      setGameState(2)
    }
  }

  function startGame() {
    setGameState(1)
    setStartTime(Date.now())
    setDice(prevDice => prevDice.map(die => ({
      ...die,
      locked: false,
      value: Math.ceil(6 * Math.random())
    })))
  }
  
  const diceElements = dice.map(die => {
    return (
      <Die 
        key={die.id}
        id={die.id}
        value={die.value}
        locked={die.locked}
        toggleLocked={toggleLocked}
        gameState={gameState}
      />
    )
  })

  return (
    <div>
      <Header />
      <Timer 
        startTime={startTime}
        gameState={gameState}
      />
      <div className="diceGrid">
        {diceElements}
      </div>
      <GameButton 
        gameState={gameState}
        rollNewValues={rollNewValues}
        startGame={startGame}
      />
    </div>
  )
}