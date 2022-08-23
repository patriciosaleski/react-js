import { useState, useEffect } from "react"

import { Link, useParams } from "react-router-dom"

// import { getFirestore, doc, getDoc } from 'firebase/firestore'

import { Box, Button, Tooltip } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

import FeatureContainer from "../FeatureContainer/FeatureContainer"
import ItemDetail from "../ItemDetail/ItemDetail"


// DEV BRANCH
const productInfo = [
  {
    id: 1,
    baseSize: 1.0,
    height: 1.55
  },
  {
    id: 2,
    baseSize: 1.2,
    height: 1.7
  },
  {
    id: 3,
    baseSize: 1.5,
    height: 1.7
  },
  {
    id: 4,
    baseSize: 2.0,
    height: 1.85
  }
]

const ItemDetailContainer = () => {
  const [data, setData] = useState({})

  const { detalleId } = useParams()

  useEffect(() => {
    // FOR FIREBASE USE ONLY
    // const db = getFirestore()
    // const dbDoc = doc(db, 'products', detalleId)
    // getDoc(dbDoc)
    //     .then(res => setData({ id: res.id, ...res.data() }))

    // DEV BRANCH
    const getData = new Promise((resolve) => resolve(productInfo))

    getData.then((res) =>
      setData(res.find((product) => product.id === parseInt(detalleId)))
    )
  })

  return (
    <Box
      sx={{
        width: "45%",
        boxShadow: 3,
        borderRadius: "20px",
        mx: "auto",
        mt: 8,
        bgcolor: "secondary.main",
      }}>
      <Tooltip title='Cerrar'>
        <Link to="/">
          <Button>
            <CloseIcon
              sx={{
                position: "absolute",
                left: "7px",
                top: "-1px",
                color: "black",
              }}
            />
          </Button>
        </Link>
      </Tooltip>
      <FeatureContainer />
      <ItemDetail data={data} />
    </Box>
  )
}

export default ItemDetailContainer
