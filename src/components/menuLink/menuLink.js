import React from "react"
import classnames from "classnames"
import styles from "./menuLink.module.scss"

export default ({ activeLinkId, onClick, text, target, id }) => {
  const isActive = activeLinkId === id
  return (
    <a
      href={target}
      onClick={onClick}
      className={classnames(styles.link, { [styles.active]: isActive })}
    >
      {text}
    </a>
  )
}
