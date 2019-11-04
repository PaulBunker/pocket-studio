import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './menuLink.module.scss'

const MenuLink = ({ text, target, closeMenu, currentPage }) => (
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

MenuLink.propTypes = {
  text: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
}

export default MenuLink
