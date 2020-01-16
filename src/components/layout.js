import React from "react"

export default ({ children }) => {
  return (
    <>
      <header>
        <h1 class="home">
          <a href="/">Darius Cepulis</a>
        </h1>
      </header>
      <p>
        <label for="theme">Theme: </label>
        <select id="theme" name="theme">
          <option value="rad">Rad</option>
          <option value="paper">Print</option>
          <option value="editor">Editor</option>
          <option value="1989" selected>
            1989
          </option>
          <option value="2019">2019</option>
        </select>
      </p>
      <main>{children}</main>
    </>
  )
}
