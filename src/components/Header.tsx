import {Box,Grid,Typography} from "@mui/material"
import { useContext } from "react"
import { GameContext } from "../context/GameContext"

export default function Header() {
  const {nextPlayer,winnerCounter} = useContext(GameContext);

  return (
    <>
      <Typography variant="h4" gutterBottom color="#c2daf6">
        Tic Tac Toe
      </Typography>
      <Grid display="grid" gridTemplateColumns="repeat(3,1fr)" justifyItems="center" alignItems="center" gap="20px" margin={3}>
        <Box height={100} width={100} display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{backgroundColor:"#72cff9", borderRadius:"10px"}}>
          <Typography fontSize={16} fontWeight="bold">Player X</Typography>
          <Typography fontSize={26} fontWeight="bold">{winnerCounter.scores.X}</Typography>
        </Box>
        <Box height={120} width={100} display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{backgroundColor:"#6bfff1", borderRadius:"10px"}}>
          <Typography fontWeight="bolder" fontSize={60} style={{color:`${nextPlayer === "X" ? "#72cff9" : "#dcbf3f"}`}}>{nextPlayer}</Typography>
        </Box>
        <Box height={100} width={100} display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{backgroundColor:"#dcbf3f", borderRadius:"10px"}}>
          <Typography fontSize={16} fontWeight="bold">Player O</Typography>
          <Typography fontSize={26} fontWeight="bold">{winnerCounter.scores.O}</Typography>
        </Box>
      </Grid> 
    </>
  )
}
