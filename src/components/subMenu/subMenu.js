/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react"
import PropTypes from "prop-types"
import { MdKeyboardArrowRight } from "react-icons/md"
import classnames from "classnames"
import { CSSTransition } from "react-transition-group"
import MenuLink from "../menuLink/menuLink"
import styles from "./subMenu.module.scss"

const SubMenu = ({ text, menu }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <button className={styles.link} onClick={toggle} type="button">
        <MdKeyboardArrowRight
          className={classnames(styles.icon, { [styles.active]: isOpen })}
        />
        {text}
      </button>
      <CSSTransition
        in={isOpen}
        timeout={200}
        classNames={{ ...styles }}
        unmountOnExit
      >
        <div className={styles.linkContainer}>
          {menu.map(link => (
            <MenuLink key={link.target} {...link} />
          ))}
        </div>
      </CSSTransition>
    </>
  )
}

SubMenu.propTypes = {
  text: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired
    })
  ).isRequired
}

export default SubMenu
