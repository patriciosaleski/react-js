import { useEffect, useState } from "react"

import { getFirestore, collection, getDocs } from "firebase/firestore"

import { Box, CircularProgress } from "@mui/material"

import ContactForm from "../ContactForm/ContactForm"
import FAQItem from "./FAQItem"

const FAQ = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()
    const dbCollection = collection(db, "faqs")
    getDocs(dbCollection).then((res) =>
      setData(
        res.docs.map((faq) => ({ id: faq.id, ...faq.data() })),
        setLoading(false)
      )
    )
  }, [])

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress size={100} />
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `50%`,
            justifyContent: "center",
            mt: 5
          }}>
          <FAQItem data={data} />
          <ContactForm />
        </Box>
      )}
    </>
  )
}

export default FAQ
