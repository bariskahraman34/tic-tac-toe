import { useContext } from "react"
import { GameContext } from "../context/GameContext"

export default function GameBoard() {
  const {board,setBoard,nextPlayer,setNextPlayer,hasWinner,setHasWinner} = useContext(GameContext)
  return (
    <>
      
    </>
  )
}
