/* eslint-disable react/prop-types */
/* eslint-disable no-throw-literal */
import React, { useState, useEffect } from "react"
import Markdown from "react-markdown"
import styles from "./content.module.scss"

const Content = ({ page = "home" }) => {
  const [error, setErrors] = useState(false)
  const [data, setData] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setErrors(false)
      const url = `./pages/${page}.md`
      try {
        const response = await fetch(url)
        if (response.status === 404) {
          setData(false)
          throw "Page Not Found"
        }
        const markDown = await response.text()
        setData(markDown)
      } catch (err) {
        setErrors(err)
      }
    }
    fetchData()
  }, [page])

  return (
    <div className={styles.container}>
      {error && <p>{error}</p>}
      {data && <Markdown escapeHtml source={data} />}
    </div>
  )
}
export default Content
