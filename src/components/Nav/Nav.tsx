import React from 'react'

import { navigation } from "../../data"


export const Nav = () => {
  return (
    <nav className="ml-16">
      <ul className="flex gap-x-10">
        {navigation.map((item, index) => {
          return <li key={index}><a href={item.href}>{item.name}</a></li>
        })}
      </ul>
    </nav>
  )
}

export default Nav
