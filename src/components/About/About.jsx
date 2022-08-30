import Carousel from "react-material-ui-carousel"

import { Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"

import Settings from "./settings"

const items = [
  {
    id: 1,
    src: "https://i.imgur.com/57KNAx2.jpg",
    alt: "Foto del taller donde se realizan las carpas."
  },
  {
    id: 2,
    src: "https://i.imgur.com/MmGVTk8.jpg",
    alt: "Foto del taller donde se realizan las carpas."
  },
  {
    id: 3,
    src: "https://i.imgur.com/I9ruris.jpg",
    alt: "Foto del taller donde se realizan las carpas."
  },
  {
    id: 4,
    src: "https://i.imgur.com/a6YOr6Y.jpg",
    alt: "Foto de las carpas listas para el envío."
  }
]

const About = () => {

  return (
    <Box sx={{ marginTop: "50px", color: "#494949" }}>
      <Typography
        variant="h4"
        fontWeight={100}
        fontSize={82}
        sx={{ width: "50%", mx: "auto", textAlign: "center" }}>
        Conocenos
      </Typography>
      <br />
      <Carousel sx={{ maxWidth: "720px", mx: "auto" }} {...Settings}>
        {items.map((item, index) => {
          return <Element item={item} key={index} />
        })}
      </Carousel>
      <br />
      <Typography
        sx={{
          width: 1 / 2,
          fontFamily: "'Times New Roman', Times, serif",
          fontSize: 24,
          mx: "auto",
          mt: 4
        }}>
        Uñika es un emprendimiento que comencé en el año 2012 con la confección
        de camperas para bajas temperaturas, ofreciendo una calidad superior
        gracias a la mano de obra artesanal que le dedico, junto con un precio
        competente y la opción de elegir el diseño de las mismas hizo que sea un
        éxito hasta el presente.
        <br />
        <br />
        Con la pandemia del COVID-19, y viendo una nueva oportunidad en el
        mercado, decidí hacer un cambio en el rumbo, esta vez ofreciendo carpas
        de estilo Tepee, también conocidas como Tipi, con el objetivo de
        estimular el juego de los niños en contacto con la naturaleza, asimismo
        generar un espacio de juego dentro de sus hogares.
        <br />
        <br />
        Con esas ideas en mente, y mi gran pasión por el espíritu infantil,
        diseñe dichas carpas, ofreciendo lo que hizo que el emprendimiento sea
        un éxito: la opción de elegir el diseño, obtener una excelente calidad
        del producto y a un precio accesible.
        <br />
        <br />
        Agradezco a todos los clientes que han confiado en mí, gracias a ellos
        he logrado mejorar muchísimos aspectos, tanto para el producto como la
        atención brindada, ofreciendo espacios de juego y relax a todos los
        niños, siempre dando el amor y cariño que se merecen.
      </Typography>
    </Box>
  )
}

function Element({ item }) {
  return (
    <Paper
      style={{
        maxWidth: "100%",
        position: "relative",
        height: "530px",
        overflow: "hidden",
        p: "20px",
      }}
      elevation={10}>
      <Box key={item.id} component="img" src={item.src} alt={item.alt} />
    </Paper>
  )
}

export default About
