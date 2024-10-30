import React from 'react'
import st from './Layout.module.css'
import Nav from '../Nav/Nav'

function Layout({children}) {
  return (
    <div className={st.wrapper}>
      <div className={st.container}>
        <Nav/>
        {children}
        </div>
    </div>
  )
}

export default Layout