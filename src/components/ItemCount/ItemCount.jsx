import { Box, Button } from "@mui/material"
import { useState, useEffect } from "react"

import CircularButton from "../CircularButton/CircularButton"

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial)

  const decrease = () => {
    setCount(count - 1)
  }

  const increase = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    setCount(initial)
  }, [initial])

  return (
    <Box
      sx={{
        width: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>

      <Box sx={{ width: "45%" }}>
        <CircularButton disable={count <= 0} fn={decrease} content="-" />

        <Box component="span" sx={{ fontSize: 24, mx: ".7rem" }}>
          {count}
        </Box>
        
        <CircularButton disable={count >= stock} fn={increase} content="+" />
      </Box>

      <Button
        disabled={stock <= 0 || count === 0}
        onClick={() => onAdd(count)}
        variant="outlined"
        sx={{
          width: "90%",
          color: "black",
          my: 1,
          borderRadius: 3,
          transition: "all .2s ease-in",
          "&:hover": {
            bgcolor: "primary.light"
          }
        }}>
        Agregar al carro
      </Button>
    </Box>
  )
}

export default ItemCount
