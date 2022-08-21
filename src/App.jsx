import React from "react";
import GameButton from "./components/GameButton";
import Header from "./components/Header";
import Die from "./components/Die";
import defaultDice from "../defaultDice.js"

export default function App() {

  const [dice, setDice] = React.useState(defaultDice)
  const [gameState, setGameState] = React.useState(0) // 0 = pre-game, 1 = in game, 2 = finished game

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
  }

  function startGame() {
    setGameState(1)
    console.log("game started")
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