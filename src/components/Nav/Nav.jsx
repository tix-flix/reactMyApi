import React from 'react'
import st from './Nav.module.css'
import NavLogo from '../UI/NavLogo/NavLogo'
import NavLInk from '../UI/NavLink/NavLink'

function Nav() {
  return (
      <div className={st.cont}>
        <div className={st.nav__logo}>
          <NavLogo link="https://freepngimg.com/save/31572-ryan-gosling/990x1281" width="50px" br="20px"/>
        </div>
        <ul className={st.list}>
          <li className={st.list__link}>
            <NavLInk text="HOME" color="white" size="25px" link="#"/>
          </li>
          <li className={st.list__link}>
          <NavLInk text="MAIN" color="white" size="25px" link="#"/>
          </li>
          <li className={st.list__link}>
          <NavLInk text="ABOUT" color="white" size="25px" link="#"/>
          </li>
        </ul>
      </div>
  )
}

export default Nav