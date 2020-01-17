import React from "react"

import { Link } from "gatsby"

export default ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Darius Cepulis</Link>
        </h1>
      </header>
      <p>
        <label>
          Theme:
          <select>
            <option value="rad">Rad</option>
            <option value="paper">Print</option>
            <option value="editor">Editor</option>
            <option value="1989">1989</option>
            <option value="2019">2019</option>
          </select>
        </label>
      </p>
      <main>{children}</main>
    </>
  )
}
