import React from 'react'
import PropTypes from 'prop-types'
import { MdToc, MdClose } from 'react-icons/md'
import styles from './menuIcon.module.scss'

const MenuIcon = ({ handleClick, isMenuOpen }) => {
  return (
    <button
      alt-text={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
      className={styles.button}
      type="button"
      onClick={handleClick}
    >
      {isMenuOpen ? <MdClose /> : <MdToc />}
    </button>
  )
}

MenuIcon.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
}

export default MenuIcon
