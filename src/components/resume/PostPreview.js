import React from "react"
import { Link } from "gatsby"

export default ({ title, subtitle, date, description, slug }) => (
  <section>
    <header>
      {title && (
        <h3>
          <Link to={slug}>{title}</Link>
        </h3>
      )}
      {subtitle && <p>{subtitle}</p>}
      {date && <p>{date}</p>}
    </header>
    {description && <p>{description}</p>}
  </section>
)
