import { useState, useEffect } from "react"

import { CircularProgress, Box } from "@mui/material"

import { getFirestore, collection, getDocs } from "firebase/firestore"

import ItemList from "../ItemList/ItemList"
import Title from "../Title/Title"

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
