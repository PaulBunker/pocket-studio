import React, { useRef, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import styles from "./menu.module.scss"

export default ({ isOpen, closeMenu }) => {
  const container = useRef()

  const handleClick = e => {
    if (container.current.contains(e.target)) {
      return
    }
    closeMenu()
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClick)
    }
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  })

  return (
    <CSSTransition
      in={isOpen}
      timeout={200}
      classNames={{ ...styles }}
      unmountOnExit
    >
      <div ref={container} className={styles.container}>
        <ul className={styles.ul}>
          <li className={styles.menuItem}>Home</li>
          <li className={styles.menuItem}>Pocket</li>
          <li className={styles.menuItem}>Studio</li>
          <li className={styles.menuItem}>Advanced</li>
        </ul>
      </div>
    </CSSTransition>
  )
}
