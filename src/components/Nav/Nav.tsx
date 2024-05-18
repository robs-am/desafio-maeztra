import React from 'react'

import { navigation } from "../../data"


export const Nav = () => {
  return (
    <nav >
      <ul>
        {navigation.map((item, index) => {
          return <li key={index}><a href={item.href}>{item.name}</a></li>
        })}
      </ul>
    </nav>
  )
}

export default Nav
