import { useEffect, useState } from "react"

import { getFirestore, collection, getDocs } from "firebase/firestore"

const FAQ = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()
    const dbCollection = collection(db, "faqs")
    getDocs(dbCollection).then((res) =>
      setData(
        res.docs.map((faq) => ({ title: faq.title, answer: faq.answer })),
        setLoading(false)
      )
    )
  }, [])

  

  return (
    <>
    </>
  )
}

export default FAQ
