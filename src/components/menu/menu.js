/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import styles from './menu.module.scss'
import MenuLink from '../menuLink/menuLink'
import SubMenu from '../subMenu/subMenu'
import toc from '../../helpers/data/toc.json'

const Menu = ({ isOpen, closeMenu, currentPage }) => {
  const container = useRef()

  useEffect(() => {
    const handleClick = e => {
      if (container.current.contains(e.target)) {
        return
      }
      closeMenu()
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClick)
    }
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [closeMenu, isOpen])

  return (
    <CSSTransition
      in={isOpen}
      timeout={1000}
      classNames={{ ...styles }}
      unmountOnExit
    >
      <nav ref={container} className={styles.container}>
        {toc.map(item =>
          item.type === 'link' ? (
            <MenuLink
              key={item.id}
              {...item}
              closeMenu={closeMenu}
              currentPage={currentPage}
            />
          ) : (
            <SubMenu
              key={item.id}
              {...item}
              closeMenu={closeMenu}
              currentPage={currentPage}
            />
          )
        )}
      </nav>
    </CSSTransition>
  )
}

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
}

export default Menu
