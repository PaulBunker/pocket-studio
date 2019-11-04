import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./menuLink.module.scss"

export default ({ text, target, closeMenu, currentPage }) => (
  <NavLink
    to={target}
    isActive={() => `/${target}` === currentPage}
    className={styles.link}
    activeClassName={styles.active}
    onClick={closeMenu}
  >
    {text}
  </NavLink>
)
