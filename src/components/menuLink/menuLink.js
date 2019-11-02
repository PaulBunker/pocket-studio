import React from "react"
import classnames from "classnames"
import { Link } from "react-router-dom"
import styles from "./menuLink.module.scss"

export default ({ text, target }) => (
  <Link to={target} className={styles.link} activeClassName={styles.active}>
    {text}
  </Link>
)
