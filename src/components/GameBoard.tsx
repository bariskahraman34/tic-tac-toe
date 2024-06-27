import { useCallback, useContext, useEffect,useState } from "react"
import { GameContext } from "../context/GameContext"
import { Grid, Paper, Typography, Button, Modal, Box } from '@mui/material';
import Header from "./Header";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius:"15px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function GameBoard() {
  const {board,setBoard,nextPlayer,hasWinner,setNextPlayer,setHasWinner,setWinnerCounter,resetBoard,setRoundCounter,roundCounter,winnerCounter,resetGame,winningLine,setWinningLine} = useContext(GameContext);
  const [open, setOpen] = useState(false);
  const [isTie , setIsTie] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
    resetGame();
  };

  useEffect(() => checkWinner() ,[nextPlayer])

  useEffect(() => {
    if (roundCounter === 3) {
      const timeout = setTimeout(() => {
        setOpen(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [roundCounter]);

  useEffect(() => {
    if(isTie){
      const timeout = setTimeout(() => {
        setIsTie(false);
      },2000)
      return () => {
        clearTimeout(timeout)
      }
    }
  },[isTie])

  useEffect(() => {
    if(hasWinner){
      const timeout = setTimeout(() => {
        resetBoard();
      },1000)

      return () => clearTimeout(timeout)
    }
  },[hasWinner])

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
    ];

    let winnerFound = false;

    WINNNING_CONDITIONS.forEach(probability => {
      const [a ,b ,c] = probability;

      if(board[a] && board[a] === board[b] && board[a] === board[c] && !winnerFound){
        let winner: "X" | "O" = "X";
        if(board[a] === "O"){
          winner = "O";
        }
        setWinnerCounter((prev) => ({
          scores:{
            ...prev.scores,
            [winner]:prev.scores[winner] + 1
          }
        }))
        setHasWinner(true);
        setRoundCounter(roundCounter => roundCounter + 1);
        setWinningLine([a, b, c]);
        winnerFound = true
      }
    })

    if(!winnerFound){
      if(!hasWinner && board.every(box => box !== null)){
        setIsTie(true);
        setTimeout(() => {
          resetBoard();
        },1000)
      }
    }
  }, [board]);


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
    const isWinningCell = winningLine && winningLine.includes(index);

    return (
      <Button
        className={`${isWinningCell ? 'winning-cell' : ''}`}
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
    <Grid container spacing={1} justifyContent="center" alignItems="center" style={{ position:"relative"}}>
      <Grid item xs={12}>
        <Paper elevation={8} style={{ padding: 30, display: 'flex', flexDirection:"column", alignItems:"center", backgroundColor: '#27033d', borderRadius:15 }}>
          <Header />
          <Grid display="grid" gridTemplateColumns="repeat(3,1fr)" gap="20px" justifyItems= "center" alignItems="center">
            {board.map((_box, index) => (
              <Grid item xs={4} key={index} width="100px" maxWidth="100% !important">
                {renderBox(index)}
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
      {isTie && <Box className="tieBox" sx={{borderRadius:"10px",backgroundColor:"#6bfff1",padding:3, position:"absolute", transform:"translate(-50%,-50%)" , top:"50%" , left:"50%" ,display:"flex",justifyContent:"center",alignItems:"center"}} ><Typography letterSpacing={20} sx={{textShadow: '11px 2px 9px rgba(39, 3, 61, 0.6)'}} variant="h1" fontWeight="bold" color="#fff">TIE</Typography></Box>}
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ ...style }} className="modalScale">
          <Box sx={{marginBottom:2}}>
            <Typography fontWeight="bold" variant="h5">WINNER IS ...</Typography>
            <Typography fontWeight="bold" variant="h4">
              {winnerCounter.scores.X > winnerCounter.scores.O ? "Player X" : "Player O"}
            </Typography>
          </Box>
          <Button variant="contained" sx={{backgroundColor:"#27033d", '&:hover':{backgroundColor:"#4d1b6c"}}} onClick={handleClose}>Play Again</Button>
        </Box>
      </Modal>
    </Grid>
  )
}
