import React from 'react'
import "./global.css"
import { navigation } from "../../data"


export const Nav = () => {
  return (
    <nav >
      <ul className="ul flex flex-row items-center justify-center my-4">
        {navigation.map((item, index) => {
          return <li className="li px-14 text-sm" key={index}><a c href={item.href}>{item.name}</a></li>
        })}
      </ul>
    </nav>
  )
}

export default Nav
