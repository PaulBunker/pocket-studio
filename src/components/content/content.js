import React, { useState, useEffect } from "react"
import Markdown from "react-markdown"
import styles from "./content.module.scss"

const Content = () => {
  const [error, setErrors] = useState(false)
  const [data, setData] = useState(false)

  const fetchData = async () => {
    const url = "/pages/home.md"
    try {
      const response = await fetch(url)
      const markDown = await response.text()
      setData(markDown)
    } catch (err) {
      setErrors(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={styles.container}>
      {error && <p>{error}</p>}
      {data && <Markdown escapeHtml source={data} />}
    </div>
  )
}
export default Content
