import { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({children}) => {
  const [board , setBoard] = useState([...Array.fill(null)]);
  const [nextPlayer, setNextPlayer] = useState('X');
  const [hasWinner, setHasWinner] = useState(false);

  return (
    <GameContext.Provider value={{}}>{children}</GameContext.Provider>
  )
}