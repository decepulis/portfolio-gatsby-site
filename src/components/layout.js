import React, { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

import { Link } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

export default ({ children, pageContext, pageTitle }) => {
  const [theme, setTheme] = useContext(ThemeContext)

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
          <select value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="1989">1989</option>
            <option value="2019">2019</option>
            <option value="paper">Print</option>
            <option value="rad">Rad</option>
            <option value="editor">Editor</option>
          </select>
        </label>
        <Breadcrumb
          crumbs={crumbs}
          crumbWrapperStyle={{}}
          crumbStyle={{
            textDecoration: "",
            fontSize: "",
            color: "",
            textTransform: "capitalize",
          }}
          crumbActiveStyle={{
            color: "",
          }}
          crumbSeparator=" / "
          crumbLabel={pageTitle}
        />
      </nav>
      <main>{children}</main>
    </>
  )
}
