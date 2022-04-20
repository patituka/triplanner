
import React from "react";
import { Link } from 'gatsby'

export default function NavBar() {

  const linkStyle = `
     Hover:opacity-70
     text-sm
     sm:text-lg
    `
  const logoStyle = `
    text-white 
    font-rammetto
    sm:text-base
    text-sm
    `

  return (
    <nav className="flex sm:justify-between justify-around items-center bg-blue-900 lg:px-20 sm:px-6 py-8 text-gray-100">
      <h3 className={logoStyle}>Triplanner</h3>
      <ul className="flex">
        <li className={linkStyle}><Link to="/">Vols</Link></li>
        <li className={linkStyle}><Link to="/hotel">Hotels</Link></li>
        <li className={linkStyle}><Link to="/rent">Location de voiture</Link></li>
      </ul>
    </nav>
  )
}