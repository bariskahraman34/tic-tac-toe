import { createContext, useState, ReactNode, FC, Dispatch, SetStateAction } from 'react';


type GameContextType = {
  board: Array<string | null>;
  nextPlayer: string;
  hasWinner: boolean;
  winnerCounter:WinnerCounterType;
  roundCounter:number;
  winningLine:  number[] | null;
  setBoard: Dispatch<SetStateAction<Array<string | null>>>;
  setNextPlayer: Dispatch<SetStateAction<string>>;
  setHasWinner: Dispatch<SetStateAction<boolean>>;
  setWinnerCounter: Dispatch<SetStateAction<WinnerCounterType>>;
  setRoundCounter: Dispatch<SetStateAction<number>>;
  resetBoard: VoidFunction;
  resetGame: VoidFunction;
  setWinningLine: Dispatch<SetStateAction<number[] | null>>;
}

type WinnerCounterType = {
  scores:{
    X:number,
    O:number
  }
}

const defaultState: GameContextType = {
  board: Array(9).fill(null),
  nextPlayer: 'X',
  hasWinner: false,
  winnerCounter:{scores:{X:0,O:0}},
  roundCounter:0,
  winningLine:null,
  setBoard: () => {},
  setNextPlayer: () => {},
  setHasWinner: () => {},
  setWinnerCounter: () => {},
  setRoundCounter: () => {},
  resetBoard: () => {},
  resetGame: () => {},
  setWinningLine: () => {}
};

export const GameContext = createContext<GameContextType>(defaultState);

export const GameProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState<string>('X');
  const [hasWinner, setHasWinner] = useState<boolean>(false);
  const [winnerCounter, setWinnerCounter] = useState<WinnerCounterType>({scores:{X:0,O:0}});
  const [roundCounter , setRoundCounter] = useState<number>(0);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setNextPlayer('X');
    setHasWinner(false);
    setWinningLine(null);
  }
  const resetGame = () => {
    resetBoard();
    setWinnerCounter({scores:{X:0,O:0}})
    setRoundCounter(0)
  }

  const data = {
    board,
    setBoard,
    nextPlayer,
    setNextPlayer,
    hasWinner,
    setHasWinner,
    winnerCounter,
    setWinnerCounter,
    resetBoard,
    roundCounter,
    setRoundCounter,
    resetGame,
    winningLine,
    setWinningLine
  }

  return (
    <GameContext.Provider value={data}>{children}</GameContext.Provider>
  )
}