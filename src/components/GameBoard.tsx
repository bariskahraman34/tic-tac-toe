import { useCallback, useContext, useEffect } from "react"
import { GameContext } from "../context/GameContext"
import { Grid, Paper, Typography, Button, Box } from '@mui/material';

export default function GameBoard() {
  const {board,setBoard,nextPlayer,hasWinner,setNextPlayer,setHasWinner} = useContext(GameContext);

  useEffect(() => checkWinner() ,[nextPlayer])

  const checkWinner = useCallback(() => {
    const WINNNING_CONDITIONS = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [0,3,6],
      [2,4,6],
      [2,5,8],
      [1,4,7]
    ]

    WINNNING_CONDITIONS.map(probability => {
      const [a ,b ,c] = probability;

      if(board[a] && board[a] === board[b] && board[a] === board[c]){
        setHasWinner(true);
      }
    })
  }, [board,setHasWinner])

  const handleClick = (index:number) => {
    if(hasWinner) return;
    if(board[index]) return
    const newBoard = board.slice();
    newBoard[index] = nextPlayer;
    setBoard(newBoard);
    setNextPlayer(nextPlayer => nextPlayer === "X" ? "O" : "X")
  }

  const renderBox = (index: number) => {
    const symbol = board[index];
    let buttonColor = '';
    if (symbol === 'X') {
      buttonColor = '#72cff9';
    } else if (symbol === 'O') {
      buttonColor = '#dcbf3f';
    }

    return (
      <Button
        disabled={hasWinner}
        variant="outlined"
        sx={{ width: '100px', height: '100px' , minWidth: '100px', padding: '0px' , backgroundColor:"#3c1558", borderColor:buttonColor, '&:hover':{borderColor:"#c2daf6"}}}
        onClick={() => handleClick(index)}
      >
        <Typography style={{color:buttonColor , fontWeight:"bold", fontSize:"45px" }}>
          {board[index]}
        </Typography>
      </Button>
    );
  };

  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center" style={{ maxWidth: 600 }}>
      <Grid item xs={12}>
        <Paper elevation={8} style={{ padding: 30, display: 'flex', flexDirection:"column", alignItems:"center", backgroundColor: '#27033d', borderRadius:15 }}>
          <Typography variant="h4" gutterBottom color="#c2daf6">
            Tic Tac Toe
          </Typography>
          <Grid display="grid" gridTemplateColumns="repeat(3,1fr)" justifyItems="center" alignItems="center" gap="20px" margin={3}>
            <Box height={100} width={100} display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{backgroundColor:"#72cff9", borderRadius:"10px"}}>
              <Typography fontSize={16} fontWeight="bold">Player X</Typography>
              <Typography fontSize={26} fontWeight="bold">0</Typography>
            </Box>
            <Box height={120} width={100} display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{backgroundColor:"#6bfff1", borderRadius:"10px"}}>
              <Typography fontWeight="bolder" fontSize={60} style={{color:`${nextPlayer === "X" ? "#72cff9" : "#dcbf3f"}`}}>{nextPlayer}</Typography>
            </Box>
            <Box height={100} width={100} display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{backgroundColor:"#dcbf3f", borderRadius:"10px"}}>
              <Typography fontSize={16} fontWeight="bold">Player O</Typography>
              <Typography fontSize={26} fontWeight="bold">0</Typography>
            </Box>
          </Grid>

          <Grid display="grid" gridTemplateColumns="repeat(3,1fr)" gap="20px" justifyItems= "center" alignItems="center">
            {board.map((box, index) => (
              <Grid item xs={4} key={index} width="100px" maxWidth="100% !important">
                {renderBox(index)}
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}
