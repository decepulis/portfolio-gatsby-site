import React from "react"

export default ({ title, subtitle, date, description }) => (
  <section>
    <header>
      {title && <h3>{title}</h3>}
      {subtitle && <p>{subtitle}</p>}
      {date && <p>{date}</p>}
    </header>
    {description && <p>{description}</p>}
  </section>
)
