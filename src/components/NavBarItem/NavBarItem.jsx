import { useNavigate } from "react-router-dom"
import { Button, ListItem, Typography } from "@mui/material"

const routes = {
  store: {
    name: "Tienda",
    route: "/",
  },
  contact: {
    name: "Contacto",
    route: "/contacto",
  },
  about: {
    name: "Nosotros",
    route: "/nosotros"
  }
}

const NavBarItem = () => {
  const navigate = useNavigate()

  return Object.keys(routes).map((key) => (
    <ListItem key={routes[key].name}>
      <Button
        onClick={() => navigate(routes[key].route)}
        disableElevation
        variant="outlined"
        color="secondary">
        <Typography sx={{ color: "black" }}> { routes[key].name } </Typography>
      </Button>
    </ListItem>
  ))
}

export default NavBarItem
