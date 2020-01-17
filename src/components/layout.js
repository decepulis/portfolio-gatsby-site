import React from "react"

import { Link } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

export default ({ children, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <>
      <header>
        <h1>
          <Link to="/">Darius Cepulis</Link>
        </h1>
      </header>
      <nav>
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
        <Breadcrumb
          crumbs={crumbs}
          crumbWrapperStyle={{}}
          crumbStyle={{
            textDecoration: "",
            fontSize: "",
            color: "",
          }}
          crumbActiveStyle={{
            color: "",
          }}
          crumbSeparator=" / "
        />
      </nav>
      <main>{children}</main>
    </>
  )
}
