import React, { useState } from "react"
import Square from './components/Square'
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleGamePlay = (index) => {
      alert(index)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div classname ="gameboard">
      {board.map(value, index => {
        return( <Square 
        value={value} 
        key={index}
        index={index} />
        )
      })}
      </div>
    </>
  )
}

export default App
