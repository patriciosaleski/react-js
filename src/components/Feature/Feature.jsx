import React from "react"

import { Box, Typography, keyframes } from "@mui/material"

const rotate = keyframes`
  from { transform: rotate(-5deg) }
  to { transform: "rotate(5deg)" }
`

const Feature = (props) => {
  return (
    <Box sx={{
          width: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
      <Box component="img"
        sx={{
          width: 170,
          height: 170,
          '&:hover': {
            animation: `${rotate} .5s infinite alternate`
          }
        }}
        src={props.src}
        alt={props.alt}/>

      <Typography 
        sx={{
          fontSize: 20,
          textAlign: "center",
          mt: 1
        }}>
        {props.text}
      </Typography>
    </Box>
  )
}

export default Feature
