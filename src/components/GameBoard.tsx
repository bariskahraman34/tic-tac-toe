import { useContext } from "react"
import { GameContext } from "../context/GameContext"
import { Grid, Paper, Typography, Button, TextField, colors } from '@mui/material';

export default function GameBoard() {
  const {board,setBoard,nextPlayer,setNextPlayer,hasWinner,setHasWinner} = useContext(GameContext);

  const renderBox = (index: number) => {
    return (
      <Button
        variant="outlined"
        style={{ width: '50px', height: '50px' , minWidth: '50px', padding: '0px' , backgroundColor:"#3c1558" }}
      >
        {board[index]}
      </Button>
    );
  };

  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center" style={{ maxWidth: 300 }}>
      <Grid item xs={12}>
        <Paper elevation={8} style={{ padding: 40, textAlign: 'center', backgroundColor: '#27033d', borderRadius:15 }}>
          <Typography variant="h4" gutterBottom color="#72cff9">
            Tic Tac Toe
          </Typography>
          <Grid display="grid" gridTemplateColumns="repeat(2,1fr)" justifyItems="center" alignItems="center" gap="20px" marginBottom={3}>
            <TextField label="Player 1" variant="outlined" size="small" inputProps={{style:{color:"#fff"}}} InputLabelProps={{style:{color:"#fff"}}} />
            <TextField label="Player 2" variant="outlined" size="small" inputProps={{style:{color:"#fff"}}} InputLabelProps={{style:{color:"#fff"}}} />
          </Grid>
          <Grid display="grid" gridTemplateColumns="repeat(3,1fr)" gap="20px" justifyItems= "center" alignItems="center">
            {board.map((box, index) => (
              <Grid item xs={4} key={index} maxWidth="100%" width="50px">
                {renderBox(index)}
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}
