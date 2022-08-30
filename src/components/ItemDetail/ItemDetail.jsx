import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"

import CheckIcon from "@mui/icons-material/Check"

const itemFeatures = [
  "Incluye alfombra acolchada impermeable.",
  "Incluye un almohadón con diseño a elegir.",
  "Cuenta con una ventana con cortina.",
  "También posee un bolsillo juguetero."
]

const ItemDetail = ({ data }) => {
  return (
    <Box sx={{ width: "70%", mx: "auto" }}>
      <Typography
        sx={{ fontSize: 26, fontWeight: "thin", textAlign: "center", mt: 6 }}>
        Carpa de {data.baseSize}m de base y {data.height}m de alto.
      </Typography>
      <List sx={{ width: "70%", mx: "auto" }}>
        {itemFeatures.map((feature, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                transition: "all .1s ease-in",
                "&:hover": {
                  transform: "scale(1.1)",
                }
              }}>

              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText> {feature} </ListItemText>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export default ItemDetail
