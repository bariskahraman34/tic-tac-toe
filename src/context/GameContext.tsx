import { createContext, useState, ReactNode, FC, Dispatch, SetStateAction } from 'react';


type GameContextType = {
  board: Array<string | null>;
  nextPlayer: string;
  hasWinner: boolean;
  setBoard: Dispatch<SetStateAction<Array<string | null>>>;
  setNextPlayer: Dispatch<SetStateAction<string>>;
  setHasWinner: Dispatch<SetStateAction<boolean>>;
}

const defaultState: GameContextType = {
  board: Array(9).fill(null),
  nextPlayer: 'X',
  hasWinner: false,
  setBoard: () => {},
  setNextPlayer: () => {},
  setHasWinner: () => {}
};

export const GameContext = createContext<GameContextType>(defaultState);

export const GameProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState<string>('X');
  const [hasWinner, setHasWinner] = useState<boolean>(false);

  const data = {
    board,
    setBoard,
    nextPlayer,
    setNextPlayer,
    hasWinner,
    setHasWinner
  }

  return (
    <GameContext.Provider value={data}>{children}</GameContext.Provider>
  )
}