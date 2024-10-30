import React from 'react'
import st from './Title3.module.css'

function Title3({text, color, size}) {
  return (
    <h4 className={st.title} style={{color: color, fontSize: size}}>{text}</h4>
  )
}

export default Title3