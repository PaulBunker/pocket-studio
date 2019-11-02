/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import styles from "./menu.module.scss"
import MenuLink from "../menuLink/menuLink"
import SubMenu from "../subMenu/subMenu"
import toc from "../../helpers/data/toc.json"

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
      timeout={1000}
      classNames={{ ...styles }}
      unmountOnExit
    >
      <nav ref={container} className={styles.container}>
        {toc.map(item =>
          item.type === "link" ? (
            <MenuLink key={item.id} {...item} />
          ) : (
            <SubMenu key={item.id} {...item} />
          )
        )}
      </nav>
    </CSSTransition>
  )
}
