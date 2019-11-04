import React from 'react'
import { MdToc, MdClose } from 'react-icons/md'
import styles from './menuIcon.module.scss'

export default ({ handleClick, isMenuOpen }) => {
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
