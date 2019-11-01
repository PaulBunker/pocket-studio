import React from "react"
import { MdToc, MdClose } from "react-icons/md"
import styles from "./menuIcon.module.scss"

export default ({ handleClick, isMenuOpen }) => {
  return (
    <button className={styles.button} type="button" onClick={handleClick}>
      {isMenuOpen ? <MdClose /> : <MdToc />}
    </button>
  )
}
