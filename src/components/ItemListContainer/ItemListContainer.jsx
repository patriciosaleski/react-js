import { useState, useEffect } from "react"

import { CircularProgress, Box } from "@mui/material"

// import { getFirestore, collection, getDocs } from "firebase/firestore"

import ItemList from "../ItemList/ItemList"
import Title from "../Title/Title"

// DEV
const products = [
  {
    id: 1,
    productName: "Carpa de 1.0m",
    productPrice: 5000,
    productPic: "https://i.imgur.com/einJcWE.jpg",
    productPicAlt: "Foto de carpita",
    baseSize: 1.0,
    height: 1.55,
  },
  {
    id: 2,
    productName: "Carpa de 1.2m",
    productPrice: 6000,
    productPic: "https://i.imgur.com/Bn3S1XW.jpg",
    productPicAlt: "Foto de carpita",
    baseSize: 1.2,
    height: 1.7,
  },
  {
    id: 3,
    productName: "Carpa de 1.5m",
    productPrice: 7000,
    productPic: "https://i.imgur.com/aU2fbpL.jpg",
    productPicAlt: "Foto de carpita",
    baseSize: 1.5,
    height: 1.7,
  },
  {
    id: 4,
    productName: "Carpa de 2.0m",
    productPrice: 8000,
    productPic: "https://i.imgur.com/TIUTU4Z.jpg",
    productPicAlt: "Foto de carpita",
    baseSize: 2.0,
    height: 1.85,
  },
]

function ItemListContainer() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // FIREBASE
    // const db = getFirestore()
    // const dbCollection = collection(db, "products");
    // getDocs(dbCollection).then((res) =>
    //   setData(
    //     res.docs.map((product) => ({ id: product.id, ...product.data() })),
    //     setLoading(false)
    //   )
    // )

    // DEV
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
        setLoading(false)
      }, 500)
    })

    getData.then((res) => setData(res))
  }, [])

  return (
    <Box>
      <Title title="Transforma su mundo"/>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress size={ 100 }/>
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${data.length}, 250px)`,
            justifyContent: "center",
            gap: 5
          }}>
          <ItemList data={data} />
        </Box>
      )}
    </Box>
  )
}

export default ItemListContainer
