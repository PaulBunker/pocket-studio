import React, { useState } from "react"
import PropTypes from "prop-types"
import MenuLink from "../menuLink/menuLink"

const SubMenu = ({ text, menu }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div>
      <button onClick={toggle} type="button">
        {text}
      </button>
      {isOpen && menu.map(link => <MenuLink key={link.target} />)}
    </div>
  )
}

SubMenu.propTypes = {
  text: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired
    })
  ).isRequired
}

export default SubMenu
