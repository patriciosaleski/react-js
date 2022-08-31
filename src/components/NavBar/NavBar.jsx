import { NavLink } from "react-router-dom"

import { AppBar, Box, List, ListItem, Button } from "@mui/material"

import logo from "./logo.png"
import CartWidget from "../CartWidget/CartWidget"
import NavBarItem from "../NavBarItem/NavBarItem"

const NavBar = () => {
  return (
    <Box sx={{ width: 1 }}>
      <AppBar position="static"
        sx={{ 
          display: "flex",
          flexDirection: "column",
          alignItems: "center" }}>

        <NavLink to="/" style={{ display: "flex" }}>
          <Box component="img"
            src={logo}
            alt="Logo compuesto por 3 carpas indias de fondo y el texto Uñika por delante"
            sx={{ width: 1 / 4, mx: "auto", mt: 2 }}/>
        </NavLink>

        <List sx={{
              display: "flex",
              width: 1 / 4,
              justifyContent: "space-between",
            }}>

          <NavBarItem />

          <ListItem>
            <Button>
              <CartWidget />
            </Button>
          </ListItem>
        </List>
      </AppBar>
    </Box>
  )
}

export default NavBar
