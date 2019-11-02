import React, { useState, useEffect } from "react"

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
    <div>
      {error && <p>{error}</p>}
      {data && <p>{data}</p>}
    </div>
  )
}
export default Content
