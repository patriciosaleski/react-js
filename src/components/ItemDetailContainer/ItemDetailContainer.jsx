import { useState, useEffect } from "react"

import { Link, useParams } from "react-router-dom"

import { getFirestore, doc, getDoc } from 'firebase/firestore'

import { Box, Button, Tooltip } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

import FeatureContainer from "../FeatureContainer/FeatureContainer"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const [data, setData] = useState({})

  const { detalleId } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const dbDoc = doc(db, 'products', detalleId)
    getDoc(dbDoc)
        .then(res => setData({ id: res.id, ...res.data() }))
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
