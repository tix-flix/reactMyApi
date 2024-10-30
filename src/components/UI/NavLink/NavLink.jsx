import React from 'react'
import st from "./NavLink.module.css"

function NavLInk({link, text, color, size}) {
  return (
    <a style={{ color: color, fontSize: size }} className={st.link} href={link}>{text}</a>
  )
}

export default NavLInk