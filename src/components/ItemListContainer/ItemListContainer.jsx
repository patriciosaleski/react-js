import { useState, useEffect } from "react"

import { getFirestore, collection, getDocs } from "firebase/firestore"

import Title from "../Title/Title"
import ItemList from "../ItemList/ItemList"
import { CircularProgress, Box, createTheme, ThemeProvider } from "@mui/material"

import "./ItemListContainer.css"


function ItemListContainer() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()
    const dbCollection = collection(db, "products");
    getDocs(dbCollection).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() })),
        setLoading(false)
      )
    )
  }, [])

  const theme = createTheme({
    palette: {
        primary: {
            main: '#F2F0D0'
        }
    }
  })

  return (
    <>
      <Title title="Transforma su mundo" />
      {loading ? (
        <ThemeProvider theme={theme}>
            <Box sx={{ margin: "0 auto", display: 'flex', justifyContent: 'center' }}>
            <CircularProgress size={100} color='primary' />
            </Box>
        </ThemeProvider>
      ) : (
        <div className="item__container">
          <ItemList data={data} />
        </div>
      )}
    </>
  )
}

export default ItemListContainer