import React from "react"
import { Link } from "react-router-dom"
import styles from "./menuLink.module.scss"

export default ({ text, target }) => (
  <Link to={target} className={styles.link} activeclassname={styles.active}>
    {text}
  </Link>
)
