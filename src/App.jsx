import React from "react";
import RollButton from "./components/RollButton";
import Header from "./components/Header";
import Die from "./components/Die";
import defaultDice from "../defaultDice.js"

export default function App() {

  const [dice, setDice] = React.useState(
    () => JSON.parse(localStorage.getItem("dice")) || defaultDice)

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
  
  const diceElements = dice.map(die => {
    return (
      <Die 
        key={die.id}
        id={die.id}
        value={die.value}
        locked={die.locked ? "L" : "UL"}
        toggleLocked={toggleLocked}
      />
    )
  })

  return (
    <div>
      <Header />
      {diceElements}
      <RollButton 
        rollNewValues={rollNewValues}
      />
    </div>
  )
}